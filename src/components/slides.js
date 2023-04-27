import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
import Image from 'next/image'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserCheck, FaUserShield } from 'react-icons/fa'
import { GiCctvCamera } from 'react-icons/gi'

export default function Slides({ images }) {
  return (
    <main className='relative -z-20' id='home'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='w-full lg:mt-0 md:mt-0 sm:mt-[70px] xs:mt-[70px]'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className=' lg:h-[700px] md:h-[700px] sm:h-[300px] xs:h-[300px] '>
              <Image
                src={image.url}
                alt={image.alt}
                width={1000}
                height={1000}
                quality={100}
                className='w-full h-full lg:object-center lg:object-cover xs:object-fill'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section
        className='lg:absolute bg-[#2476f2f3] lg:rounded-lg grid lg:grid-cols-4 text-center lg:gap-10 lg:-bottom-[5rem] lg:w-[80%] lg:left-[10rem] lg:py-8 
        lg:px-10 md:grid-cols-2 md:gap-10 md:py-8 md:w-[90%] md:absolute md:-bottom-[10rem] md:left-9 md:rounded-lg sm:w-full sm:-bottom-[10rem] sm:px-5
        sm:py-5 sm:grid-cols-1 sm:gap-8 sm:place-items-center xs:w-full xs:left-0 xs:-bottom-[10rem] xs:px-5 xs:py-5 xs:grid-cols-1 xs:gap-8 xs:place-items-center 
        xs:static mx-auto z-10 shadow-2xl '
      >
        <div className='flex flex-col justify-center items-center gap-2'>
          <GiCctvCamera size={50} color='white' />
          <h2 className='text-white font-bold lg:text-xl md:text-lg sm:text-md xs:text-md'>
            CCTV
          </h2>
          <span className='text-white lg:text-base md:text-base sm:text-sm xs:text-[12px]'>
            Our top priority is ensuring your safety and earning your trust.
          </span>
        </div>

        <div className='flex flex-col justify-center items-center gap-2'>
          <FaUserShield size={50} color='white' />
          <h2 className='text-white font-bold lg:text-xl md:text-lg sm:text-md xs:text-md'>
            ESCORT/VIP PROTECTION
          </h2>
          <span className='text-white lg:text-base md:text-base sm:text-sm xs:text-[12px]'>
            We provide a specialist elite force of executive protection and
            escorting to your destination.
          </span>
        </div>

        <div className='flex flex-col justify-center items-center gap-2'>
          <TbTruckDelivery size={50} color='white' />
          <h2 className='text-white font-bold lg:text-xl md:text-lg sm:text-md xs:text-md'>
            LOGISTIC
          </h2>
          <span className='text-white lg:text-base md:text-base sm:text-sm xs:text-[12px]'>
            Your capacity and our capability, your destination is sure!
          </span>
        </div>

        <div className='flex flex-col justify-center items-center gap-2'>
          <FaUserCheck size={50} color='white' />
          <h2 className='text-white font-bold lg:text-xl md:text-lg sm:text-md xs:text-md'>
            STAFF VERIFICATION
          </h2>
          <span className='text-white lg:text-base md:text-base sm:text-sm xs:text-[12px]'>
            Our background screening helps to confirm basic identity.
          </span>
        </div>
      </section>
    </main>
  )
}
