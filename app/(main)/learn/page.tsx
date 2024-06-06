 import { StickyWrapper } from "@/components/ui/sticker-wrapper"
 import { FeedWrapper } from "@/components/feed-wrapper"
 import { Header } from "./header"
 import { UserProgress } from "@/components/ui/user-progress"
 const LearnPage=()=>{
    return(
       <div className="flex flex-row-reverse gap-[48px] px-6"> 
       <StickyWrapper>
        <UserProgress activeCourse={{}} hearts={5} points={100} hasActiveSubscription={false}></UserProgress>
        My sticky wrapper
       </StickyWrapper>
       <FeedWrapper> 
         <Header title="Spanish"></Header>  
        </FeedWrapper>
       
       
       </div>
    )
 }
 export default LearnPage
 