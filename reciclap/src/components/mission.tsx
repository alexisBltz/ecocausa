import { LeafyGreen, Sprout } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Mission() {
    return (
        <section id="mission" className="py-24 bg-white">
            <div className="container">
                <div className="grid gap-12 md:grid-cols-2">
                    <Card className="border-2 border-emerald-100">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <LeafyGreen className="h-5 w-5 text-emerald-600" />
                                Misión
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Facilitar la gestión sostenible de residuos reciclables, promoviendo la formalización de recicladores,
                                fomentando la economía circular y generando impacto positivo en comunidades, empresas y el medio ambiente.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-2 border-emerald-100">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Sprout className="h-5 w-5 text-emerald-600" />
                                Visión
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
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

