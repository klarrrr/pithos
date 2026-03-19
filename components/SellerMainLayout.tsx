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
    <Link key={'2'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/seller/add-asset'}>
      <PackagePlus size={iconSize}/>
      Add
     Asset</Link>,
    <Link key={'3'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/seller/creations'}>
      <Boxes size={iconSize}/>
      Creations
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
    <main className='flex w-screen h-full'>
        <SideBar links={links} settingLink={settingLink}/>
        {children}
    </main>
  )
}

export default SellerMainLayout
