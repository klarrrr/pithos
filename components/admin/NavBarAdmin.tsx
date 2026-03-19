"use client";

import Link from "next/link"
import { AuthButton } from "@/components/admin/AuthButtonAdmin";
import { Suspense } from "react";
import Image from "next/image";
import { ThemeSwitcher } from "../theme-switcher";
import NavSearchBar from "@/components/NavSearchBar";
import ShoppingCartBtn from "../ShoppingCartBtn";
import { isCurrentRouteRBACProtected } from "@/lib/supabase/site_routes";
import { usePathname } from "next/navigation";
import SwitchToDBorHomeBtn from "../SwitchToDBorHomeBtn";
import PithosLogo from "../PithosLogo";


const NavBar = ({role} : {role : string}) => {
    const logoSize = 16;
    const pathname = usePathname();

    // if (loading) return <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 dark:bg-[#0F0F0F] bg-[#0F0F0F]">Loading...</nav>

    return (
    <nav className="w-full flex justify-center border-b border-b-mute h-16 bg-primary-foreground sticky">
        <div className="w-full flex justify-between items-center h-full py-2 px-5 text-sm">

            {/* Logo Brand */}
            
            <div className="flex gap-5 items-center font-semibold h-full">
                <Link href={"/"} className="text-foreground font-bold uppercase flex flex-row gap-2 items-center">
                    <PithosLogo size={25} color="foreground"/>
                    Pithos
                </Link>
            </div>

            <div className="flex gap-5 items-center h-full">
                {/* TODO: Make dynamic later */}
                {!isCurrentRouteRBACProtected(pathname, role) ? <NavSearchBar/> : ''}
            </div>

            {/* Sign Ups and Stuff */}

            <div className="flex gap-2 items-center">    
                <ThemeSwitcher/>
                <ShoppingCartBtn />
                <SwitchToDBorHomeBtn role={role} DBLink="/admin/admin-dashboard" homePageLink="/"/>
                <Suspense>
                    <AuthButton />
                </Suspense>
            </div>


        </div>
    </nav>
    )
}

export default NavBar
