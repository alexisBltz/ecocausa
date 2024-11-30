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
                                Nuestra misión es liderar la transformación hacia una economía circular,
                                proporcionando soluciones innovadoras de reciclaje que beneficien tanto
                                al medio ambiente como a nuestra comunidad.
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
                                Aspiramos a ser referentes globales en sostenibilidad, creando un mundo
                                donde el reciclaje sea parte integral de la vida cotidiana y donde cada
                                residuo se convierta en una nueva oportunidad.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

