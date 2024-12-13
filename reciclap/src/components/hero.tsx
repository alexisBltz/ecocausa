export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-300 py-24">
            <div className="container relative z-10 mx-auto px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Transformando residuos en oportunidades
                    </h1>
                    <p className="mb-8 text-lg text-gray-600 sm:text-xl">
                        EcoKausa es una plataforma innovadora que conecta ciudadanos, recicladores, centros de acopio y empresas para
                        facilitar la gestión de residuos reciclables. Nuestra misión es transformar el reciclaje en Perú mediante la formalización,
                        la sostenibilidad y el fomento de la economía circular.
                    </p>

                </div>
            </div>
            <div className="absolute inset-0 bg-[url('/eco-pattern.svg')] opacity-5" />
        </section>
    )
}