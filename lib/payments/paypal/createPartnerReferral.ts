"use server";

import { createClient } from "@/lib/supabase/server";
import { error } from "console";

interface linkInterface {
    href: string,
    rel: string,
    method: string,
    description: string
}

// Get the uuid from the database and use it as tracking_id

export async function createPartnerRef (accessToken : string){
    // Get uuid of user first, will be used for tracking_id

    const supabase = await createClient();
    const { data: claimsData, error: claimsError } = await supabase.auth.getClaims();
    
    if(!claimsData){
        console.log(error)
        return {error: "No Claims"};
    }

    const user = claimsData?.claims;
    const userUUIDTrackingID = user?.sub;

    const res = await fetch('https://api-m.sandbox.paypal.com/v2/customer/partner-referrals', {
        method: 'POST',
        headers : {
            'Authorization' : `Bearer ${accessToken}`,
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            "operations": [{
                "operation": "API_INTEGRATION",
                "api_integration_preference":{
                    "rest_api_integration" : {
                        "integration_method" : "PAYPAL",
                        "integration_type" : "THIRD_PARTY", 
                        "third_party_details" : {
                            "features" : [
                                "PAYMENT"
                            ]
                        }
                    }
                }
              }],
            "products": [ "EXPRESS_CHECKOUT" ],
            "legal_consents": [{
                "type": "SHARE_DATA_CONSENT",
                "granted": true 
              }],
            "tracking_id": userUUIDTrackingID,
            "partner_config_override": {
                "return_url": `localhost:3000/success-onboarding`,
                "show_add_credit_card": true
            }
        }),
    });

    if(!res.ok){
        const errorText = await res.text();
        throw new Error(`Paypal Error : ${res.status} - ${errorText}`)
    }

    const data = await res.json();

    // console.log(data);

    const links : Array<linkInterface> = data.links
    const actionUrl = links.find(link => link.rel === 'action_url')?.href
    const referralUrl = links.find(link => link.rel === 'self')?.href

    // console.log(actionUrl)

    return {actionUrl : actionUrl, referralUrl : referralUrl};

} 