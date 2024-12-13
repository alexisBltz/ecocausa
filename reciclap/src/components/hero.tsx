import { Button } from "@/components/ui/button"
import { Recycle } from 'lucide-react'

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-300 py-24">
            <div className="container relative z-10 mx-auto px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Transformando residuos en oportunidades
                    </h1>
                    <p className="mb-8 text-lg text-gray-600 sm:text-xl">
                        En Reciclap, convertimos los desafíos ambientales en soluciones sostenibles.
                        Únete a nosotros en el camino hacia un futuro más verde.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                            Conoce nuestros productos
                        </Button>
                        <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                            <Recycle className="mr-2 h-4 w-4" />
                            Aprende a reciclar
                        </Button>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 bg-[url('/eco-pattern.svg')] opacity-5" />
        </section>
    )
}