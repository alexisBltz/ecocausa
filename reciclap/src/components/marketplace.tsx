import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
    {
        id: 1,
        name: "Producto Eco",
        description: "Producto de ejemplo hecho con materiales reciclados",
        price: "S/. 15.00",
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        id: 2,
        name: "Artículo Sostenible",
        description: "Artículo elaborado con residuos reutilizados",
        price: "S/. 25.00",
        image: "/placeholder.svg?height=200&width=200"
    }
]

export function Marketplace() {
    return (
        <section id="marketplace" className="py-24 bg-emerald-50">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Productos Reciclados</h2>
                    <p className="text-gray-600">Prototipo de marketplace sostenible</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
                    {products.map((product) => (
                        <Card key={product.id} className="overflow-hidden">
                            <CardHeader>
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
                                    Ver más
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
