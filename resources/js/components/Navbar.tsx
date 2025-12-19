import { useState } from "react"
import { Link, usePage } from "@inertiajs/react"
import { type SharedData } from "@/types"
import { login, register } from "@/routes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { Button } from "@/components/ui/button"

import { Menu, X, ChevronDown } from "lucide-react"

const navigation = [
  { name: "Home", href: "#" },
  {
    name: "Projects",
    children: [
      { name: "Web App", href: "#" },
      { name: "Mobile App", href: "#" },
      { name: "UI Design", href: "#" },
    ],
  },
  { name: "Team", href: "#" },
]

export default function Navbar({ canRegister = true }: { canRegister?: boolean }) {
  const { auth } = usePage<SharedData>().props
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="shadow-md font-jakarta">
      <div className="mx-5 px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          {/* LOGO + DESKTOP MENU */}
          <div className="flex items-center gap-6">
            <img
              src="/img/RTRKICK.svg"
              alt="Logo"
              className="h-8 w-auto"
            />

            {/* DESKTOP NAV */}
            <div className="hidden sm:flex items-center gap-1">
              {navigation.map((item) =>
                item.children ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center gap-1 text-black/70 hover:bg-green-900 hover:text-white"
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      align="start"
                      className="bg-green-900 text-white"
                    >
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link
                            href={child.href}
                            className="cursor-pointer rounded-md px-2 py-1 hover:bg-green-800"
                          >
                            {child.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-black/70 hover:bg-green-900 hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* AUTH DESKTOP */}
          {!auth.user && (
            <div className="hidden sm:flex gap-2">
              <Link
                href={login()}
                className="rounded-lg border border-green-900 px-4 py-1 text-green-900 hover:bg-green-900 hover:text-white transition"
              >
                Log in
              </Link>

              {canRegister && (
                <Link
                  href={register()}
                  className="rounded-lg border border-green-900 px-4 py-1 text-green-900 hover:bg-green-900 hover:text-white transition"
                >
                  Register
                </Link>
              )}
            </div>
          )}

          {/* MOBILE TOGGLE */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <Collapsible open={mobileOpen}>
        <CollapsibleContent className="sm:hidden px-4 pb-4 space-y-2">

          {navigation.map((item) =>
            item.children ? (
              <Collapsible key={item.name}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 hover:bg-green-900 hover:text-white">
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>

                <CollapsibleContent className="ml-4 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm hover:bg-green-900 hover:text-white"
                    >
                      {child.name}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 hover:bg-green-900 hover:text-white"
              >
                {item.name}
              </Link>
            )
          )}

          {!auth.user && (
            <div className="pt-3 border-t space-y-2">
              <Link
                href={login()}
                className="block rounded-md border border-green-900 px-3 py-2 text-center text-green-900 hover:bg-green-900 hover:text-white"
              >
                Log in
              </Link>

              {canRegister && (
                <Link
                  href={register()}
                  className="block rounded-md border border-green-900 px-3 py-2 text-center text-green-900 hover:bg-green-900 hover:text-white"
                >
                  Register
                </Link>
              )}
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </nav>
  )
}
