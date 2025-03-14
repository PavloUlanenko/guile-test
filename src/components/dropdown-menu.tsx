'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          className={`hover:bg-black-04 flex h-9 w-9 items-center justify-center rounded-xl transition-colors focus:outline-none ${isOpen ? 'bg-black-04' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <div className="flex flex-col items-center">
            <Image
              src={`/img/dots.svg`}
              alt="Barber"
              width={2}
              height={14}
              className="object-cover"
            />
          </div>
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="bg-black-02 text-gray-08 absolute bottom-full right-0 mb-2 w-[158px] overflow-y-auto rounded-2xl p-2 text-white shadow-lg">
            <ul className="space-y-1">
              <li>
                <button className="flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left hover:bg-zinc-800">
                  <Image
                    src={`/img/re-book.svg`}
                    alt="re-book"
                    width={16}
                    height={16}
                    className="object-cover"
                  />
                  <span className="text-gray-08 text-title-14 font-semibold">rebook</span>
                </button>
              </li>
              <ul className={'bg-black-05 h-px w-full'}></ul>
              <li>
                <button className="flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left hover:bg-zinc-800">
                  <Image
                    src={`/img/call.svg`}
                    alt="re-book"
                    width={16}
                    height={16}
                    className="object-cover"
                  />
                  <span className="text-gray-08 text-title-14 font-semibold">call malik</span>
                </button>
              </li>
              <li>
                <button className="flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left hover:bg-zinc-800">
                  <Image
                    src={`/img/edit.svg`}
                    alt="re-book"
                    width={16}
                    height={16}
                    className="object-cover"
                  />
                  <span className="text-gray-08 text-title-14 font-semibold">leave a review</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
