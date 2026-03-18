import { Suspense } from "react";
import { redirect } from 'next/navigation';

const successBoarding = async ({searchParams} : {searchParams : {[key : string] : string | string[] | undefined}}) => {
    return (
        <Suspense fallback={<div className="p-8 text-center">Processing your PayPal onboarding... Please wait</div>}>
          <SuccessContent searchParams={searchParams} />
        </Suspense>
      );
}

async function SuccessContent({searchParams} : {searchParams : {[key : string] : string | string[] | undefined}}){
    const params = await searchParams;

    const merchantId           = params.merchantId as string | undefined;
    const paypalMerchantId     = params.merchantIdInPayPal as string | undefined;
    const permissionsGranted   = params.permissionsGranted === 'true';
    const isEmailConfirmed     = params.isEmailConfirmed === 'true';
    const riskStatus           = params.riskStatus as string | undefined;  

    if (!paypalMerchantId || !permissionsGranted || riskStatus !== 'SUBSCRIBED_WITH_ALL_FEATURES') {
        return <div className="p-8 text-red-600">Onboarding incomplete or failed. Please try again.</div>;
    }

    redirect('/seller/account?onboarded=true');

    return (
        <div className="p-8 max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Onboarding Complete!</h1>
            <p>Your PayPal merchant account is now linked.</p>
            <p>Merchant ID: <code>{paypalMerchantId}</code></p>
        </div>
    );
}

export default successBoarding
