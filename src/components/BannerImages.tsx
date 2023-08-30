import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import HeartTagIcon from "./HeartTagIcon";
import HeartIcon from "./HeartIcon";
import { Sacramento, Raleway } from 'next/font/google';
import localFont from 'next/font/local';

import 'swiper/css';
import 'swiper/css/autoplay';

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
          <div style={{ backgroundImage: `url('${item.url}')` }} className="h-[750px] bg-top bg-cover backdrop-blur flex">
            <div className="w-full h-full flex items-center bg-black/10">
              <div className="container m-auto flex items-center justify-center flex-col">
                <div className="relative">
                  <h2 className={`${helloHoney.className} text-white text-[170px] leading-[160px]`}>
                    {item.content}
                  </h2>
                  <HeartTagIcon width={150} height={150} className="ml-5 fill-white absolute top-0 -right-[180px]" />
                </div>
                <p className={`${sacramento.className} text-white text-[80px] flex items-center gap-3`}>
                  Khánh <HeartIcon width={30} height={30} className="ml-5 fill-white" /> Trang
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}