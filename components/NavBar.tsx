import NavBarBuyer from "./buyer/NavBarBuyer";
import NavBarSeller from "./seller/NavBarSeller";
import NavBarAdmin from "./admin/NavBarAdmin";
import { createClient } from "@/lib/supabase/server";

const NavBar = async () => {

    const supabase = await createClient();
    const { data: claimsData, error: claimsError } = await supabase.auth.getClaims();
    const user = claimsData?.claims;
    const role = user?.app_role;
    const user_role = await role;

    switch (role) {
        case 'seller':
            return <NavBarSeller role={user_role} />;
        case 'admin':
            return <NavBarAdmin role={user_role} />;
        default:
            return <NavBarBuyer />;
        }
}

export default NavBar
