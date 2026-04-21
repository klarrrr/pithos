import { JSX, ReactNode } from "react"
import SideBar from "../SideBar"
import Link from "next/link";
import { Home, Boxes, Notebook, MonitorCog, HandCoins, Star, Settings } from "lucide-react";
import { FaUsers, FaUserTie } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";


const AdminMainLayout = ({ children }: { children: ReactNode }) => {
    const iconSize = 18;
    const links: JSX.Element[] = [
        <Link key={'1'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/admin/admin-dashboard'}>
            <Home size={iconSize} />
            Dashboard
        </Link>,
        <Link key={'2'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/admin/manage-users'}>
            <FaUsers size={iconSize} />
            Users
        </Link>,
        // <Link key={'3'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/admin/manage-products'}>
        //   <Boxes size={iconSize}/>
        //   Products
        // </Link>,
        // <Link key={'4'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/admin/manage-orders'}>
        //   <Notebook size={iconSize}/>
        //   Orders
        // </Link>,
        <Link key={'3'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/admin/site-content'}>
            <MonitorCog size={iconSize} />
            Site Content
        </Link>,
        <Link key={'4'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/admin/system-config'}>
            <GrConfigure size={iconSize} />
            System Config
        </Link>,
        <Link key={'5'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/admin/payment-gateways'}>
            <HandCoins size={iconSize} />
            Payment Gateways
        </Link>,
        // <Link key={'7'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/admin/reviews-ratings'}>
        //   <Star size={iconSize}/>
        //   Reviews & Ratings
        // </Link>,
    ];

    // Tinanggal ko muna toh, parang wala kasing sense e - Klarenz

    // const settingLink: JSX.Element = <Link className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/admin/account'}>
    //     <Settings size={iconSize} />
    //     Settings
    // </Link>;

    return (
        <main className='flex w-screen h-full min-h-0'>
            <SideBar links={links}/>
            {children}
        </main>
    )
}

export default AdminMainLayout
