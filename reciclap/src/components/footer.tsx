import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white">
            <div className="container py-16">
                <div className="grid gap-12 lg:grid-cols-4">
                    {/* Logo y descripción */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <img src="/logo.ico" alt="Ecokausa Logo" className="h-12 w-14" />
                            <span className="text-2xl font-bold">EcoKausa</span>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                            Transformando el futuro a través del reciclaje y la economía circular.
                            Conectamos personas, empresas y comunidades para crear un mundo más sostenible.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-300">
                                <Mail className="h-5 w-5 text-emerald-400" />
                                <span>contacto@ecokausa.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Phone className="h-5 w-5 text-emerald-400" />
                                <span>+51 936 224 203</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <MapPin className="h-5 w-5 text-emerald-400" />
                                <span>Lima, Perú</span>
                            </div>
                        </div>
                    </div>

                    {/* Enlaces rápidos */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-white">Enlaces Rápidos</h3>
                        <nav className="flex flex-col gap-3">
                            <Link
                                to="#mission"
                                className="text-gray-300 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-200"
                            >
                                Misión y Visión
                            </Link>
                            <Link
                                to="#marketplace"
                                className="text-gray-300 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-200"
                            >
                                Productos Reciclados
                            </Link>
                            <Link
                                to="#contact"
                                className="text-gray-300 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-200"
                            >
                                Contacto
                            </Link>
                            <Link
                                to="#"
                                className="text-gray-300 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-200"
                            >
                                Términos y Condiciones
                            </Link>
                        </nav>
                    </div>

                    {/* Redes sociales */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-white">Síguenos</h3>
                        <div className="flex gap-4 mb-6">
                            <Link
                                to="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-gray-300 hover:bg-emerald-600 hover:text-white transition-all transform hover:scale-110"
                            >
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link
                                to="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-gray-300 hover:bg-emerald-600 hover:text-white transition-all transform hover:scale-110"
                            >
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link
                                to="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-gray-300 hover:bg-emerald-600 hover:text-white transition-all transform hover:scale-110"
                            >
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link
                                to="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-gray-300 hover:bg-emerald-600 hover:text-white transition-all transform hover:scale-110"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Únete a nuestra comunidad y mantente al día con las últimas noticias sobre sostenibilidad.
                        </p>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} EcoKausa. Todos los derechos reservados.
                        </p>
                        <div className="flex gap-6 text-sm text-gray-400">
                            <Link to="#" className="hover:text-emerald-400 transition-colors">
                                Política de Privacidad
                            </Link>
                            <Link to="#" className="hover:text-emerald-400 transition-colors">
                                Términos de Uso
                            </Link>
                            <Link to="#" className="hover:text-emerald-400 transition-colors">
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
