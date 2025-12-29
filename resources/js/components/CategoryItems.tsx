import { ArrowUpRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"

type CategoryItemProps = {
  title: string
  href?: string
}

export function CategoryItem({ title, href = "#" }: CategoryItemProps) {
  return (
    <a
      href={href}
      className="
        group block select-none
        rounded-lg
        transition-colors
        hover:bg-green-900/10
        active:bg-green-900/20
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-green-700
      "
    >
      <div className="flex items-center justify-between py-6">
        <h2 className="text-2xl lg:text-4xl font-bold">{title}</h2>

        <ArrowUpRight
          className="
            h-6 w-6 lg:h-9 lg:w-9
            transition-transform duration-200
            motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1
            active:-translate-y-1 active:translate-x-1
          "
        />
      </div>

      <Separator className="mb-4 lg:mb-6" />
    </a>
  )
}
