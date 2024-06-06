import { ClerkProvider } from "@clerk/nextjs";
import { Footer } from "./footer"
import { Header } from "./header"



type Props ={children:React.ReactNode;}
// type safety
const MarketingLayout = ({children}:Props) => {
  return (
    <div className="min-h-screen flex flex-col " >
<Header/>
    <main className="flex-1 flex flex-col item-center justify-center">
        {children}
    </main>
    <Footer/>
  </div>

  )
}

export default MarketingLayout



