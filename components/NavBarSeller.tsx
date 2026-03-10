import Link from "next/link"
import { AuthButton } from "@/components/AuthButtonSeller";
import { Suspense } from "react";
import Image from "next/image";
import { ThemeSwitcher } from "./theme-switcher";
import NavSearchBar from "./NavSearchBar";
import ShoppingCartBtn from "./ShoppingCartBtn";
import { Button } from "./ui/button";

// TODO: Disable Nav Search Bar if user is in dashboard or just have a whole nother NavBar that is customized for seller, same with admin

const NavBar = async () => {
    const logoSize = 16;

    // if (loading) return <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 dark:bg-[#0F0F0F] bg-[#0F0F0F]">Loading...</nav>

    return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 dark:bg-[#0F0F0F] bg-[#0F0F0F] sticky">
        <div className="w-full flex justify-between items-center p-3 px-5 text-sm">

            {/* Logo Brand */}
            
            <div className="flex gap-5 items-center font-semibold">
                <Link href={"/"} className="text-white font-bold uppercase flex flex-row gap-2 items-center">
                    <Image src={'/pithos/pithos-logo.svg'} width={logoSize} height={logoSize} alt="Pithos Logo" />
                    Pithos
                </Link>
            </div>

            {/* Nav Links */}

            <div className="flex gap-5 items-center">
                {/* TODO: Make dynamic later */}
                <NavSearchBar/>
            </div>
            
            {/* Sign Ups and Stuff */}

            <div className="flex gap-2 items-center">    
                <ThemeSwitcher/>
                <ShoppingCartBtn />
                <Suspense>
                    <AuthButton />
                </Suspense>
            </div>


        </div>
    </nav>
    )
}

export default NavBar
