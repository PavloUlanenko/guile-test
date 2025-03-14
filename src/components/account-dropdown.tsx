'use client';

import { navItems } from '@/constant/common';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface DropdownMenuProps {
  user: {
    name: string;
    avatar: string;
  };
}

export default function AccountDropdown({ user }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);

    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="relative">
      {/* Avatar Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 focus:outline-none"
      >
        <div className="mr-3.5 h-10 w-10 overflow-hidden rounded-full">
          <Image
            src="/img/avatar.png"
            alt="User avatar"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-white" />
        ) : (
          <ChevronDown className="h-5 w-5 text-white" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="bg-black-05 absolute left-[-99px] top-[48px] z-10 flex w-[186px] flex-col items-center rounded-[20px] py-[15px] pb-[20px]">
          {/* Theme Toggle */}
          <div className="w-full px-5">
            <div className="flex items-center justify-between">
              <span className="text-gray-01 text-body-16m tracking-normal">theme</span>
              <div className="bg-gray-09 flex gap-1 rounded-full px-[5px] py-[3px]">
                <button
                  onClick={toggleTheme}
                  className={cn('rounded-full p-1 transition-colors', !isDarkMode && 'bg-black-05')}
                >
                  <Image
                    src="/img/sun.svg"
                    alt="sun"
                    width={16}
                    height={16}
                    className="object-cover"
                  />
                </button>
                <button
                  onClick={toggleTheme}
                  className={cn('rounded-full p-1 transition-colors', isDarkMode && 'bg-black-05')}
                >
                  <Image
                    src="/img/moon.svg"
                    alt="moon"
                    width={16}
                    height={16}
                    className="object-cover"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className={'border-gray-07 mb-6 mt-4 h-px w-full border-t'}></div>

          {/* Navigation Links */}
          <div className="w-full space-y-6 px-5">
            {navItems.map((el) => {
              if (el.name === 'appointments') {
                return (
                  <div className="flex items-center justify-between gap-2" key={el.name}>
                    <a
                      href={el.href}
                      className="text-gray-01 text-body-16m tracking-normal hover:text-gray-300"
                    >
                      {el.name}
                    </a>
                    <span className="bg-gold-01 text-gray-01 text-body-12 rounded-full px-3 py-px">
                      1
                    </span>
                  </div>
                );
              }

              return (
                <a
                  href={el.href}
                  className="text-gray-01 text-body-16m block tracking-normal hover:text-gray-300"
                  key={el.name}
                >
                  {el.name}
                </a>
              );
            })}
            <a
              href="#"
              className="text-gray-01 text-body-16m block tracking-normal hover:text-gray-300"
            >
              sign out
            </a>
          </div>

          {/* Footer Links */}
          <div className="border-gray-07 mt-6 flex w-full gap-5 border-t px-5 pt-5">
            <a href="#" className="text-white-05 text-body-14 hover:text-gray-400">
              Privacy
            </a>
            <a href="#" className="text-white-05 text-body-14 hover:text-gray-400">
              Terms
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
