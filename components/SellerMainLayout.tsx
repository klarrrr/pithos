import { JSX, ReactNode } from "react"
import SideBar from "./SideBar"
import Link from "next/link";

const SellerMainLayout = ({children} : {children : ReactNode}) => {
  
  const links: JSX.Element[] = [
    <Link key={'1'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex" href={'/seller/seller-dashboard'}>Dashboard</Link>,
    <Link key={'2'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex" href={'/seller/add-asset'}>Add Asset</Link>,
    <Link key={'3'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex" href={'/seller/creations'}>Creations</Link>,
    <Link key={'4'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex" href={'/seller/orders'}>Orders</Link>
  ];

  const settingLink: JSX.Element = <Link className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex" href={'/seller/account'}>Settings</Link>;

  return (
    <main className='flex w-screen h-full'>
        <SideBar links={links} settingLink={settingLink}/>
        {children}
    </main>
  )
}

export default SellerMainLayout
