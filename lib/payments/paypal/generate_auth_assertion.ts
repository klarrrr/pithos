export const generateAuthAssertion = (platformClientId: string, sellerPayerId: string): string => {
    const header = Buffer.from(JSON.stringify({ alg: "none" })).toString("base64url");
  
    const payload = Buffer.from(JSON.stringify({
      iss: platformClientId,
      payer_id: sellerPayerId,  // or "email_address": "seller@example.com" in some cases
    })).toString("base64url");
    return `${header}.${payload}.`;
}