import AlbumIcon from '@/components/AlbumIcon';
import BannerImages from '@/components/BannerImages';
import Logo from '@/components/Logo';
import MenuIcon from '@/components/MenuIcon';
import StaticCalendar from '@/components/StaticCalendar';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent, MouseEventHandler } from 'react';

export default function Home() {

  const handleClick = (e: MouseEvent, targetId?: string) => {
    const elem = document.activeElement as HTMLElement;
    if(elem){
      elem?.blur();
    }
    e.stopPropagation();
    e.preventDefault();
    if (!targetId) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="text-[#4a3e5a]">
      <header className="hidden md:block sticky top-0 z-[100] backdrop-blur-lg bg-white/70 shadow">
        <div className="container m-auto flex items-center justify-between">
          <Logo />
          <nav className="">
            <div className="flex items-center gap-4 text-md">
              <Link onClick={(e) => handleClick(e)} href="#" className="px-2 py-8">Home</Link>
              <Link onClick={(e) => handleClick(e, 'album')} href="#album" className="px-2 py-8">Album ảnh</Link>
              <Link onClick={(e) => handleClick(e, 'detail')} href="#detail" className="px-2 py-8">Thời gian / Địa điểm</Link>
              <Link onClick={(e) => handleClick(e, 'album')} href="#" className="px-2 py-8">Mừng cưới</Link>
              <Link onClick={(e) => handleClick(e, 'album')} href="#" className="px-2 py-8">Gửi lời chúc</Link>
            </div>
          </nav>
        </div>
      </header>
      <div className="md:hidden navbar bg-base-100 z-[100] px-5 py-5 sticky top-0 backdrop-blur-lg bg-white/70">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <MenuIcon />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link onClick={(e) => handleClick(e)} href="#">Home</Link></li>
              <li><Link onClick={(e) => handleClick(e, 'album')} href="#album">Album ảnh</Link></li>
              <li><Link onClick={(e) => handleClick(e, 'detail')} href="#detail">Thời gian / Địa điểm</Link></li>
              <li><Link onClick={(e) => handleClick(e, 'album')} href="#">Mừng cưới</Link></li>
              <li><Link onClick={(e) => handleClick(e, 'album')} href="#">Gửi lời chúc</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <section className="">
        <BannerImages />
      </section>

      <section className="py-10 md:py-20 mt-5 scroll-mt-10 md:scroll-mt-20" id="album">
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

      <section className="py-10 md:py-20 scroll-mt-10 md:scroll-mt-20" id="detail">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center gap-3 px-5">
            <h2 className="text-2xl md:text-[40px] uppercase tracking-widest text-center">Tiệc cưới nhà gái</h2>
            <p className="md:text-lg text-zinc-500 text-center">
              Sự hiện diện của quý vị là niềm vinh hạnh cho gia đình chúng tôi
            </p>
            <AlbumIcon width={90} className="mt-5" />
          </div>
        </div>
        <div className="mt-10">
          <div className="container hero relative m-auto bg-[url('/images/bg-3.jpg')] bg-cover md:rounded-lg">
            <div className="hero-overlay bg-white/20"></div>
            <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-20 items-stretch md:items-center p-5 py-10 md:p-20 md:py-20">
              <div className="p-10 rounded-lg backdrop-blur-lg bg-white/40 mt-5 md:mt-0">
                <StaticCalendar date="2023/10/22" className="!max-w-full md:max-w-[350px]"/>
              </div>
              <div>
                <h3 className="text-2xl md:text-[32px] uppercase tracking-wider">Tiệc cưới tại gia đình nhà gái</h3>
                <div className="mt-5 text-xl leading-9">
                  <p>Được tổ chức vào lúc 09 giờ 00 phút</p>
                  <p>Chủ nhật ngày 22 / 10 / 2023</p>
                  <p>Địa chỉ: Thôn Kiều Hạ 2, Quốc Tuấn, An Dương, Hải Phòng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 scroll-mt-10 md:scroll-mt-20">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center gap-3 px-5">
            <h2 className="text-2xl md:text-[40px] uppercase tracking-widest text-center">Tiệc cưới nhà trai</h2>
            <p className="md:text-lg text-zinc-500 text-center">
              Sự hiện diện của quý vị là niềm vinh hạnh cho gia đình chúng tôi
            </p>
            <AlbumIcon width={90} className="mt-5" />
          </div>
        </div>
        <div className="mt-10">
          <div className="container hero relative m-auto bg-[url('/images/bg-4.jpg')] bg-cover md:rounded-lg text-white">
            <div className="hero-overlay bg-black/20"></div>
            <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-20 items-stretch md:items-center p-5 py-10 md:p-20 md:py-20">
              <div className="p-10 rounded-lg backdrop-blur-lg bg-white/40 mt-5 md:mt-0">
                <StaticCalendar date="2023/10/22" className="!max-w-full md:max-w-[350px]"/>
              </div>
              <div>
                <h3 className="text-2xl md:text-[32px] uppercase tracking-wider">Tiệc cưới tại gia đình nhà trai</h3>
                <div className="mt-5 text-xl leading-9">
                <p>Được tổ chức vào lúc 10 giờ 30 phút</p>
                <p>Chủ nhật ngày 29 / 10 / 2023</p>
                <p>Địa chỉ: Xóm Ủy ban, Thôn Trung Tâm, Yên Phú, Văn Yên, Yên Bái</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  )
}
