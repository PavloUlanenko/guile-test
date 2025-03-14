'use client';

import { navItems } from '@/constant/common';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface SidebarProps {
  user: {
    name: string;
    bookings: number;
    spent: string;
    avatar: string;
  };
}

export default function Sidebar({ user }: SidebarProps) {
  const [activeHash, setActiveHash] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Handle hash changes
  useEffect(() => {
    setActiveHash(window.location.hash);

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('mobile-sidebar');
      const toggleButton = document.getElementById('sidebar-toggle');

      if (
        isOpen &&
        sidebar &&
        toggleButton &&
        !sidebar.contains(event.target as Node) &&
        !toggleButton.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent scrolling when sidebar is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <button
        id="sidebar-toggle"
        className={`bg-black-02 sticky left-4 top-[26px] z-50 h-fit rounded-lg p-2 md:hidden`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {isOpen ? (
          <X className="text-white-01 h-6 w-6" />
        ) : (
          <Menu className="text-white-01 h-6 w-6" />
        )}
      </button>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar - Desktop (always visible) & Mobile (conditionally visible) */}
      <aside
        id="mobile-sidebar"
        className={cn(
          'bg-black-02 px-10 pb-[168px] pt-[29px] lg:w-[382px] lg:px-20',
          'md:block',
          'fixed left-0 top-7 z-50 h-full transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full', // Slide in/out on mobile
          'md:relative md:translate-x-0',
        )}
      >
        <button
          className="absolute right-4 top-4 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
        >
          <X className="text-white-01 h-6 w-6" />
        </button>

        {/* Logo */}
        <div className="mb-[55px]">
          <Image
            src={'/img/scissors.svg'}
            alt={'Scissors logo'}
            width={41}
            height={36}
            className="object-contain"
          />
        </div>

        {/* User profile */}
        <div className="mb-24">
          <div className="h-30 w-30 mb-9 overflow-hidden rounded-full">
            <Image
              src={user.avatar || '/img/avatar.png'}
              alt={'User avatar'}
              width={120}
              height={120}
              className="object-cover"
            />
          </div>
          <h2 className="text-h2 text-white-01 mb-9">{user.name}</h2>

          <div className="flex items-center justify-between text-left">
            <div>
              <p className="text-h3 text-gray-01 mb-[5px]">{user.bookings}</p>
              <p className="text-gray-02 text-body-14">bookings</p>
            </div>
            <div className={'divider bg-gray-07 h-[26px] w-0.5 flex-grow-0 rounded-sm'}></div>
            <div>
              <p className="text-h3 text-gray-01 mb-[5px]">{user.spent}</p>
              <p className="text-gray-02 text-body-14">total spent</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav>
          <ul className={'flex flex-col gap-6 lg:gap-8'}>
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    'text-body-16m block transition-colors',
                    item.href === activeHash
                      ? 'text-white-02 font-medium'
                      : 'text-gray-03 hover:text-gray-300',
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
