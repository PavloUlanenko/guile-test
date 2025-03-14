"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import {navItems} from '@/constant/common';

interface SidebarProps {
  user: {
    name: string
    bookings: number
    spent: string
    avatar: string
  }
}

export default function Sidebar({ user }: SidebarProps) {
  const [activeHash, setActiveHash] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  // Handle hash changes
  useEffect(() => {
    setActiveHash(window.location.hash)

    const handleHashChange = () => {
      setActiveHash(window.location.hash)
    }

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("mobile-sidebar")
      const toggleButton = document.getElementById("sidebar-toggle")

      if (
        isOpen &&
        sidebar &&
        toggleButton &&
        !sidebar.contains(event.target as Node) &&
        !toggleButton.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Prevent scrolling when sidebar is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <button
        id="sidebar-toggle"
        className={`md:hidden sticky top-[26px] h-fit left-4 z-50 bg-black-02 p-2 rounded-lg`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <X className="h-6 w-6 text-white-01" /> : <Menu className="h-6 w-6 text-white-01" />}
      </button>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar - Desktop (always visible) & Mobile (conditionally visible) */}
      <aside
        id="mobile-sidebar"
        className={cn(
          "lg:w-[382px] pt-[29px] pb-[168px] px-10 lg:px-20 bg-black-02",
          "md:block",
          "fixed top-7 left-0 h-full z-50 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full", // Slide in/out on mobile
          "md:relative md:translate-x-0",
        )}
      >
        <button
          className="absolute top-4 right-4 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
        >
          <X className="h-6 w-6 text-white-01" />
        </button>

        {/* Logo */}
        <div className="mb-[55px]">
          <Image src={"/img/scissors.svg"} alt={"Scissors logo"} width={41} height={36} className="object-contain" />
        </div>

        {/* User profile */}
        <div className="mb-24">
          <div className="h-30 w-30 rounded-full overflow-hidden mb-9">
            <Image
              src={user.avatar || "/img/avatar.png"}
              alt={"User avatar"}
              width={120}
              height={120}
              className="object-cover"
            />
          </div>
          <h2 className="text-h2 text-white-01 mb-9">{user.name}</h2>

          <div className="flex justify-between items-center text-left">
            <div>
              <p className="text-h3 text-gray-01 mb-[5px]">{user.bookings}</p>
              <p className="text-gray-02 text-body-14">bookings</p>
            </div>
            <div className={"divider flex-grow-0 h-[26px] w-0.5 bg-gray-07 rounded-sm"}></div>
            <div>
              <p className="text-h3 text-gray-01 mb-[5px]">{user.spent}</p>
              <p className="text-gray-02 text-body-14">total spent</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav>
          <ul className={"flex flex-col gap-6 lg:gap-8"}>
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    "block transition-colors text-body-16m",
                    item.href === activeHash ? "text-white-02 font-medium" : "text-gray-03 hover:text-gray-300",
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
  )
}