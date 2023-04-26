import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
import Image from 'next/image'

export default function Slides({ images }) {
  return (
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
            {/* <div className='absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white'>
              <p>{image.caption}</p>
            </div> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
