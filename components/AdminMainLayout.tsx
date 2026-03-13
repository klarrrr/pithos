import { JSX, ReactNode } from "react"
import SideBar from "./SideBar"
import Link from "next/link";

const AdminMainLayout = ({children} : {children : ReactNode}) => {
  
  const links: JSX.Element[] = [
    <Link key={'1'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex" href={'/admin/admin-dashboard'}>Dashboard</Link>,
    <Link key={'2'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex" href={'/admin/manage-users'}>Users</Link>,
    <Link key={'3'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex" href={'/admin/manage-products'}>Products</Link>,
    <Link key={'4'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex" href={'/admin/manage-orders'}>Orders</Link>,
    <Link key={'5'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex" href={'/admin/site-content'}>Site Content</Link>,
    <Link key={'6'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex" href={'/admin/payment-gateways'}>Payment Gateways</Link>,
    <Link key={'7'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex" href={'/admin/reviews-ratings'}>Reviews & Ratings</Link>,
  ];

  const settingLink: JSX.Element = <Link className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex" href={'/admin/account'}>Settings</Link>;

  return (
    <main className='flex w-screen h-full'>
        <SideBar links={links} settingLink={settingLink}/>
        {children}
    </main>
  )
}

export default AdminMainLayout
