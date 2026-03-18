"use server";

import { createClient as ccClient } from "@/lib/supabase/client";
import { createClient as ccServer } from "@/lib/supabase/server";

export async function isOnBoarded(){
    const supabaseClient = ccClient();
    const supabaseServer = await ccServer();
    const { data: claimsData, error: claimsError } = await supabaseServer.auth.getClaims();
    const user = claimsData?.claims;
    const userUUIDTrackingID = user?.sub;
    const {data : paypal_onboardments, error} = await supabaseClient.from('paypal_onboardments').select().eq('onboarded_seller_id', userUUIDTrackingID); 
    // 
    console.log(paypal_onboardments);
    return (paypal_onboardments?.length !== 0);
}