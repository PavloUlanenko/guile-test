"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronUp, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {navItems} from '@/constant/common';

interface DropdownMenuProps {
  user: {
    name: string
    avatar: string
  }
}

export default function AccountDropdown({ user }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)

    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="relative">
      {/* Avatar Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 focus:outline-none">
        <div className="h-10 w-10 rounded-full overflow-hidden mr-3.5">
          <Image
            src="/img/avatar.png"
            alt="User avatar"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-white"/> : <ChevronDown className="w-5 h-5 text-white"/>}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-[-99px] top-[48px] w-[186px] flex flex-col items-center py-[15px] pb-[20px] bg-black-05 rounded-[20px] z-10">
          {/* Theme Toggle */}
          <div className="w-full px-5">
            <div className="flex items-center justify-between">
              <span className="text-gray-01 text-body-16m tracking-normal">theme</span>
              <div className="bg-gray-09 rounded-full px-[5px] py-[3px] flex gap-1">
                <button
                  onClick={toggleTheme}
                  className={cn("p-1 rounded-full transition-colors", !isDarkMode && "bg-black-05")}
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
                  className={cn("p-1 rounded-full transition-colors", isDarkMode && "bg-black-05")}
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

          <div className={'border-t border-gray-07 h-px mt-4 mb-6 w-full'}></div>

          {/* Navigation Links */}
          <div className="w-full px-5 space-y-6">
            {navItems.map((el) => {
              if (el.name === 'appointments') {
                return (
                  <div className="flex items-center justify-between gap-2" key={el.name}>
                    <a href={el.href} className="text-gray-01 text-body-16m tracking-normal hover:text-gray-300">
                      {el.name}
                    </a>
                    <span className="bg-gold-01 text-gray-01 px-3 py-px rounded-full text-body-12">1</span>
                  </div>
                );
              }

              return (
                <a href={el.href} className="block text-gray-01 text-body-16m tracking-normal hover:text-gray-300" key={el.name}>
                  {el.name}
                </a>
              );
            })}
            <a href="#" className="block text-gray-01 text-body-16m tracking-normal hover:text-gray-300">
              sign out
            </a>
          </div>

          {/* Footer Links */}
          <div className="w-full px-5 pt-5 mt-6 border-t border-gray-07 flex gap-5">
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
  )
}