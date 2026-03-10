import { ApiError, CheckoutPaymentIntent, DisbursementMode, OrdersController } from "@paypal/paypal-server-sdk";
import { generateAuthAssertion } from "./generate_auth_assertion";
import { createPPClient } from "./paypal";

const client = createPPClient();
const ordersController = new OrdersController(client);

const authAssertion = generateAuthAssertion(
  process.env.O_AUTH_CLIENT_ID!,
  "R558ADTHFQ4Y6"  // from your DB, after onboarding
);

const orderBody = {
  intent: CheckoutPaymentIntent.Capture,  // or "AUTHORIZE" if delayed capture
  purchaseUnits: [
    {
      amount: {
        currencyCode: "PHP",
        value: "500.00",           // total buyer pays
      },
      payee: {
        merchantId: "754MYEAMCWFV2",   // from onboarding
        // or email_address: "seller-sandbox@paypal.com"
      },
      paymentInstruction: {
        disbursementMode: DisbursementMode.Instant,  // or "DELAYED" if you want to hold & payout later
        platformFees: [
          {
            amount: {
              currencyCode: "PHP",
              value: "100.00",           // your platform fee/commission
            },
            // payee is optional — if omitted, fee goes to API caller (your platform account)
          }
        ]
      }
    }
  ]
};

try {
  console.log("Starting PayPal order creation...");

  const result = await ordersController.createOrder({
    body: orderBody,  // as above with payee + platform_fees
    paypalPartnerAttributionId: process.env.PAYPAL_BN_CODE,  // your BN code
    paypalAuthAssertion: authAssertion,
    paypalClientMetadataId: crypto.randomUUID(),
    paypalRequestId: crypto.randomUUID(),  // idempotency
    prefer: "return=representation",
  });

  console.log("Order created successfully:", result);  // ← this will now log reliably
  console.log("Order ID:", result.result?.id);
  console.log("Full response:", JSON.stringify(result, null, 2));
  const orderId = result.result?.id || "";

//   Afterwards capture the order by passing the id and a bunch of other stuff
//   await captureOrder(orderId);

} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
  console.log(error)
}