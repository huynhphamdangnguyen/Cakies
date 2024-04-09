import {useState} from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineLogin, AiOutlineUser, AiOutlineShoppingCart, AiOutlineContacts, AiOutlineComment } from 'react-icons/ai'

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
  return (
      <div>
          <AiOutlineMenu onClick={handleNav} className='absolute top-4 rigth-4 z-[-99] md:hidden' />
          {
              nav ? (
                  <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                      <a href="/" className='w-[75%] flex jutify-center items-center rounded-full shadow-lg bg-gray-400 m-2 p-4 cursor-poniter hover:scale-110 ease-in duration-200'>
                          <AiOutlineHome size={20} />
                          <span className='pl-4'>Home</span>
                      </a>
                      <a href="/" className='w-[75%] flex jutify-center items-center rounded-full shadow-lg bg-gray-400 m-2 p-4 cursor-poniter hover:scale-110 ease-in duration-200'>
                          <AiOutlineHome size={20} />
                          <span className='pl-4'>Home</span>
                      </a>
                      <a href="/" className='w-[75%] flex jutify-center items-center rounded-full shadow-lg bg-gray-400 m-2 p-4 cursor-poniter hover:scale-110 ease-in duration-200'>
                          <AiOutlineHome size={20} />
                          <span className='pl-4'>Home</span>
                      </a>
                      <Link to='/login' className='w-[75%] flex jutify-center items-center rounded-full shadow-lg bg-gray-400 m-2 p-4 cursor-poniter hover:scale-110 ease-in duration-200'>
                          <AiOutlineUser size={20} />
                          <span className='pl-4'>Login</span>
                      </Link>
                  </div>
              ) : (
                      ''
              )
          }
          <div className='md:block hidden fixed top-[25%] z-10'>
              <div className='flex flex-col'>
                  <a href="/" className='rounded-full shodow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineHome size={20}/>
                  </a>
                  <a href="/product" className='rounded-full shodow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineShoppingCart size={20}/>
                  </a>
                  <a href="/login" className='rounded-full shodow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineUser size={20}/>
                  </a>
                  <a href="/" className='rounded-full shodow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineComment size={20}/>
                  </a>
              </div>
          </div>
    </div>
  )
}

export default Sidenav