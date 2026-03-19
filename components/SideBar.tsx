import Link from "next/link"
import { LogoutButton } from "./logout-button"
import { JSX } from "react";

// TODO : absolute -translate-x-[300px] - to hide and show the sidebar
const SideBar = ({links, settingLink} : {links : Array<JSX.Element>, settingLink : JSX.Element}) => {
    const linksGap = 4;
    return (
    <aside className='bg-primary-foreground text-primary border-r border-r-border h-full p-8 px-5 w-[300px] flex flex-col justify-between text-sm'>
        <div className={`flex flex-col gap-${linksGap}`}>
            {links}
        </div>
        <div className={`flex flex-col gap-${linksGap}`}>
            {settingLink}            
            <LogoutButton />
        </div>
    </aside>
  )
}

export default SideBar
