import React from 'react'

const Landing: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-green-600 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Reciclap</h1>
                    <div className="space-x-4">
                        <a href="#" className="hover:underline">Inicio</a>
                        <a href="#" className="hover:underline">Productos</a>
                        <a href="#" className="hover:underline">Contacto</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="bg-green-500 text-white py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">Bienvenido a Reciclap</h1>
                    <p className="text-xl mb-8">Transformando residuos en oportunidades</p>
                    <button className="bg-white text-green-500 px-6 py-2 rounded-full font-bold hover:bg-green-100">
                        Explora nuestros productos
                    </button>
                </div>
            </header>

            {/* Misión y Visión */}
            <section className="py-16 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Nuestra Misión y Visión</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Misión</h3>
                            <p>Transformar la manera en que la sociedad percibe y maneja los residuos, promoviendo la economía circular y el desarrollo sostenible.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Visión</h3>
                            <p>Ser líderes globales en la transformación de residuos en recursos valiosos, inspirando a comunidades y empresas a adoptar prácticas sostenibles.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marketplace */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Productos</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="bg-gray-300 h-40 mb-4 rounded"></div>
                                <h3 className="font-bold mb-2">Producto Reciclado {item}</h3>
                                <p className="text-gray-600 mb-4">Descripción breve del producto...</p>
                                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                                    Comprar
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formulario de Contacto */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-md">
                    <h2 className="text-3xl font-bold mb-8 text-center">Contáctanos</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-1">Nombre</label>
                            <input type="text" id="name" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1">Email</label>
                            <input type="email" id="email" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1">Mensaje</label>
                            <textarea id="message" rows={4} className="w-full p-2 border rounded"></textarea>
                        </div>
                        <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-full font-bold hover:bg-green-600 w-full">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-green-600 text-white py-8">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Reciclap. Todos los derechos reservados.</p>
                    <div className="mt-4 space-x-4">
                        <a href="#" className="hover:underline">Facebook</a>
                        <a href="#" className="hover:underline">Twitter</a>
                        <a href="#" className="hover:underline">Instagram</a>
                        <a href="#" className="hover:underline">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Landing