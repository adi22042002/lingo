 import React from 'react'
 import { ClerkLoading,ClerkLoaded,UserButton, ClerkProvider, } from '@clerk/nextjs';
 import Link from 'next/link';
 import { cn } from '@/lib/utils';
import Image from 'next/image';
import { SideBarItem } from './sidebar-items';
import { Loader } from 'lucide-react';

type props={
  className?:String;
}
 export const Sidebar = ({className}:props ) => {
   return (
     <div className= {cn( ' flex h-full lg:w--[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col',className)}>

<Link href="/learn">
<div className="pt-8 pl-4 pb-7 flex item-center gap-x-3 ">
          <Image src="/mascot.svg" height={40} width={40} alt=" Mascot"/>
       <h1 className="text-2xl font-extrabold text-green-600  tracking-wide">
        Lingo
       </h1>
        </div>
    
        </Link>
        <div className='flex flex-col gap-y-2 flex-  1'>
       <SideBarItem label='Learn' href='/learn' iconSrc='learn.svg'/>
       <SideBarItem label='Leaderboard' href='/leaderboard' iconSrc='leaderboard.svg'/>
       <SideBarItem label='Quests' href='/quests' iconSrc='quests.svg'/>
       <SideBarItem label='Shop' href='/shop' iconSrc='shop.svg'/>
        </div>
        <div className='p-4 '>
        {/* <ClerkProvider>
         <ClerkLoading>
          <Loader className='h-5 w-5 text-muted-foreground animate-spin'>
  <ClerkLoaded>
    <UserButton afterSignOutUrl='/'> 

    </UserButton>
  </ClerkLoaded>
          </Loader>
          </ClerkLoading>
          </ClerkProvider> */}
        </div>
     </div>

   )
 }
 