import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Recycle, Users } from "lucide-react"

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-100 py-32">
            <div className="container relative z-10 mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-6 inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                        <Leaf className="mr-2 h-4 w-4" />
                        Prototipo de plataforma de reciclaje
                    </div>
                    
                    <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
                        Transformando{" "}
                        <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                            residuos
                        </span>{" "}
                        en oportunidades
                    </h1>
                    
                    <p className="mb-12 text-xl text-gray-600 sm:text-2xl leading-relaxed max-w-3xl mx-auto">
                        EcoKausa conecta ciudadanos, recicladores y empresas para crear un futuro más sostenible. 
                        Transformamos el reciclaje en Perú a través de la innovación y la economía circular.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg group">
                            Conocer más
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg">
                            Ver prototipo
                        </Button>
                    </div>

                    {/* Objetivos del prototipo */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="text-center">
                            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                                <Recycle className="h-6 w-6 text-emerald-600" />
                            </div>
                            <p className="text-3xl font-bold text-gray-900">Demo</p>
                            <p className="text-gray-600">Marketplace sostenible</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                                <Users className="h-6 w-6 text-emerald-600" />
                            </div>
                            <p className="text-3xl font-bold text-gray-900">Concepto</p>
                            <p className="text-gray-600">Economía circular</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                                <Leaf className="h-6 w-6 text-emerald-600" />
                            </div>
                            <p className="text-3xl font-bold text-gray-900">Futuro</p>
                            <p className="text-gray-600">Sostenible</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Decoraciones de fondo */}
            <div className="absolute top-20 left-10 h-20 w-20 rounded-full bg-emerald-200 opacity-50 blur-xl"></div>
            <div className="absolute bottom-20 right-10 h-32 w-32 rounded-full bg-green-200 opacity-50 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 h-40 w-40 rounded-full bg-emerald-100 opacity-30 blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </section>
    )
}