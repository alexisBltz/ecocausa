import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function AppDownload() {
    return (
        <section className="bg-gradient-to-t from-white to-green-700 py-24 text-white">
            <div className="container">
                <div className="grid gap-12 md:grid-cols-2 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-4xl font-extrabold mb-6">
                            Descarga nuestra app
                        </h2>
                        <p className="text-emerald-100 text-lg leading-relaxed mb-8">
                            Lleva el poder del reciclaje en tu bolsillo. Nuestra app te ayuda a reciclar mejor,
                            encontrar puntos de reciclaje cercanos y ganar recompensas por tus esfuerzos ecológicos.
                        </p>
                        <div className="flex justify-center flex-wrap gap-4">
                            <a
                                href="https://drive.google.com/uc?id=1wvGO-VmJsa6_zUPnWn4zgDw2gZp1woe5&export=download"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="outline"
                                    className="bg-white text-emerald-700 hover:bg-emerald-100 flex items-center px-6 py-3"
                                >
                                    <span className="font-semibold">Para android</span>
                                </Button>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative h-[400px] w-full flex justify-center"
                        initial={{opacity: 0, scale: 0.9}} // Comienza con opacidad 0 y escala reducida
                        animate={{opacity: 1, scale: 1}}   // Termina con opacidad 1 y escala normal
                        transition={{duration: 1}}           // Duración de la animación
                    >
                    <img
                            src="/videodowloadapp.gif"
                            alt="Recicla :D"
                            className="object-contain rounded-xl shadow-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-700 to-transparent opacity-50 pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
