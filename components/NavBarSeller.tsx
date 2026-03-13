"use client";

import Link from "next/link"
import { AuthButton } from "@/components/AuthButtonSeller";
import { Suspense } from "react";
import Image from "next/image";
import { ThemeSwitcher } from "./theme-switcher";
import NavSearchBar from "./NavSearchBar";
import ShoppingCartBtn from "./ShoppingCartBtn";
import { usePathname } from "next/navigation";
import { isCurrentRouteRBACProtected } from "@/lib/supabase/site_routes";
import SwitchToDBorHomeBtn from "./SwitchToDBorHomeBtn";

// TODO: Disable Nav Search Bar if user is in dashboard or just have a whole nother NavBar that is customized for seller, same with admin

/*

Note:

1. If isCurrentPathRoleBasedProtected is true : then that means we're on the role's exlusive pages like dashboard, create products, manage products, etc. Otherwise, we're in public. The idea is to switch content of the navbars depending on role.

*/

const NavBarSeller = ({role} : {role : string}) => {
    const pathname = usePathname();
    const logoSize = 16;
    // console.log("NAVBAR SELLER ROLE: " + role);

    // if (loading) return <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 dark:bg-[#0F0F0F] bg-[#0F0F0F]">Loading...</nav>

    return (
    <nav className="w-full flex justify-center border-b border-b-secondary h-16 dark:bg-[#0F0F0F] bg-[#0F0F0F] sticky">
        <div className="w-full flex justify-between items-center p-3 px-5 text-sm">

            {/* Logo Brand */}
            
            <div className="flex gap-5 items-center font-semibold">
                <Link href={"/"} className="text-white font-bold uppercase flex flex-row gap-2 items-center">
                    <Image src={'/pithos/pithos-logo.svg'} width={logoSize} height={logoSize} alt="Pithos Logo" />
                    Pithos
                </Link>
            </div>

            {/* Nav Links */}
            {/* If passed prop of the website location is not in public */}

            <div className="flex gap-5 items-center">
                {/* TODO: Make dynamic later */}
                {!isCurrentRouteRBACProtected(pathname, role) ? <NavSearchBar/> : ''}
            </div>
            
            {/* Sign Ups and Stuff */}

            <div className="flex gap-2 items-center">    
                <ThemeSwitcher/>
                <ShoppingCartBtn />
                <SwitchToDBorHomeBtn role={role} DBLink="/seller/seller-dashboard" homePageLink="/"/>
                <Suspense>
                    <AuthButton />
                </Suspense>
            </div>


        </div>
    </nav>
    )
}

export default NavBarSeller
