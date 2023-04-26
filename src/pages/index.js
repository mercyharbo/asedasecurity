import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaBars } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Slides from '@/components/slides'

const inter = Inter({ subsets: ['latin'] })

const images = [
  {
    url: '/guard1.jpg',
    alt: 'Image 1',
    title: 'ESCORT/VIP PROTECTION',
    caption:
      'We provide a specialist elite force of executive protection and escorting to your destination',
  },
  {
    url: '/guard2.jpg',
    alt: 'Image 2',
    title: 'LOGISTICS',
    caption: 'Your capacity and our capability, your destination is sure!',
  },
  {
    url: '/guard3.jpg',
    alt: 'Image 3',
    title: 'STAFF VERIFICATION',
    caption: 'Our background screening helps to confirm basic identity',
  },
]

export default function Home() {
  const navRef = useRef()
  const router = useRouter()
  const [toggleNav, setToggleNav] = useState(false)

  function handleRefresh() {
    router.reload()
  }

  const toggleNavVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setToggleNav(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navRef])

  return (
    <>
      <Head>
        <title>Home | Aseda Security Limited </title>
        <meta
          name='description'
          content='Aseda Security Limited is a multiservice and innovative company that is committed to providing innovative security and logistics solutions 
          to its clients. We pride ourselves in providing a full range of security management services and continually improve on our mantra of quality service, 
          integrity, excellence and professionalism.'
        />
      </Head>
      <main className='flex flex-col'>
        <nav
          className='flex justify-between items-center lg:rounded-lg lg:px-14 lg:h-[60px] lg:w-[80%] lg:my-8 lg:left-[8rem] md:w-[80%] md:my-5 md:h-[70px] 
          md:left-[5rem] md:rounded-lg sm:px-5 sm:h-[80px] sm:w-full sm:rounded-none xs:w-full xs:h-[70px] xs:px-5 xs:my-0 xs:left-0 xs:shadow-2xl xs:rounded-none 
          mx-auto fixed top-0 z-10 bg-[#f7f5f5e1]  '
        >
          <Link href='' onClick={handleRefresh}>
            <Image
              src={'/logo.png'}
              alt='aseda logo'
              width={200}
              height={200}
              quality={100}
              className='lg:w-[200px] md:w-[150px] sm:w-[110px] xs:w-[110px] '
            />
          </Link>
          <div
            className='lg:flex lg:justify-center lg:items-center lg:gap-8 md:flex md:justify-center md:items-center md:gap-5 sm:hidden xs:hidden capitalize 
          font-medium '
          >
            <Link href='#home'>home </Link>
            <Link href='#about'>about us</Link>
            <Link href='#services'>our services</Link>
            <Link href='#contact'>contact</Link>
          </div>

          <button
            onClick={() => setToggleNav(true)}
            className='hamburger lg:hidden md:hidden sm:flex '
          >
            <FaBars size={30} />
          </button>
        </nav>

        {toggleNav && (
          <AnimatePresence>
            <motion.nav
              initial='closed'
              animate='open'
              exit='closed'
              variants={toggleNavVariants}
              ref={navRef}
              className='flex flex-col justify-center items-center gap-5 absolute left-0 top-0 z-10 bg-white w-full h-auto py-5 rounded-lg shadow-2xl capitalize'
            >
              <Link href='' onClick={handleRefresh}>
                <Image
                  src={'/logo.png'}
                  alt='aseda logo'
                  width={200}
                  height={200}
                  quality={100}
                  className='lg:w-[200px] md:w-[150px] sm:w-[110px] xs:w-[110px] '
                />
              </Link>

              <div className='flex flex-col justify-center items-center gap-7 font-medium pt-5'>
                <Link href='#home'>home </Link>
                <Link href='#about'>about us</Link>
                <Link href='#services'>our services</Link>
                <Link href='#contact'>contact</Link>
              </div>
            </motion.nav>
          </AnimatePresence>
        )}

        <Slides images={images} />
      </main>
    </>
  )
}
