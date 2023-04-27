import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'

import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaSearchLocation,
} from 'react-icons/fa'

import Slides from '@/components/slides'
import { TbCurrentLocation, TbLocation, TbMail, TbPhone } from 'react-icons/tb'

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
          className='flex justify-between items-center lg:rounded-lg lg:px-14 lg:h-[60px] lg:w-[80%] lg:my-8 lg:left-[10rem] md:w-[80%] md:my-5 md:h-[70px] 
          md:left-[5rem] md:rounded-lg sm:px-5 sm:h-[80px] sm:w-full sm:rounded-none xs:w-full xs:h-[70px] xs:px-5 xs:my-0 xs:left-0 xs:rounded-none 
          mx-auto fixed top-0 z-10 bg-white shadow-2xl  '
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
          font-medium cursor-pointer '
          >
            <ScrollLink
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              offset={-70} // Change this value to adjust the offset if needed
              duration={500}
            >
              home{' '}
            </ScrollLink>
            <ScrollLink
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-70} // Change this value to adjust the offset if needed
              duration={500}
            >
              about{' '}
            </ScrollLink>
            <ScrollLink
              activeClass='active'
              to='services'
              spy={true}
              smooth={true}
              offset={-70} // Change this value to adjust the offset if needed
              duration={500}
            >
              our services{' '}
            </ScrollLink>
            <ScrollLink
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70} // Change this value to adjust the offset if needed
              duration={500}
            >
              contact{' '}
            </ScrollLink>
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
                <ScrollLink
                  activeClass='active'
                  to='home'
                  spy={true}
                  smooth={true}
                  offset={-70} // Change this value to adjust the offset if needed
                  duration={500}
                >
                  home{' '}
                </ScrollLink>
                <ScrollLink
                  activeClass='active'
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={-70} // Change this value to adjust the offset if needed
                  duration={500}
                >
                  about{' '}
                </ScrollLink>
                <ScrollLink
                  activeClass='active'
                  to='services'
                  spy={true}
                  smooth={true}
                  offset={-70} // Change this value to adjust the offset if needed
                  duration={500}
                >
                  our services{' '}
                </ScrollLink>
                <ScrollLink
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-70} // Change this value to adjust the offset if needed
                  duration={500}
                >
                  contact{' '}
                </ScrollLink>
              </div>
            </motion.nav>
          </AnimatePresence>
        )}

        <Slides images={images} />

        <section
          id='about'
          className='grid lg:grid-cols-2 lg:gap-5 lg:px-3 lg:mt-[12rem] lg:mb-20 lg:w-[80%] md:mt-[13rem] md:grid-cols-2 md:gap-5 sm:mt-10 sm:px-5 sm:gap-5
          sm:mb-14 xs:mt-10 xs:px-5 xs:gap-5 xs:mb-14 mx-auto '
        >
          <div className='grid grid-cols-2 gap-4'>
            <div className='col-span-2 lg:col-span-1 lg:row-span-2 md:col-span-2 md:row-span-1 xs:row-auto xs:col-span-1 rounded-lg bg-[#2476f2f3] text-white flex justify-start items-end p-5 '>
              <h1 className='lg:text-3xl md:text-2xl sm:text-lg xs:text-lg capitalize font-semibold w-9'>
                about us
              </h1>
            </div>
            <div className='hidden lg:block lg:col-span-1 md:hidden sm:hidden xs:block rounded-lg'>
              <Image
                src={'/cab.jpg'}
                alt='aseda security'
                width={500}
                height={500}
                className='rounded-lg w-full'
              />
            </div>
            <div className='col-span-2 lg:col-span-1 lg:block md:block md:col-span-2 sm:hidden xs:hidden rounded-lg'>
              <Image
                src={'/asedamen.jpg'}
                alt='aseda security'
                width={500}
                height={500}
                className='rounded-lg w-full '
              />
            </div>
          </div>

          <div className='flex flex-col justify-start items-start lg:gap-5 xs:gap-4 '>
            <h1 className='font-semibold capitalize lg:text-4xl md:text-4xl sm:text-2xl xs:text-2xl'>
              Aseda security limited
            </h1>
            <p className='lg:text-lg lg:w-[85%] md:text-lg md:w-full sm:w-full xs:w-full xs:text-base '>
              Aseda Security Limited is a multi-service and innovative company
              committed to providing innovative security and logistics solutions
              to its clients. We pride ourselves in offering a full range of
              security management services and continually strive to improve our
              quality of service, integrity, excellence, and professionalism. As
              a company dedicated to excellence and professionalism, we maintain
              the highest industry standards for our staff&apos;s training,
              loyalty, and character.
            </p>

            <Link
              href={'#contact'}
              className='capitalize bg-[#2476f2f3] h-[40px] w-[130px] flex justify-center items-center text-white font-medium rounded-lg hover:bg-[#dededebd] 
              hover:text-black shadow-2xl '
            >
              {' '}
              contact us
            </Link>
          </div>
        </section>

        <section id='services' className='bg-[#F7F7F7] py-8 '>
          <h1
            className='font-semibold capitalize flex justify-center items-center relative after:absolute after:w-[50px] after:h-[20px] after:border-b-4 
          lg:after:top-6 md:after:top-5 sm:after:top-5 xs:after:top-5 after:border-[#2476f2f3] lg:text-3xl md:text-2xl sm:text-2xl xs:text-2xl '
          >
            {' '}
            our services{' '}
          </h1>
          <section
            className='mx-auto flex lg:flex-row lg:justify-center lg:items-start lg:gap-5 lg:px-0 lg:py-8 lg:w-[80%] md:flex-col md:justify-center 
          md:items-center md:gap-5 md:px-5 md:py-8 sm:flex-col sm:justify-center sm:items-center sm:gap-5 sm:px-5 sm:py-7 xs:flex-col xs:justify-center
          xs:items-center xs:px-5 xs:gap-5 xs:py-7'
          >
            <div className='flex flex-col justify-start items-start bg-white shadow-2xl rounded-xl lg:w-[30%] lg:h-[550px] md:w-full md:h-[auto] flex-grow-0'>
              <Image
                src={'/driver.jpg'}
                alt='cab'
                width={300}
                height={300}
                className='w-full lg:h-[300px] rounded-t-xl'
              />
              <div className='flex flex-col gap-3 p-5'>
                <h1 className='lg:text-2xl md:text-2xl sm:text-2xl xs:text-2xl font-medium'>
                  Drivers
                </h1>
                <p className='text-base text=[#404258]'>
                  Our security company offers professional and reliable driver
                  services for both individuals and businesses. We believe that
                  a comfortable and safe journey is paramount, which is why we
                  have carefully selected and trained our navigation experts to
                  provide the best possible driving experience.
                </p>
              </div>
            </div>
            <div className='flex flex-col justify-start items-start bg-white shadow-2xl rounded-xl lg:w-[30%] lg:h-[550px] md:w-full md:h-[auto] flex-grow-0'>
              <Image
                src={'/asedamen.jpg'}
                alt='cab'
                width={300}
                height={300}
                className='w-full lg:h-[300px] rounded-t-xl'
              />
              <div className='flex flex-col gap-3 p-5'>
                <h1 className='lg:text-2xl md:text-2xl sm:text-2xl xs:text-2xl font-medium'>
                  Bouncers
                </h1>
                <p className='text-base text=[#404258]'>
                  At our security company, we understand the importance of
                  having a safe and secure environment, whether it&apos;s at a
                  private event, nightclub, or other public gathering. This is
                  why we offer professional bouncer services to ensure that your
                  safety and security is our top priority.
                </p>
              </div>
            </div>

            <div className='flex flex-col justify-start items-start bg-white shadow-2xl rounded-xl lg:w-[30%] lg:h-[550px] md:w-full md:h-[auto] flex-grow-0'>
              <Image
                src={'/cab.jpg'}
                alt='cab'
                width={300}
                height={300}
                className='w-full lg:h-[300px] rounded-t-xl '
              />
              <div className='flex flex-col gap-3 p-5'>
                <h1 className='lg:text-2xl md:text-2xl sm:text-2xl xs:text-2xl font-medium '>
                  Vechicles for trips and hangouts
                </h1>
                <p className='text-base text=[#404258] '>
                  We understand that every hangout or trip is unique, and we
                  work closely with our clients to develop a customized
                  transportation plan that meets their specific needs. Whether
                  you need a ride to a concert, sporting event, or just a fun
                  night out with friends, we have got you covered.
                </p>
              </div>
            </div>
          </section>
        </section>

        <section id='contact' className='flex flex-col gap-5 py-8'>
          <h1
            className='font-semibold capitalize flex justify-center items-center relative after:absolute after:w-[50px] after:h-[20px] after:border-b-4 
          after:top-6 after:border-[#2476f2f3] lg:text-3xl md:text-3xl sm:text-2xl xs:text-2xl '
          >
            {' '}
            contact{' '}
          </h1>
          <div className='flex lg:gap-10 lg:w-[80%] lg:py-7 lg:flex-row md:gap-7 md:flex-row md:py-5 sm:flex-col sm:gap-5 xs:flex-col xs:gap-5 mx-auto  '>
            <div
              className=' rounded-lg bg-[#2476f2f3] text-white flex justify-start items-end p-3 lg:w-[250px] lg:h-[250px] md:w-[200px] md:h-[200px] sm:w-full
            sm:h-[150px] xs:w-full xs:h-[150px] '
            >
              <h1 className='lg:text-3xl md:text-2xl sm:text-2xl xs:text-2xl capitalize font-semibold w-9 '>
                contact
              </h1>
            </div>

            <div className='flex flex-col justify-start items-start lg:gap-5 md:gap-4 sm:gap-3 xs:gap-3'>
              <div className='flex gap-2 items-center'>
                <span className='flex items-center'>
                  <TbPhone size={20} />
                  :-
                </span>
                <a
                  href='tel:+2348020304461'
                  className='text-[#2476f2f3] font-medium '
                >
                  +2348020304461,
                </a>
                <a
                  href='tel:+2349160164971'
                  className='text-[#2476f2f3] font-medium '
                >
                  +2349160164971
                </a>
              </div>

              <div className='flex gap-2 items-center'>
                <span className='flex items-center'>
                  <TbMail size={20} />
                  :-
                </span>
                <a
                  href='mailto:asedasecure@gmail.com'
                  className='text-[#2476f2f3] font-medium '
                >
                  asedasecure@gmail.com
                </a>
              </div>

              <div className='flex gap-2 items-center'>
                <span className='flex items-center'>
                  <FaLocationArrow size={20} />
                  :-
                </span>
                <span className='text-[#2476f2f3] font-medium '>
                  17/19 Oshopey plaza Allen, 5th floor
                </span>
              </div>
            </div>
          </div>
        </section>

        <footer
          className='flex bg-[#F7F7F7] lg:flex-row lg:justify-between lg:items-center lg:py-8 lg:px-10 md:flex-row md:justify-between md:items-center md:px-10 sm:flex-col
        sm:justify-center sm:items-center sm:gap-5 sm:px-5 sm:py-7 xs:flex-col xs:justify-center xs:items-center xs:gap-5 xs:px-5 xs:py-6 '
        >
          <Link href='' onClick={handleRefresh}>
            <Image
              src={'/logo.png'}
              alt='aseda logo'
              width={200}
              height={200}
              quality={100}
              className='lg:w-[200px] md:w-[170px] sm:w-[170px] xs:w-[170px] '
            />
          </Link>

          <nav className='font-medium text-base flex flex-row justify-center items-center gap-4 capitalize'>
            <ScrollLink
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              offset={-70} // Change this value to adjust the offset if needed
              duration={500}
            >
              home{' '}
            </ScrollLink>
            <ScrollLink
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-70} // Change this value to adjust the offset if needed
              duration={500}
            >
              about{' '}
            </ScrollLink>
            <ScrollLink
              activeClass='active'
              to='services'
              spy={true}
              smooth={true}
              offset={-70} // Change this value to adjust the offset if needed
              duration={500}
            >
              our services{' '}
            </ScrollLink>
            <ScrollLink
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70} // Change this value to adjust the offset if needed
              duration={500}
            >
              contact{' '}
            </ScrollLink>
          </nav>

          <nav className='flex flex-row justify-center items-center gap-4'>
            <Link href={'www.facebook.com/asedasecure'} target='_blank'>
              <FaFacebook size={30} />
            </Link>
            <Link
              href={'https://www.instagram.com/asedasecure/'}
              target='_blank'
            >
              {' '}
              <FaInstagram size={30} />
            </Link>
            <Link href={'www.linkedin.com/asedasecure'} target='_blank'>
              {' '}
              <FaLinkedin size={30} />
            </Link>
          </nav>
        </footer>
      </main>
    </>
  )
}
