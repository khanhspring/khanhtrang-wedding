import Link from "next/link";
import HeartIcon from "./HeartIcon";
import { Raleway, Sacramento } from 'next/font/google';

const sacramento = Sacramento({
  subsets: ['latin'],
  weight: '400'
});

export default function Logo({ ...rest }) {
  return (
    <h1 className={sacramento.className}>
      <Link className="flex items-center justify-center gap-1 text-3xl" href="/">
        Khánh <HeartIcon width={11} height={11} className="ml-0.5" /> Trang
      </Link>
    </h1>
  );
}