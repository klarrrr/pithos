import { ApiError, OrdersController } from "@paypal/paypal-server-sdk";
import { createPPClient } from "./paypal";
import { generateAuthAssertion } from "@/lib/payments/paypal/generate_auth_assertion";

const client = createPPClient();
const ordersController = new OrdersController(client);

async function captureOrder(id : string) {
    try {
      console.log(`Capturing order ${id}...`);
  
      const captureResult = await ordersController.captureOrder({
        id,  // "06C23905RJ036260A"
        paypalRequestId: crypto.randomUUID(),
        paypalAuthAssertion: generateAuthAssertion(
          process.env.O_AUTH_CLIENT_ID!,
          "R558ADTHFQ4Y6"  // same seller payer_id
        ),
        prefer: "return=representation",
      });
  
      console.log("Capture success!", captureResult);
      console.log("Capture status:", captureResult.result?.status);
      console.log("Full capture:", JSON.stringify(captureResult.result, null, 2));
  
    } catch (err) {
      console.error("Capture failed:", err);
      if (err instanceof ApiError) {
        console.error("Status:", err.statusCode);
        console.error("Body:", err.body);
      }
    }
  }