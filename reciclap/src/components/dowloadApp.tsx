import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Smartphone, Star } from "lucide-react";

export function AppDownload() {
    return (
        <section className="bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 py-32 text-white relative overflow-hidden">
            <div className="container relative z-10">
                <div className="grid gap-16 lg:grid-cols-2 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-6 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
                            <Smartphone className="mr-2 h-4 w-4" />
                            Disponible para Android
                        </div>
                        
                        <h2 className="text-5xl font-extrabold mb-6 leading-tight">
                            Lleva el reciclaje en tu bolsillo
                        </h2>
                        
                        <p className="text-emerald-100 text-xl leading-relaxed mb-8">
                            Descarga nuestra app móvil y accede a herramientas innovadoras para reciclar mejor,
                            encuentra puntos de reciclaje cercanos y gana recompensas por tus esfuerzos ecológicos.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                                    <Star className="h-4 w-4" />
                                </div>
                                <span>Encuentra puntos de reciclaje cercanos</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                                    <Star className="h-4 w-4" />
                                </div>
                                <span>Gana puntos por cada actividad de reciclaje</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                                    <Star className="h-4 w-4" />
                                </div>
                                <span>Conecta con otros recicladores</span>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://drive.google.com/uc?id=1wvGO-VmJsa6_zUPnWn4zgDw2gZp1woe5&export=download"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    size="lg"
                                    className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold group"
                                >
                                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                                    Descargar para Android
                                </Button>
                            </a>
                        </div>

                        <div className="mt-8 flex items-center gap-4 text-emerald-100">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-8 w-8 rounded-full bg-white/20 border-2 border-white/20" />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative h-[500px] w-full flex justify-center"
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative">
                            <img
                                src="/videodowloadapp.gif"
                                alt="Reciclaje App Demo"
                                className="object-contain rounded-3xl shadow-2xl border-4 border-white/20"
                            />
                            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-white/10 blur-xl" />
                            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-white/10 blur-xl" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decoraciones de fondo */}
            <div className="absolute top-10 right-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute top-1/2 left-1/4 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
        </section>
    );
}
