import Image from "next/image"
import Link from "next/link"
import NavSearchBar from "./NavSearchBar";
import { ThemeSwitcher } from "./theme-switcher";
import ShoppingCartBtn from "./ShoppingCartBtn";
import { Suspense } from "react";
import { AuthButton } from "./buyer/AuthButtonBuyer";
import PithosLogo from "./PithosLogo";

const MobileNavbar = ({open, setOpen} : {open : boolean, setOpen : (open : boolean) => void}) => {
    const logoSize = 32;
    return (
    <div className={`
        flex
        lg:hidden
        flex-col
        items-center
        justify-center
        h-full
        w-full
        gap-16

        fixed
        top-0 right-0
        transition-transform duration-300 ease-in-out
        translate-x-0 
        p-4 
        
        drop-shadow-lg 
        font-medium
        z-20

        bg-[#0f0f0f90]

        backdrop-blur-3xl
        ${open ? 'translate-x-0' : 'translate-x-full'}
    `}>
        <div className="flex gap-5 items-center font-semibold">
            <Link href={"/"} className="text-white font-bold uppercase flex flex-row gap-2 items-center">
                <PithosLogo size={24} color="white"/>
                Pithos
            </Link>
        </div>

        <div className="flex gap-5 items-center">
            {/* TODO: Make dynamic later */}
            <NavSearchBar/>
        </div>

        <div className='flex flex-col justify-center items-center gap-4'>
            <ThemeSwitcher/>
            <ShoppingCartBtn/>
            <Suspense>
                <AuthButton />
            </Suspense>
        </div>

    </div>
    )
}

export default MobileNavbar
