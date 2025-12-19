import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

type Product = {
  id: number
  name: string
  image: string
  price: number
  originalPrice?: number
  isNew?: boolean
}

export default function ProductCarousel() {
  // ✅ DATA SEMENTARA (DUMMY)
  const products: Product[] = [
    {
      id: 1,
      name: "Arsenal Home 25/26",
      image: "/img/arsenal.jer.jpg",
      price: 2500000,
      originalPrice: 3000000,
      isNew: true,
    },
    {
      id: 2,
      name: "Real Madrid Away",
      image: "/img/arsenal.jer.jpg",
      price: 2300000,
    },
    {
      id: 3,
      name: "Barcelona Retro",
      image: "/img/arsenal.jer.jpg",
      price: 2700000,
      isNew: true,
    },
    {
      id: 4,
      name: "Manchester United Classic",
      image: "/img/arsenal.jer.jpg",
      price: 2400000,
    },
  ]

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="md:basis-1/2 lg:basis-1/4"
          >
            <Card className="overflow-hidden rounded-2xl group py-0 gap-1">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {product.isNew && (
                  <span className="absolute top-3 left-3 rounded-full bg-green-900 px-3 py-1 text-xs text-white">
                    NEW
                  </span>
                )}
              </div>

              <CardContent className="p-4 space-y-1">
                <h3 className="font-medium line-clamp-1">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2">
                  <p className="font-semibold text-green-900">
                    Rp {product.price.toLocaleString("id-ID")}
                  </p>

                  {product.originalPrice && (
                    <p className="text-sm line-through text-muted-foreground">
                      Rp {product.originalPrice.toLocaleString("id-ID")}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* NAVIGATION */}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
