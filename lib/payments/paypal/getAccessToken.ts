"use server";

export default async function getAccessToken() {
    try {
        const clientId = process.env.O_AUTH_CLIENT_ID;
        const clientSecret = process.env.O_AUTH_CLIENT_SECRET;
        
        if (!clientId || !clientSecret) {
            return "PayPal credentials not set";
        }

        // Encode credentials for Basic Auth
        const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

        // Request access token from PayPal
        const response = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
            method: "POST",
            headers: {
                "Authorization": `Basic ${auth}`,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "grant_type=client_credentials"
        });

        if (!response.ok) {
            const errorData = await response.json();
            return errorData;
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("PayPal Token Error:", error);
        return "Internal Server Error";
    }
  }
  