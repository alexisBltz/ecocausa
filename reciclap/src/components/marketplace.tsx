import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
    {
        id: 1,
        name: "Llavero Eco",
        description: "Llavero hecho 100% de plástico reciclado",
        price: "S/. 9.99",
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        id: 2,
        name: "Collar para Mascotas",
        description: "Collar sostenible de materiales reciclados",
        price: "S/. 14.99",
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        id: 3,
        name: "Maceta Biodegradable",
        description: "Maceta elaborada con residuos orgánicos",
        price: "S/. 19.99",
        image: "/placeholder.svg?height=200&width=200"
    }
]

export function Marketplace() {
    return (
        <section id="marketplace" className="py-24 bg-emerald-50">
            <div className="container">
                <h2 className="mb-12 text-center text-3xl font-bold">Productos Reciclados</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <Card key={product.id} className="overflow-hidden">
                            <CardHeader>
                                {/* Usamos <img /> en lugar de <Image /> */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    width={200}
                                    height={200}
                                    className="mx-auto rounded-lg object-cover"
                                />
                            </CardHeader>
                            <CardContent>
                                <CardTitle className="mb-2">{product.name}</CardTitle>
                                <p className="text-sm text-gray-600">{product.description}</p>
                            </CardContent>
                            <CardFooter className="flex items-center justify-between">
                                <span className="text-lg font-bold text-emerald-600">{product.price}</span>
                                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                                    Añadir al carrito
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
