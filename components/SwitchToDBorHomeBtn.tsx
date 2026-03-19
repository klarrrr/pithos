"use client";

import { CircleGauge } from 'lucide-react'
import { Store } from 'lucide-react';
import Link from 'next/link'
import { Button } from './ui/button'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { isCurrentRouteRBACProtected } from '@/lib/supabase/site_routes';

// TODO: Dapat kahit nasa shopping magiging dashboard icon

const SwitchToDBorHomeBtn = ({role, DBLink, homePageLink} : {role : string, DBLink : string, homePageLink : string}) => {
    const pathname = usePathname();
    const [isProtected, setIsProtected] = useState(isCurrentRouteRBACProtected(pathname, role));
    return (
    <Link href={`${isProtected ? homePageLink : DBLink}`} onClick={()=>{
        if(isCurrentRouteRBACProtected(pathname, role)){
            setIsProtected(true)
        }else{
            setIsProtected(false)
        }
    }}>
        <Button variant="ghost" size={'sm'} >
            {isProtected ? <><Store size={16} className=''/>Go to Public</> : <><CircleGauge size={16} className=''/>Go to Restricted</>}
        </Button>
        <button ></button>
    </Link>
  )
}

export default SwitchToDBorHomeBtn
