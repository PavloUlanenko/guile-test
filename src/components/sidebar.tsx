"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

interface SidebarProps {
  user: {
    name: string
    bookings: number
    spent: string
    avatar: string
  }
}

const navItems = [
  { name: "account", href: "#account" },
  { name: "profile", href: "#profile" },
  { name: "appointments", href: "#appointments" },
  { name: "wallet", href: "#wallet" },
  { name: "reviews", href: "#reviews" },
]

export default function Sidebar({ user }: SidebarProps) {
  const [activeHash, setActiveHash] = useState("")

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

  return (
    <aside className="lg:w-[382px] pt-[29px] pb-[168px] px-10 lg:px-20 bg-black-02 hidden md:block">
      {/* Logo */}
      <div className="mb-[55px]">
        <Image src={"/img/scissors.svg"} alt={"Scissors logo"} width={41} height={36} className="object-contain" />
      </div>

      {/* User profile */}
      <div className="mb-25">
        <div className="h-30 w-30 rounded-full overflow-hidden mb-9">
          <Image
            src={user.avatar || "/img/avatar.png"}
            alt={"User avatar"}
            width={120}
            height={120}
            className="object-cover"
          />
        </div>
        <h2 className="text-h2 text-white-01 mb-[46px]">{user.name}</h2>

        <div className="flex justify-between items-center text-left">
          <div>
            <p className="text-h3 text-gray-01 mb-[15px]">{user.bookings}</p>
            <p className="text-gray-02 text-body-14">bookings</p>
          </div>
          <div className={"divider flex-grow-0 h-[26px] w-0.5 bg-gray-07"}></div>
          <div>
            <p className="text-h3 text-gray-01 mb-[15px]">{user.spent}</p>
            <p className="text-gray-02 text-body-14">total spent</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <ul className={'flex flex-col gap-6 lg:gap-12'}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={cn(
                  "block transition-colors text-body-16m",
                  item.href === activeHash ? "text-white-02 font-medium" : "text-gray-03 hover:text-gray-300",
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}