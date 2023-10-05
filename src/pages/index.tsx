import AlbumIcon from '@/components/AlbumIcon';
import BannerImages from '@/components/BannerImages';
import Countdown from '@/components/Countdown';
import DirectionIcon from '@/components/DirectionIcon';
import Logo from '@/components/Logo';
import MenuIcon from '@/components/MenuIcon';
import MessageForm from '@/components/MessageForm';
import MessageItem from '@/components/MessageItem';
import StaticCalendar from '@/components/StaticCalendar';
import { useMessages } from '@/shared/hooks/message';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent, useEffect, useRef } from 'react';
import SimpleBar from 'simplebar-react';

type Props = {
  invitee?: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const invitee = (context.query?.invitee || '') as string;
  return {
    props: {
      invitee,
    },
  };
};

const HomePage: NextPage<Props> = ({ invitee }) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const { data } = useMessages('AuxEN8nLjFed');

  const handleClick = (e: MouseEvent, targetId?: string) => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (invitee) {
        modalRef.current?.showModal();
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    }
  }, [invitee]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (modalRef.current?.open) {
        modalRef.current?.close();
      }
    }, 30000);

    return () => {
      clearTimeout(timeout);
    }
  }, [invitee]);

  return (
    <>
      <div className="text-zinc-700">
        <header className="hidden md:block sticky top-0 z-[100] backdrop-blur-lg bg-white/70 shadow">
          <div className="container m-auto flex items-center justify-between">
            <Logo />
            <nav className="">
              <div className="flex items-center gap-4 text-md">
                <Link onClick={(e) => handleClick(e)} href="#" className="px-2 py-8">Home</Link>
                <Link onClick={(e) => handleClick(e, 'album')} href="#album" className="px-2 py-8">Album ảnh</Link>
                <Link onClick={(e) => handleClick(e, 'bride')} href="#bride" className="px-2 py-8">Nhà gái</Link>
                <Link onClick={(e) => handleClick(e, 'groom')} href="#groom" className="px-2 py-8">Nhà trai</Link>
                <Link onClick={(e) => handleClick(e, 'bank-info')} href="#bank-info" className="px-2 py-8">Mừng cưới</Link>
                <Link onClick={(e) => handleClick(e, 'message')} href="#message" className="px-2 py-8">Gửi lời chúc</Link>
              </div>
            </nav>
          </div>
        </header>
        <div className="md:hidden navbar bg-base-100 z-[100] px-5 py-5 sticky top-0 backdrop-blur-lg bg-white/70 shadow">
          <div className="flex-1">
            <Logo />
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <MenuIcon />
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li className="py-1"><Link onClick={(e) => handleClick(e)} href="#">Home</Link></li>
                <li className="py-1"><Link onClick={(e) => handleClick(e, 'album')} href="#album">Album ảnh</Link></li>
                <li className="py-1"><Link onClick={(e) => handleClick(e, 'bride')} href="#bride">Nhà gái</Link></li>
                <li className="py-1"><Link onClick={(e) => handleClick(e, 'groom')} href="#groom">Nhà trai</Link></li>
                <li className="py-1"><Link onClick={(e) => handleClick(e, 'bank-info')} href="#bank-info">Mừng cưới</Link></li>
                <li className="py-1"><Link onClick={(e) => handleClick(e, 'message')} href="#message">Gửi lời chúc</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <section className="">
          <BannerImages />
        </section>

        <section className="py-10 md:py-20 mt-5 scroll-mt-20" id="album">
          <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center gap-3 px-5">
              <h2 className="text-2xl md:text-[40px] uppercase tracking-widest text-center">Album ảnh cưới</h2>
              <p className="md:text-lg text-zinc-500 text-center">You are fall in love with someone when you can not put into words how they make you feel</p>
              <AlbumIcon width={90} className="mt-5" />
            </div>
            <div className="mt-10 mx-5">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                <div className="mt-0">
                  <Image className="h-auto w-full rounded-lg" src="/images/gallery/2.jpg" alt="" width={500} height={500} />
                </div>
                <div className="mt-6">
                  <Image className="h-auto w-full rounded-lg" src="/images/gallery/4.jpg" alt="" width={500} height={500} />
                </div>
                <div className="mt-6">
                  <Image className="h-auto w-full rounded-lg" src="/images/gallery/7.jpg" alt="" width={500} height={500} />
                </div>
                <div className="mt-6">
                  <Image className="h-auto w-full rounded-lg" src="/images/gallery/3.jpg" alt="" width={500} height={500} />
                </div>
                <div className="mt-6">
                  <Image className="h-auto w-full rounded-lg" src="/images/gallery/10.jpg" alt="" width={500} height={500} />
                </div>
                <div className="mt-6">
                  <Image className="h-auto w-full rounded-lg" src="/images/gallery/8.jpg" alt="" width={500} height={500} />
                </div>
                <div className="mt-6">
                  <Image className="h-auto w-full rounded-lg" src="/images/gallery/5.jpg" alt="" width={500} height={500} />
                </div>
                <div className="mt-6">
                  <Image className="h-auto w-full rounded-lg" src="/images/gallery/6.jpg" alt="" width={500} height={500} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-20 scroll-mt-20" id="bride">
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
            <div className="container hero relative m-auto bg-[url('/images/bg-3.jpg')] bg-cover">
              <div className="hero-overlay bg-black/10"></div>
              <div className="flex flex-col-reverse lg:flex-row gap-5 md:gap-20 items-stretch md:items-center p-5 py-10 md:p-20 md:py-24">
                <div className="p-10 rounded-lg backdrop-blur-lg bg-white/40 mt-5 md:mt-0">
                  <StaticCalendar date="2023/10/22" className="!max-w-full md:max-w-[350px]" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-[32px] uppercase tracking-wider font-semibold">Tiệc cưới tại gia đình <br className="md:hidden" /> nhà gái</h3>
                  <div className="mt-7 text-xl leading-9">
                    <p>Được tổ chức vào lúc 09 giờ 00 phút</p>
                    <p>Chủ nhật ngày 22 / 10 / 2023</p>
                    <p>Địa chỉ: Thôn Kiều Hạ 2, Quốc Tuấn, An Dương, Hải Phòng</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 mt-7">
                    <div className="rounded-lg backdrop-blur-sm bg-white/30 p-5 flex items-center">
                      <Countdown date="2023-10-22T02:30:00.999Z" />
                    </div>
                    <Link
                      className="hero relative bg-[url('/images/map-2.png')] bg-cover bg-center rounded-lg min-h-[100px] w-full md:max-w-[200px] cursor-pointer text-white"
                      href="https://maps.app.goo.gl/iRfHdbCXufv9GPf87?g_st=ic"
                      target="_blank"
                    >
                      <div className="hero-overlay bg-black/10 rounded-lg z-10"></div>
                      <div className="flex gap-4 justify-between w-full p-5 z-50">
                        <span className="text-lg">Chỉ đường</span>
                        <DirectionIcon width={25} />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-20 scroll-mt-20" id="groom">
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
            <div className="container hero relative m-auto bg-[url('/images/bg-4.jpg')] bg-cover text-white">
              <div className="hero-overlay bg-black/20"></div>
              <div className="flex flex-col lg:flex-row gap-5 md:gap-20 items-stretch md:items-center px-5 py-10 md:px-20 md:py-24">
                <div>
                  <h3 className="text-2xl md:text-[32px] uppercase tracking-wider font-semibold">Tiệc cưới tại gia đình <br className="md:hidden" /> nhà trai</h3>
                  <div className="mt-7 text-xl leading-9">
                    <p>Được tổ chức vào lúc 10 giờ 30 phút</p>
                    <p>Chủ nhật ngày 29 / 10 / 2023</p>
                    <p>Địa chỉ: Xóm Ủy ban, Thôn Trung Tâm, Yên Phú, Văn Yên, Yên Bái</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 mt-7">
                    <div className="rounded-lg backdrop-blur-sm bg-white/30 p-5 flex items-center">
                      <Countdown date="2023-10-29T03:30:00.999Z" />
                    </div>
                    <Link
                      className="hero relative bg-[url('/images/map-1.png')] bg-cover bg-center rounded-lg min-h-[100px] w-full md:max-w-[200px] cursor-pointer text-white"
                      href="https://maps.app.goo.gl/YLbxPGzwjodDPGjC8?g_st=ic"
                      target="_blank"
                    >
                      <div className="hero-overlay bg-black/10 rounded-lg z-10"></div>
                      <div className="flex gap-4 justify-between w-full p-5 z-50">
                        <span className="text-lg">Chỉ đường</span>
                        <DirectionIcon width={25} />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="p-10 rounded-lg backdrop-blur-lg bg-white/30 mt-5 md:mt-0">
                  <StaticCalendar date="2023/10/29" className="!max-w-full md:max-w-[350px]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 md:mt-16 scroll-mt-20" id="bank-info">
          <div className="container m-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="flex flex-col gap-2 justify-center py-5 md:py-14 mx-5 sm:mx-0">
                <h2 className="text-2xl md:text-4xl uppercase tracking-widest">Mừng cưới</h2>
                <p className="md:text-lg">Nhớ ghi tên nhé!</p>
              </div>
              <div className="px-16 md:px-28 py-20 md:py-40 bg-[#7C36BB] text-white flex flex-col justify-center">
                <div>
                  <Image className="h-[35px] w-auto grayscale opacity-50" src="/images/tp-bank-logo.png" alt="" width={200} height={200} />
                </div>
                <div className="py-5">
                  <div className="p-4 bg-white rounded">
                    <Image className="h-full w-full rounded" src="/images/trang-tp-bank.png" alt="" width={250} height={250} />
                  </div>
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <h3 className="text-lg md:text-xl font-bold uppercase">Nguyễn Thị Thu Trang</h3>
                  <p className="text-xl">0192 8072 001</p>
                  <p className="opacity-80">Cô dâu</p>
                </div>
              </div>
              <div className="px-16 md:px-28 py-20 md:py-40 bg-[#BD2626] text-white flex flex-col justify-center">
                <div>
                  <Image className="h-[35px] w-auto grayscale opacity-50" src="/images/techcombank-logo.svg" alt="" width={200} height={200} />
                </div>
                <div className="py-5">
                  <div className="p-4 bg-white rounded">
                    <Image className="h-full w-full rounded" src="/images/khanh-techcombank.png" alt="" width={250} height={250} />
                  </div>
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <h3 className="text-lg md:text-xl font-bold uppercase">Trần Xuân Khánh</h3>
                  <p className="text-xl">1903 6301 4920 11</p>
                  <p className="opacity-80">Chú rể</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 md:mt-20 py-10 md:py-20 scroll-mt-20" id="message">
          <div className="container m-auto flex flex-col-reverse lg:grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
            <div className="bg-[url('/images/bg-8.jpg')] bg-cover bg-center  w-full">
              <div className="rounded-lg w-full">
                <SimpleBar className="max-h-[350px] md:max-h-[650px] w-full">
                  <div className="flex flex-col gap-5 p-5">
                    {data?.data.map((item: any) => (
                      <MessageItem key={item._id} message={item}/>
                    ))}
                  </div>
                </SimpleBar>
              </div>
            </div>
            <div className="md:p-7 md:shadow-md">
              <div className="p-5 md:px-10 md:py-12 backdrop-blur-lg bg-white/30 md:border border-[#F3ECE9] md:rounded">
                <div className="flex flex-col justify-center items-center gap-3 px-5 mb-10">
                  <h2 className="text-2xl md:text-[40px] uppercase tracking-widest text-center">Gửi lời chúc</h2>
                  <p className="md:text-lg text-zinc-500 text-center mt-2">
                    Những lời chúc tốt đẹp sẽ góp phần vun đắp hạnh phúc cho gia đình nhỏ của Khánh & Trang
                  </p>
                </div>
                <MessageForm invitee={invitee} />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 py-10 md:py-20">
          <div className="container m-auto flex flex-col justify-center items-center">
            <h3 className="text-3xl font-semibold text-center mb-5">Tag us on Facebook</h3>
            <p>Cô dâu: @Thu Trang</p>
            <p>Chú rể: @Trần Xuân Khánh</p>
            <p>Hashtag: #khanhtrang_wedding</p>
          </div>
        </section>

        <section className="hero scroll-mt-20 mt-20 bg-cover bg-center md:min-h-[500px] w-full relative">
          <div className="hero-overlay bg-white/10 z-20"></div>
          <Image
            layout="fill"
            className="object-cover object-center pointer-events-none z-10"
            src="/images/bg-7.jpg"
            alt=""
          />
          <div className="container m-auto flex flex-col relative z-50 items-center px-5 py-20">
            <h3 className="text-5xl md:text-[100px] text-white font-black text-center">Thank you!</h3>
            <p className="text-3xl md:text-[50px] text-white font-bold text-center">See you at the wedding!</p>
          </div>
        </section>

        <footer className="bg-[#F2F2F2]">
          <div className="container flex items-center justify-between px-5 py-5 text-sm m-auto">
            <h2 className="font-semibold">Khánh & Trang</h2>
            <p>♥ 2023</p>
          </div>
        </footer>
      </div>
      <dialog id="modal" className="modal" ref={modalRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-5">Xin chào!</h3>
          <p>Trân trọng kính mời {invitee} tới chung vui cùng cô dâu Thu Trang và chú rể Xuân Khánh</p>
          <p className="mt-3">Sự hiện diện của quý vị là niềm vinh hạnh cho gia đình chúng tôi</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn outline-none">Đóng</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default HomePage;
