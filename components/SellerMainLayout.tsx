import { JSX, ReactNode } from "react"
import SideBar from "./SideBar"
import Link from "next/link";
import { Home, PackagePlus, Boxes, Notebook, Settings } from "lucide-react";

const SellerMainLayout = ({children} : {children : ReactNode}) => {
  const iconSize = 18;
  const links: JSX.Element[] = [
    <Link key={'1'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/seller/seller-dashboard'}>
      <Home size={iconSize}/>
      Dashboard
    </Link>,
    <Link key={'2'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/seller/assets'}>
      <PackagePlus size={iconSize}/>
      Assets
    </Link>,
    <Link key={'4'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/seller/orders'}>
      <Notebook size={iconSize}/>
      Orders
    </Link>
  ];

  const settingLink: JSX.Element = <Link className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/seller/account'}>
    <Settings size={iconSize}/>
    Settings
  </Link>;

  return (
    <main className='flex w-full h-full min-h-0 overflow-hidden'>
        <SideBar links={links} settingLink={settingLink}/>
        <section className="flex-1 min-w-0 h-full overflow-y-auto">
          {children}
        </section>
    </main>
  )
}

export default SellerMainLayout
