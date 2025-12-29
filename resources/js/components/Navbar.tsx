import { useState } from "react"
import { usePage } from "@inertiajs/react"
import { type SharedData } from "@/types"
import { Link } from "@inertiajs/react"
import {
  Menu,
  X,
  Search,
  User,
  ShoppingCart,
} from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { auth } = usePage<SharedData>().props

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="relative h-16 px-4">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-md"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/">
              <img
                src="/img/RTRKICK.svg"
                alt="RTRKICK"
                className="h-6"
              />
            </Link>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-4">
            <Link href="/wishlist">
              <Search className="h-5 w-5 hover:text-green-900 transition" />
            </Link>

            <Link href={auth.user ? "/profile" : "/login"}>
              <User className="h-5 w-5 hover:text-green-900 transition" />
            </Link>

            <Link href="/cart">
              <ShoppingCart className="h-5 w-5 hover:text-green-900 transition" />
            </Link>
          </div>

        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute left-0 top-0 h-full w-72 bg-white p-6 transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <img src="/img/RTRKICK.svg" className="h-6" />
            <button onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="space-y-4 text-sm font-medium">
            <Link href="/" className="block hover:text-green-900">
              Home
            </Link>
            <Link href="/shop" className="block hover:text-green-900">
              Shop
            </Link>
            <Link href="/new-arrivals" className="block hover:text-green-900">
              New Arrivals
            </Link>
            <Link href="/top-league" className="block hover:text-green-900">
              Top League
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
