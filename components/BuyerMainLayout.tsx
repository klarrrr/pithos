import { JSX, ReactNode } from "react"
import SideBar from "./SideBar"
import Link from "next/link";
import { User, Shield, ShoppingBag, Settings } from "lucide-react";

const BuyerMainLayout = ({children} : {children : ReactNode}) => {
  const iconSize = 18;
  const links: JSX.Element[] = [
    <Link key={'1'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/buyer/account/personal-info'}>
      <User size={iconSize}/>
      Personal Info
    </Link>,
    <Link key={'2'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/buyer/account/security'}>
      <Shield size={iconSize}/>
      Security
    </Link>,
    <Link key={'3'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/buyer/account/purchase-history'}>
      <ShoppingBag size={iconSize}/>
      Purchase History
    </Link>,
  ];

  return (
    <main className='flex w-full h-full min-h-0 overflow-hidden'>
        <SideBar links={links}/>
        <section className="flex-1 min-w-0 h-full overflow-y-auto">
          {children}
        </section>
    </main>
  )
}

export default BuyerMainLayout
