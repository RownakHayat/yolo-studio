import React from 'react'
import '../../assest/css/Navbar.css'
import navbg from '../../assest/images/image 85.png'
import { Disclosure, Menu} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import DCSC from '../../assest/images/DCSC 1.png'
 
const navigation = [

  { name: 'Home', href: '/home', current: false },
  { name: 'All Event', href: '/all-event', current: false },
  { name: 'Committee', href: '/committee', current: false },
  { name: 'Gallery', href: '/gallery', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Navbar () {

const backgroundImageStyle = {
  backgroundImage: `url("${navbg}")`,
 
}

  return (
    <>
    <div className="h-screen w-full bg-cover bg-no-repeat absolute" 
     style={backgroundImageStyle}
     >
   <Disclosure as="nav" className="">
     {({ open }) => (
       <>
         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          
           <div className=" relative flex h-16 items-center justify-between">
           <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
               <Menu as="div" className="relative mt-10 ml-3">
                 <div>
                   <Menu.Button className="">
                     <span className="absolute -inset-1.5" />
                     <span className="sr-only">Open user menu</span>
                     <a href="/">
                     <img
                       className="rounded-full  w-34 h-34 mt-20"
                       src={DCSC}
                       alt=""
                     />
                     </a>
                   </Menu.Button>
                 </div>
               </Menu>
            </div>
             <div className="">
             <div className="flex items-center mt-10  justify-center sm:items-stretch sm:justify-start">
               <div className="hidden sm:ml-6 sm:block">
                 <div className="flex space-x-4" 
                  // onClick={() =>{setMenu(" ")}}
                 >
                   {navigation.map((item) => (
                     <a
                       key={item.name}
                       href={item.href}
                       className={classNames('font-bold text-xl text-white hover:text-[#1ED2DD] cursor-pointer'
                       )}
                       aria-current={item.current ? 'page' : undefined}
                     >
                       {item.name}
                     </a>
                   ))} 
                 </div>
               </div>
               <div className="flex flex-shrink-0 items-center">
              
               </div>
             </div>
             <div className="absolute mt-10  inset-y-0 right-0 flex items-center sm:hidden">
               {/* Mobile menu button*/}
               <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2
                text-[#041551] hover:bg-[#1ED2DD] hover:text-[#041551] outline-none 
                ring-2 ring-inset ring-[#041551]">
                 <span className="absolute -inset-0.5" />
                 <span className="sr-only">Open main menu</span>
                 {open ? (
                   <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                 ) : (
                   <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                 )}
               </Disclosure.Button>
             </div>
             </div>
             <div className="onBtn mr-36 mt-10 text-white flex left-10 w-40
             rounded-md px-6 py-1 shadow-lg cursor-pointer">
                <button>Ongoing event</button>
             </div>
           </div>
           
         </div>

         <Disclosure.Panel className="sm:hidden">
           <div className=" mt-10 space-y-1 px-2 pb-3 pt-2">
             {navigation.map((item) => (
               <Disclosure.Button
                 key={item.name}
                 as="a"
                 href={item.href}
                 className={classNames( 'text-gray-300 hover:bg-[#1ED2DD] hover:text-white',
                   'block rounded-md px-3 py-2 font-medium text-lg'
                 )}
                 aria-current={item.current ? 'page' : undefined}
               >
                 {item.name}
               </Disclosure.Button>
             ))}
           </div>
         </Disclosure.Panel>

       </>
     )}
   </Disclosure>
   
   </div>
    </>
  
  )
}

export default Navbar