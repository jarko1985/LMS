
import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"
import { auth } from '@clerk/nextjs/server'




async function InstructorLayout ({children}:{children:React.ReactNode}) {
    const { userId, redirectToSignIn } = await auth();
    if (!userId) return redirectToSignIn()
  return (
    <div className="h-full flex flex-col">
        <Topbar/>
        <div className="flex-1 flex">
            <Sidebar/>
            <div className="flex-1">
            {children}
            </div>
        </div>
       
    </div>
  )
}

export default InstructorLayout