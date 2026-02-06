// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { translations } from '@/utils/translations';

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white w-full">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            {translations.footer.copyright} <Link target="_blank" href="https://www.linkedin.com/in/sarabjeet-singh-a642a0241/" className="text-[#16f2b3]">Sarabjeet Singh</Link>
          </p>
        </div>
      </div>
    </div >
  );
}

export default Footer;