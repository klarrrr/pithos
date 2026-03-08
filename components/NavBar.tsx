import NavBarBuyer from "@/components/NavBarBuyer";
import NavBarSeller from "./NavBarSeller";
import NavBarAdmin from "./NavBarAdmin";
import { createClient } from "@/lib/supabase/server";

const NavBar = async () => {
    const supabase = await createClient();
    const { data: claimsData, error: claimsError } = await supabase.auth.getClaims();
    const user = claimsData?.claims;
    const role = user?.app_role;
    switch (role) {
        case 'seller':
            return <NavBarSeller />;
        case 'admin':
            return <NavBarAdmin />;
        default:
            return <NavBarBuyer />;
        }
}

export default NavBar
