"use client"
import {useSidebar} from "@/components/ui/sidebar"
import {Menu} from "lucide-react";
import {Button} from "@/components/ui/button";

export function CustomSidebarTrigger() {
    const {toggleSidebar} = useSidebar()

    return <Button variant="ghost" size="icon" className='md:hidden' onClick={toggleSidebar}><Menu/></Button>
}