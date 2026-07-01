// @flow strict
import Link from 'next/link';
import { translations } from '@/utils/translations';

function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-slate-950/70 py-8 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
        <div>
          <p className="text-sm text-slate-300">
            {translations.footer.copyright}{' '}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/sarabjeet-singh-a642a0241/"
              className="font-semibold text-pink-300 transition hover:text-pink-200"
            >
              Sarabjeet Singh
            </Link>
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-500">Crafted for modern brands and ambitious products.</p>
        </div>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-slate-400">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Available for select collaborations</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;