import AlbumIcon from '@/components/AlbumIcon';
import BannerImages from '@/components/BannerImages';
import HeartIcon from '@/components/HeartIcon';
import { Raleway, Sacramento } from 'next/font/google';
import localFont from 'next/font/local';

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
    <div className="text-zinc-700">
      <header>
        <div className="container m-auto flex items-center justify-between">
          <h1 className={sacramento.className}>
            <a className="flex items-center justify-center gap-1 text-3xl" href="">
              Khánh <HeartIcon width={11} height={11} className="ml-0.5" /> Trang
            </a>
          </h1>
          <nav className={raleway.className}>
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
      <BannerImages />
      <section className="my-32">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center gap-3">
            <AlbumIcon width={90} />
            <h2 className={`${helloHoney.className} text-6xl`}>Album ảnh</h2>
            <p className={`${raleway.className} text-lg text-zinc-500`}>You are fall in love with someone when you can not put into words how they make you feel</p>
          </div>
          <div className="mt-10">
            <div className="columns-2 md:columns-3 gap-6">
              <div className="mt-0">
                <img className="h-auto max-w-full rounded-lg" src="/images/gallery/2.jpg" alt="" />
              </div>
              <div className="mt-6">
                <img className="h-auto max-w-full rounded-lg" src="/images/gallery/4.jpg" alt="" />
              </div>
              <div className="mt-6">
                <img className="h-auto max-w-full rounded-lg" src="/images/gallery/7.jpg" alt="" />
              </div>
              <div className="mt-6">
                <img className="h-auto max-w-full rounded-lg" src="/images/gallery/3.jpg" alt="" />
              </div>
              <div className="mt-6">
                <img className="h-auto max-w-full rounded-lg" src="/images/gallery/10.jpg" alt="" />
              </div>
              <div className="mt-6">
                <img className="h-auto max-w-full rounded-lg" src="/images/gallery/8.jpg" alt="" />
              </div>
              <div className="mt-6">
                <img className="h-auto max-w-full rounded-lg" src="/images/gallery/5.jpg" alt="" />
              </div>
              <div className="mt-6">
                <img className="h-auto max-w-full rounded-lg" src="/images/gallery/6.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-32">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center gap-3">
            <AlbumIcon width={90} />
            <h2 className={`${helloHoney.className} text-6xl`}>Thời gian / địa điểm</h2>
            <p className={`${raleway.className} text-lg text-zinc-500`}>
              We are pleased to welcome you to the wedding!
            </p>
          </div>
          <div className="mt-20 grid grid-cols-2 gap-20">
            <div className={raleway.className}>
              <div style={{ backgroundImage: `url('/images/bride-location.jpg')` }} className="bg-center bg-cover w-[170px] px-3 py-3 rounded-lg  text-white">
                <h3 className="text-3xl">Nhà gái</h3>
                <span>Hải Phòng</span>
              </div>
              <div>
                <p>Tiệc cưới</p>
                <p>Lúc 10h00 ngày 15/10/2023</p>
                <p>Tại tư gia nhà gái</p>
                <p>Địa chỉ: Thôn Kiều Hạ 2, Quốc Tuấn, An Dương, Hải Phòng</p>
              </div>
            </div>
            <div className="">
              <img src="/images/bride-event.jpg" alt="" />
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 gap-20">
            <div className="">
              <img src="/images/groom-event.jpg" alt="" className="w-[250px]" />
            </div>
            <div className={raleway.className}>
              <div style={{ backgroundImage: `url('/images/groom-location.jpg')` }} className="bg-center bg-cover w-[170px] px-3 py-3 rounded-lg  text-white">
                <h3 className="text-3xl">Nhà trai</h3>
                <span>Yên Bái</span>
              </div>
              <div>
                <p>Tiệc cưới</p>
                <p>Lúc 10h00 ngày 15/10/2023</p>
                <p>Tại tư gia nhà trai</p>
                <p>Địa chỉ: thôn Trung Tâm, Yên Phú, Văn Yên, Yên Bái</p>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* <section className="my-32">
        <div>
          <div style={{ backgroundImage: `url('/images/thank-you.jpg')` }} className="min-h-[700px] bg-center bg-cover">

          </div>
        </div>
      </section> */}
    </div >
  )
}
