"use client"

import { useState, useRef, useEffect } from "react"
import Image from 'next/image'

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          className={`hover:bg-black-04 w-9 h-9 rounded-xl flex items-center justify-center focus:outline-none transition-colors ${isOpen ? 'bg-black-04' : ''}`}
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
          <div className="absolute bottom-full mb-2 right-0 bg-black-02 text-gray-08 rounded-2xl p-2 w-[158px] text-white shadow-lg overflow-y-auto">
            <ul className="space-y-1">
              <li>
                <button className="flex items-center gap-3 px-2 py-2 w-full text-left hover:bg-zinc-800 rounded-xl">
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
              <ul className={'w-full h-px bg-black-05'}></ul>
              <li>
                <button className="flex items-center gap-3 px-2 py-2 w-full text-left hover:bg-zinc-800 rounded-xl">
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
                <button className="flex items-center gap-3 px-2 py-2 w-full text-left hover:bg-zinc-800 rounded-xl">
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
  )
}