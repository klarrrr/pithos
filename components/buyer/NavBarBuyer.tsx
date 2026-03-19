"use client"

import Link from "next/link"
import { AuthButton } from "./AuthButtonBuyer";
import { Suspense } from "react";
import { ThemeSwitcher } from "../theme-switcher";
import NavSearchBar from "@/components/NavSearchBar";
import ShoppingCartBtn from "../ShoppingCartBtn";
import BurgerBtn from "../BurgerBtn";
import { useState } from "react";
import MobileNavbar from "../MobileNavbar";
import PithosLogo from "../PithosLogo";

const NavBarBuyer = () => {
    const logoSize = 16;
    const [open, setOpen] = useState(false);

    // if (loading) return <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 dark:bg-[#0F0F0F] bg-[#0F0F0F]">Loading...</nav>

    return (
        <>
            <nav className="w-full lg:flex justify-center border-b border-b-mute h-16 bg-primary-foreground sticky hidden">
                <div className="w-full flex justify-between items-center p-3 px-5 text-sm">

                    {/* Logo Brand */}
                    
                    <div className="flex gap-5 items-center font-semibold">
                        <Link href={"/"} className="text-foreground font-bold uppercase flex flex-row gap-2 items-center">
                            <PithosLogo size={24} color="foreground"/>
                            Pithos
                        </Link>
                    </div>

                    {/* Nav Links */}

                    <div className="flex gap-5 items-center lg:h-full">
                        {/* TODO: Make dynamic later */}
                        <NavSearchBar/>
                    </div>
                    
                    {/* Sign Ups and Stuff */}

                    <div className="flex gap-2 items-center">    
                        <ThemeSwitcher/>
                        <ShoppingCartBtn/>
                        <Suspense>
                            <AuthButton />
                        </Suspense>
                    </div>


                </div>
            </nav>
            <BurgerBtn open={open} setOpen={setOpen} />
            <MobileNavbar open={open} setOpen={setOpen} />
        </>
    )
}

export default NavBarBuyer
