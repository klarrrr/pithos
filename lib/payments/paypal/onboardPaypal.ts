import getAccessToken from '@/lib/payments/paypal/getAccessToken';
import { createPartnerRef } from '@/lib/payments/paypal/createPartnerReferral';

export async function startOnboardPaypal() {
    try {
      const resAccessToken = await getAccessToken();
      const accessToken = resAccessToken.access_token;
      // console.log(accessToken);
      const res = (await createPartnerRef(accessToken));
      const onboardingURL = res.actionUrl;
      const referralUrl = res.referralUrl
      return { success: true, onboardingURL, referralUrl }
    } catch (e) {
        return { success: true, error: (e as Error).message }
    }
  }