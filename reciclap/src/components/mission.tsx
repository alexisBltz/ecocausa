import { Target, Eye } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Mission() {
    return (
        <section id="mission" className="py-32 bg-gradient-to-b from-white to-emerald-50">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Misión y Visión</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Construimos un futuro más sostenible a través de la innovación y el compromiso con el medio ambiente
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-emerald-50 to-white group">
                        <CardHeader className="pb-4">
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <div className="p-3 rounded-full bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
                                    <Target className="h-6 w-6 text-emerald-600" />
                                </div>
                                Misión
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Facilitar la gestión sostenible de residuos reciclables, promoviendo la formalización de recicladores,
                                fomentando la economía circular y generando impacto positivo en comunidades, empresas y el medio ambiente.
                            </p>
                        </CardContent>
                    </Card>
                    
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-white group">
                        <CardHeader className="pb-4">
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <div className="p-3 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                                    <Eye className="h-6 w-6 text-green-600" />
                                </div>
                                Visión
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Ser la plataforma líder en la gestión de residuos reciclables en América Latina,
                                generando un cambio significativo hacia un futuro sostenible, inclusivo y responsable.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

