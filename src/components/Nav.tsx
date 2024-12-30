import { Link, useNavigate } from '@tanstack/react-router'
import { AlignJustify, ChevronDown, ChevronLeft, ChevronRight, Globe, LayoutGrid, MessageCircleQuestion, Search, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { removeHyphen } from '../../lib'
import { navbar } from '../../data'
import PortionNav from './PortionNav'
import { useNavMobileStore } from '../hooks/use-store'

const Nav = () => {
  const navigate = useNavigate()
  const [showDropDown, setShowDropDown] = useState(false)
  const [showHamburgerMenu, setSHowHarmburgerMenu] = useState(false)
  const [navSelected, setNavSelected] = useState<"finding-products" | "research-insights" | "who-we-are" | "">("")
  const { navMobile, setSelectedNavMobile } = useNavMobileStore()
  const { selectedNavMobile } = navMobile
  //const [selectedNavMobile, setSelectedNavMobile] = useState<"finding-product" | "research-&-insights" | "who-we-are" | "">("")
  const [selectedPortionNav, setSelectedPortionNav] = useState("")
  const [navIndex, setNavIndex] = useState(0)

  function selectNavMobile(navMobile: "finding-product" | "research-&-insights" | "who-we-are" | "") {
    setNavIndex(prev => prev + 1)
    setSelectedNavMobile(navMobile)
  }

  function goBack() {
    setNavIndex(prev => prev - 1)
    //setSelectedNavMobile("")
  }

  function selectNav(currentNav: "finding-products" | "research-insights" | "who-we-are") {
    if (navSelected !== currentNav) {
      setShowDropDown(true)
    } else {
      setShowDropDown(prev => !prev)
    }
    setNavSelected(currentNav)
  }

  function selectPortionNav(n: { title: string; url: string }) {
    if (n.url === "") {
      setNavIndex(prev => prev + 1)
      setSelectedPortionNav(n.title)
    } else {
      navigate({ to: n.url })
      setSHowHarmburgerMenu(false)
      setNavIndex(0)
    }
  }

  function closeNav() {
    setSHowHarmburgerMenu(prev => !prev)
    setNavIndex(0)
  }

  console.log({ selectedPortionNav, navIndex, selectedNavMobile })

  return (
    <AnimatePresence>
      <nav className={`${showHamburgerMenu ? 'fixed overflow-hidden' : 'sticky'} z-50 top-0 left-0 right-0 h-[90px] w-full  border-black  drop-shadow-lg shadow-black`}>
        <div className='flex bg-white py-3 px-5 justify-between items-center'>
          <div className='flex gap-4 items-center'>
            <div className='relative font-Akkurat font-bold py-1 text-[2rem]'>
              <div className='border-2 border-black w-full absolute top-0 left-0 right-0' />
              <span className='text-red-600'>SPXNG</span>
            </div>
          </div>
          <div className='hidden font-Akkurat font-light text-[0.875rem] gap-10'>
            <button className='flex gap-2 items-center'>
              <Search className='size-[14px]' />
              Search
            </button>
            <button className='flex gap-2 items-center'>
              <Globe className='size-[14px]' />
              EN
            </button>
            <Link className='flex gap-1 items-center'>
              <MessageCircleQuestion className='size-[14px]' />
              Support
            </Link>
          </div>
          <div onClick={closeNav} className='flex cursor-pointer'>
            {showHamburgerMenu ? <X size={30} /> : <AlignJustify size={30} />}
          </div>
        </div>
        <div className='hidden drop-shadow-md bg-gray-100 justify-between items-center px-2 lg:px-5'>
          <div className='flex gap-4 items-center font-Akkurat font-black'>
            <button className='flex hover:bg-gray-300 gap-1 items-center px-5 py-6' onClick={() => selectNav("finding-products")}>
              <span>Find Products</span>
              <ChevronDown className='size-[15px]' />
            </button>
            <button className='flex hover:bg-gray-300 gap-1 items-center px-5 py-6' onClick={() => selectNav("research-insights")}>
              <span>Research & Insights</span>
              <ChevronDown className='size-[15px]' />
            </button>
            <button className='flex hover:bg-gray-300 gap-1 items-center px-5 py-6' onClick={() => selectNav("who-we-are")}>
              <span>Who We Are</span>
              <ChevronDown className='size-[15px]' />
            </button>
          </div>
          <Link className='py-3 transition-colors px-5 bg-red-600 text-white font-Akkurat font-bold hover:bg-black'>
            Contact Us
          </Link>
        </div>
      </nav>

      {showHamburgerMenu && (
        <motion.div
          key="modal"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className='bg-gray-100 fixed top-[70px] py-3 px-2 lg:px-5 overflow-auto h-screen z-50 w-full'>

          {navIndex === 0 ? (
            <motion.div
              key="modal"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className='font-Akkurat mx-2 lg:mx-5 flex flex-col gap-10'>
              <div onClick={() => selectNavMobile("finding-product")} className='flex justify-between items-center cursor-pointer'>
                <span className='text-[1.1rem]'>Finding Products</span>
                <ChevronRight />
              </div>
              <div onClick={() => selectNavMobile("research-&-insights")} className='flex justify-between cursor-pointer items-center'>
                <span className='text-[1.1rem]'>Research & Insights</span>
                <ChevronRight />
              </div>
              <div onClick={() => selectNavMobile("who-we-are")} className='flex cursor-pointer justify-between items-center'>
                <span className='text-[1.1rem]'>Who We Are</span>
                <ChevronRight />
              </div>
            </motion.div>
          ) : navIndex > 0 && navIndex === 1 && selectedNavMobile !== "" ? (
            <div className='flex flex-col gap-10 relative'>
              <div className='font-Akkurat sticky -top-3 left-0 right-0 bg-gray-100 z-40 py-3 lg:py-0 lg:p-3 m-0 text-[1rem] flex gap-1 items-center'>
                <ChevronLeft size={20} />
                <span onClick={goBack} className='font-bold cursor-pointer'>Back</span>
                <span>/</span>
                <span className='text-gray-500 capitalize'>{removeHyphen(selectedNavMobile)}</span>
              </div>
              <motion.div
                key="modal"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className='flex flex-col gap-10'>
                {navbar[selectedNavMobile].map((n) => (
                  <div onClick={() => selectPortionNav(n)} className='flex cursor-pointer justify-between mx-2 font-Akkurat items-center'>
                    <span className='text-[1.1rem] capitalize'>{removeHyphen(n.title)}</span>
                    {n.url === "" && <ChevronRight />}
                  </div>
                ))}
              </motion.div>
            </div>
          ) : navIndex > 1 && navIndex === 2 && selectedPortionNav !== "" ? (
            <div className='flex flex-col gap-10 '>
              <div className='font-Akkurat sticky -top-3 left-0 right-0 bg-gray-100 z-40 py-3 lg:py-0 lg:p-3 m-0 text-[1rem] flex gap-1 items-center'>
                <ChevronLeft size={20} />
                <span onClick={goBack} className='font-bold cursor-pointer'>Back</span>
                <span>/</span>
                <span className='text-gray-500 capitalize'>{removeHyphen(selectedPortionNav)}</span>
              </div>
              <div
                className='flex flex-col gap-10'>
                <PortionNav portion={selectedPortionNav} />
              </div>
            </div>
          ) : (
            <>Hello</>
          )}
        </motion.div>
      )}

      {showDropDown && (
        <div className='bg-white h-[600px] z-50'>
          {navSelected === 'finding-products' ? (
            <>From finding product</>
          ) : navSelected === 'research-insights' ? (
            <>
              From Research
            </>
          ) : (
            <>WHo wr are</>
          )}
        </div>
      )}

    </AnimatePresence>
  )
}

export default Nav
