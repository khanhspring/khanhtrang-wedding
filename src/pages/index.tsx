import AlbumIcon from '@/components/AlbumIcon';
import BannerImages from '@/components/BannerImages';
import HeartIcon from '@/components/HeartIcon';
import StaticCalendar from '@/components/StaticCalendar';
import { Raleway, Sacramento } from 'next/font/google';
import localFont from 'next/font/local';
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

export default function Home() {
  return (
    <div className="text-[#4a3e5a]">
      <header className="hidden md:block">
        <div className="container m-auto flex items-center justify-between">
          <h1 className={sacramento.className}>
            <a className="flex items-center justify-center gap-1 text-3xl" href="">
              Khánh <HeartIcon width={11} height={11} className="ml-0.5" /> Trang
            </a>
          </h1>
          <nav className="">
            <div className="flex items-center gap-4 text-md">
              <a href="#" className="px-2 py-8">Home</a>
              <a href="#" className="px-2 py-8">Album ảnh</a>
              <a href="#" className="px-2 py-8">Thời gian / Địa điểm</a>
              <a href="#" className="px-2 py-8">Mừng cưới</a>
              <a href="#" className="px-2 py-8">Gửi lời chúc</a>
            </div>
          </nav>
        </div>
      </header>
      <section className="">
        <BannerImages />
      </section>
      <section className="mt-10 md:mt-32">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center gap-3 px-5">
            <h2 className="text-2xl md:text-[40px] uppercase tracking-widest text-center">Album ảnh cưới</h2>
            <p className="md:text-lg text-zinc-500 text-center">You are fall in love with someone when you can not put into words how they make you feel</p>
            <AlbumIcon width={90} className="mt-5" />
          </div>
          <div className="mt-10 mx-5">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
              <div className="mt-0">
                <Image className="h-auto w-full rounded-lg" src="/images/gallery/2.jpg" alt="" width={500} height={500}/>
              </div>
              <div className="mt-6">
                <Image className="h-auto w-full rounded-lg" src="/images/gallery/4.jpg" alt="" width={500} height={500}/>
              </div>
              <div className="mt-6">
                <Image className="h-auto w-full rounded-lg" src="/images/gallery/7.jpg" alt="" width={500} height={500}/>
              </div>
              <div className="mt-6">
                <Image className="h-auto w-full rounded-lg" src="/images/gallery/3.jpg" alt="" width={500} height={500}/>
              </div>
              <div className="mt-6">
                <Image className="h-auto w-full rounded-lg" src="/images/gallery/10.jpg" alt="" width={500} height={500}/>
              </div>
              <div className="mt-6">
                <Image className="h-auto w-full rounded-lg" src="/images/gallery/8.jpg" alt="" width={500} height={500}/>
              </div>
              <div className="mt-6">
                <Image className="h-auto w-full rounded-lg" src="/images/gallery/5.jpg" alt="" width={500} height={500}/>
              </div>
              <div className="mt-6">
                <Image className="h-auto w-full rounded-lg" src="/images/gallery/6.jpg" alt="" width={500} height={500}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-32">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center gap-3 px-5">
            <h2 className="text-2xl md:text-[40px] uppercase tracking-widest text-center">Thời gian / địa điểm nhà gái</h2>
            <p className="md:text-lg text-zinc-500 text-center">
              Sự hiện diện của quý vị là niềm vinh hạnh cho gia đình chúng tôi
            </p>
            <AlbumIcon width={90} className="mt-5" />
          </div>
        </div>
        <div className="mt-10">
          <div className="container m-auto bg-[url('/images/bg-3.jpg')] bg-cover md:rounded-lg p-5 py-10 md:p-20 md:py-20 flex flex-col-reverse md:flex-row gap-5 md:gap-20 items-center">
            <div className="flex items-center justify-start">
              <div className="p-10 rounded-lg backdrop-blur-lg bg-white/30">
                <StaticCalendar date="2023/10/22"/>
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-[32px] uppercase tracking-wider">Tiệc cưới tại tư gia nhà gái</h3>
              <div className="mt-5 text-xl leading-9">
                <p>Được tổ chức vào lúc 09 giờ 00 phút</p>
                <p>Chủ nhật ngày 22 / 10 / 2023</p>
                <p>Địa chỉ: Thôn Kiều Hạ 2, Quốc Tuấn, An Dương, Hải Phòng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-32">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center gap-3 px-5">
            <h2 className="text-2xl md:text-[40px] uppercase tracking-widest text-center">Thời gian / địa điểm nhà trai</h2>
            <p className="md:text-lg text-zinc-500 text-center">
              Sự hiện diện của quý vị là niềm vinh hạnh cho gia đình chúng tôi
            </p>
            <AlbumIcon width={90} className="mt-5" />
          </div>
        </div>
        <div className="mt-10">
          <div className="container m-auto bg-[url('/images/bg-4.jpg')] bg-cover md:rounded-lg p-5 py-10 md:p-20 md:py-20 flex flex-col md:flex-row gap-5 md:gap-20 items-center justify-end">
            <div className="text-white">
              <h3 className="text-2xl md:text-[32px] uppercase tracking-wider">Tiệc cưới tại tư gia nhà trai</h3>
              <div className="mt-5 text-xl leading-9">
                <p>Được tổ chức vào lúc 10 giờ 30 phút</p>
                <p>Chủ nhật ngày 29 / 10 / 2023</p>
                <p>Địa chỉ: Xóm Ủy ban, Thôn Trung Tâm, Yên Phú, Văn Yên, Yên Bái</p>
              </div>
            </div>
            <div className="flex items-center justify-start">
              <div className="p-10 rounded-lg backdrop-blur-lg bg-white/30">
                <StaticCalendar date="2023/10/29" className="text-white"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  )
}
