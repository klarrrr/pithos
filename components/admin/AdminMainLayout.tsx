import { JSX, ReactNode } from "react"
import SideBar from "../SideBar"
import Link from "next/link";
import { Home, Boxes, Notebook, MonitorCog, HandCoins, Star, Settings } from "lucide-react";
import { FaUsers, FaUserTie } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";
import { HiDocument } from "react-icons/hi2";
import { FaWrench } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { MdPayments, MdDashboard } from "react-icons/md";

const AdminMainLayout = ({ children }: { children: ReactNode }) => {
    const iconSize = 18;
    const links: JSX.Element[] = [
        <Link key={'1'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/admin/admin-dashboard'}>
            <MdDashboard size={iconSize} />
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
            <RiComputerFill size={iconSize} />
            Site Content
        </Link>,
        <Link key={'4'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/admin/system-config'}>
            <FaWrench size={iconSize} />
            System Config
        </Link>,
        <Link key={'5'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/admin/payment-gateways'}>
            <MdPayments size={iconSize} />
            Payment Gateways
        </Link>,
        <Link key={'6'} className="hover:bg-accent hover:text-white p-2 rounded-md items-center flex gap-4" href={'/admin/audit-logs'}>
            <HiDocument size={iconSize} />
            Audit Logs
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
