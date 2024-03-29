import React from 'react'
import { NavLink} from "react-router-dom"
import { CgMenuGridO } from "react-icons/cg";
import { FaHome,  FaProjectDiagram, FaClipboardList } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const Nav = () => {
  const [show, setShow] = React.useState(true)
  const [lastScrollPos, setlastScrollPos] = React.useState(0)
  const controlNavbar = () => {
    if (window.scrollY > lastScrollPos ) {
      setShow(false)
    }
    else {
      setShow(true)
    }
    setlastScrollPos(window.scrollY)
  }
  React.useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
    
  }, [lastScrollPos])

  return (
    
    <header className={` ${show ? "":"hidden"} container fixed mx-auto  top-0 z-40 pt-2 `}>
      <LargeNav/>
      <SmallNav/>
    </header>
  )
}

export default Nav

const LargeNav = () => {


  return (
    <nav className={`hidden lg:flex gap-12 justify-center h-16 w-1/3  left-1/2 absolute  items-center border-neutral-200 border rounded-full shadow-sm bg-white`}>
    <NavLink
      to="/home"
      className={({ isActive, isPending }) =>
        [
          isActive ? "!text-[#6E07F3] " : "",
          isPending ? "text-black " : "",
        ].join(" text-base font-semibold  hover:text-[#6E07F3] flex gap-2 items-center ", )
      }
      >
      <FaHome/> Home
    </NavLink>  


    <NavLink to="/portfolio" className={({ isActive, isPending }) =>
        [
          isActive ? "!text-[#6E07F3] " : "",
          isPending ? "text-black " : "",
        ].join(" text-base font-semibold  hover:text-[#6E07F3] flex gap-2 items-center ", )
      }>
      <FaProjectDiagram /> Portfolio
    </NavLink> 

    <NavLink to="/blog" className={({ isActive, isPending }) =>
        [
          isActive ? "!text-[#6E07F3] " : "",
          isPending ? "text-black " : "",
        ].join(" text-base font-semibold  hover:text-[#6E07F3] flex gap-2 items-center ", )
      }>
      <FaClipboardList /> Blog
    </NavLink>



  </nav>
  )
}

const SmallNav = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <nav className= "pt-2 lg:hidden items-start">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger><CgMenuGridO className="w-12 h-12 text-[#6E07F3]" /></DropdownMenuTrigger>
        <DropdownMenuContent className="w-[180px] ml-2">

          <DropdownMenuItem>
            <NavLink
              to="/home"
              className={({ isActive, isPending }) =>
                [
                  isActive ? "!text-[#6E07F3] " : "",
                  isPending ? "text-black " : "",
                ].join(" text-base font-medium  hover:text-[#6E07F3] flex gap-2 items-center ", )
              }
              >
              <FaHome/> Home
            </NavLink>   
          </DropdownMenuItem>
          
          <DropdownMenuItem>
            <NavLink to="/portfolio" className={({ isActive, isPending }) =>
                [
                  isActive ? "!text-[#6E07F3] " : "",
                  isPending ? "text-black " : "",
                ].join(" text-base font-semibold  hover:text-[#6E07F3] flex gap-2 items-center ", )
              }>
              <FaProjectDiagram /> Portfolio
            </NavLink> 
          </DropdownMenuItem>

          <DropdownMenuItem>
            <NavLink to="/blog" className={({ isActive, isPending }) =>
                [
                  isActive ? "!text-[#6E07F3] " : "",
                  isPending ? "text-black " : "",
                ].join(" text-base font-semibold  hover:text-[#6E07F3] flex gap-2 items-center ", )
              }>
              <FaClipboardList /> Blog
            </NavLink> 
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
    </nav>
  )
}