'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Links = [
    {
        id:1,
        title:"Home",
        path:"/"
    },
    {
        id:2,
        title:"About",
        path:"/about"
    },
    {
        id:3,
        title:"Contact",
        path:"/contact"
    },
    {
        id:4,
        title:"Events",
        path:"/events"
    }, 
    {
        id:5,
        title:"Join Us",
        path:"/joinus"
    }, 
]

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const pathName = usePathname();
  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10 shadow-lg ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <h2 className="text-2xl text-[#7c51f0] font-bold ">LOGO</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center gap-4 justify-center md:flex  ">
                {
                    Links.map((link)=>(
                        <li className={`pb-3 text-[16px] font-semibold py-2 md:px-6  items-center text-center border-b-2 md:border-b-0  hover:bg-[#7c51f0] hover:text-white border-purple-900 rounded-full  md:hover:text-white  md:hover:bg-[#7c51f0] ${pathName === link.path && "bg-[#7c51f0] text-white"}`}>
                        <Link href={link.path} key={link.id} onClick={() => setNavbar(!navbar)}  >{link.title}</Link>
                        </li>
                    ))
                }
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;