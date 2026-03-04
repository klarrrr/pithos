import Link from "next/link"
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Suspense } from "react";
import { hasEnvVars } from "@/lib/utils";
import Image from "next/image";
import { ThemeSwitcher } from "./theme-switcher";


const NavBar = async () => {
    return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 dark:bg-[#0F0F0F] bg-[#0F0F0F]">
        <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            
            {/* Logo Brand */}
            
            <div className="flex gap-5 items-center font-semibold">
                <Link href={"/"} className="text-white font-bold uppercase flex flex-row gap-2 items-center">
                    <Image src={'/pithos/pithos-logo.svg'} width={24} height={24} alt="Pithos Logo" />
                    Pithos
                </Link>
            </div>

            {/* Nav Links */}

            <div className="flex gap-5 items-center">
                
            </div>
            
            {/* Sign Ups and Stuff */}

            <div className="flex gap-5 items-center">    
                <ThemeSwitcher/>
                {!hasEnvVars ? (
                    <EnvVarWarning />
                ) : (
                    <Suspense>
                        <AuthButton />
                    </Suspense>
                )}
            </div>


        </div>
    </nav>
    )
}

export default NavBar
