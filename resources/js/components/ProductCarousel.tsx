import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
}from "@/components/ui/carousel"

import { usePage } from '@inertiajs/react'
type Product = {
  id: number
  name: string
  image: string
  price: number
  created_at: string
}

export default function ProductCarousel() {
  const { newProducts } = usePage().props as {
    newProducts: Product[]
  }

  if (newProducts.length === 0) return null


  return (
    <Carousel className="w-full">
      <CarouselContent>
        {newProducts.map((product) => (
          <CarouselItem
            key={product.id}
            className="basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <div className="group text-center">
              {/* IMAGE */}
              <div className="relative mb-4 aspect-3/4 overflow-hidden">
                <img
                  src={`/storage/${product.image}`}
                  alt={product.name}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* NAME */}
              <p className="text-sm font-medium leading-snug line-clamp-2">
                {product.name}
              </p>

              {/* PRICE */}
              <div className="mt-1 flex items-center justify-center gap-2">
                <span className="text-sm font-semibold">
                  Rp {product.price.toLocaleString("id-ID")}
                </span>

                {/* {product.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through">
                    Rp {product.originalPrice.toLocaleString("id-ID")}
                  </span>
                )} */}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
