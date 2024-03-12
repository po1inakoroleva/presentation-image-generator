'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';

const Header: FC = () => {
  const t = useTranslations('HomePage');

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="container px-6 py-4 mx-auto md:px-3">
        <div className="items-center justify-center md:flex">
          <div className="items-center md:flex">
            <a href='/' className="flex mx-3 text-lg text-indigo-500 uppercase cursor-pointer hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
              </svg>
              {t('backBtn')}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;