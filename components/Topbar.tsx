"use client"
import { useAuth, UserButton } from "@clerk/nextjs"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"


const Topbar = () => {
  const {isSignedIn} = useAuth();
  const topRoutes = [
    {label:"Instructor",path:'/instructor/courses'},
    {label:"learning",path:'/learning'}
  ]
  return (
    <div className="flex bg-[#07153b] justify-between items-center p-4">
      <Link href='/'>
        <Image src='/logo.svg' height={100} width={200} alt="logo" />
      </Link>
      <div className="max-md:hidden w-[400px] rounded-full flex">
      <input placeholder="Search for Crypto Courses" className="flex-grow rounded-l-full border-none bg-white outline-none text-sm pl-4 py-3"/>
      <button className="bg-[#07153b] rounded-r-full border border-white outline-none cursor-pointer px-4 py-3 hover:bg-[#07153b]/80 hover:scale-110 transition-transform duration-500"><Search className="h-4 w-4 text-white"/></button>
      </div>
      <div className="flex gap-6 items-center">
        <div className="max-sm:hidden flex gap-6">
          {topRoutes.map((route)=>(
            <Link 
            key={route.path} 
            href={route.path}
            className="text-md font-medium text-[#ec3b3b] hover:text-[#ec3b3b]/80"
            >
            {route.label}
            </Link>
          ))}
        </div>
     {isSignedIn ? <UserButton afterSignOutUrl="/sign-in"/> : <Link className="text-[#ec3b3b]" href='/sign-in'><Button variant='default'> Sign In</Button></Link> }   
      </div>
    </div>
  )
}

export default Topbar