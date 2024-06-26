"use client"
import { usePathname } from "next/navigation"
import { Button } from "./button"
import Link  from "next/link"
import Image from "next/image"

type Props={
    label:string,
    iconSrc:string,
    href:string
}


export const SideBarItem = ({
    label,iconSrc,href
}:Props) => {
    const pathname=usePathname();
    const active=pathname === href;
  return (
   <Button variant={active?"sidebarOutline":"sidebar"}
   className="justify-start h-[52px]"
   asChild>
   {/*  as child kyu pass kiya ???*/}
   <Link href={href}>
   <Image src={iconSrc} alt="label" className="mr-5" height={32} width={32}></Image>
   {label}
   </Link>

</Button>
)
}
