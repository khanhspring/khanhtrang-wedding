import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import HeartTagIcon from "./HeartTagIcon";
import HeartIcon from "./HeartIcon";
import { Sacramento, Raleway } from 'next/font/google';
import localFont from 'next/font/local';

import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';

const helloHoney = localFont({ src: '../assets/fonts/HelloHoney/HelloHoney.otf' })

const sacramento = Sacramento({
  subsets: ['latin'],
  weight: '400'
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: '500'
});

const slides = [
  { url: '/images/banner-1.jpg', content: 'Save the Date' },
  { url: '/images/banner-2.jpg', content: "We're Getting Married" },
]

export default function BannerImages({ ...rest }) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="h-[300px] md:h-[750px] bg-top bg-cover backdrop-blur flex relative">
            <Image
              layout="fill"
              className="object-cover object-top pointer-events-none z-10"
              src={item.url}
              alt=""
            />
            <div className="w-full h-full flex items-center bg-black/10 relative z-50">
              <div className="container m-auto flex items-center justify-center flex-col">
                <div className="relative">
                  <h2 className={`${helloHoney.className} text-white text-5xl md:text-[170px] md:leading-[160px]`}>
                    {item.content}
                  </h2>
                  <HeartTagIcon width={150} height={150} className="ml-5 fill-white absolute top-0 -right-[180px] hidden md:block" />
                </div>
                <p className={`${sacramento.className} text-white text-4xl md:text-[80px] flex items-center gap-2 md:gap-3 mt-5`}>
                  Khánh <HeartIcon className="md:ml-5 fill-white w-5 h-5 md:w-8 md:h-8" /> Trang
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}