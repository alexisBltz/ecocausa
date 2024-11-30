import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t bg-emerald-50">
            <div className="container py-12">
                <div className="grid gap-8 lg:grid-cols-3">
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Reciclap</h3>
                        <p className="text-sm text-gray-600">
                            Transformando el futuro a través del reciclaje y la economía circular.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Enlaces rápidos</h3>
                        <nav className="flex flex-col gap-2">
                            <Link to="#mission" className="text-sm text-gray-600 hover:text-emerald-600">
                                Misión y Visión
                            </Link>
                            <Link to="#marketplace" className="text-sm text-gray-600 hover:text-emerald-600">
                                Productos Reciclados
                            </Link>
                            <Link to="#contact" className="text-sm text-gray-600 hover:text-emerald-600">
                                Contacto
                            </Link>
                        </nav>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Síguenos</h3>
                        <div className="flex gap-4">
                            <Link to="#" className="text-gray-600 hover:text-emerald-600">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link to="#" className="text-gray-600 hover:text-emerald-600">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link to="#" className="text-gray-600 hover:text-emerald-600">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link to="#" className="text-gray-600 hover:text-emerald-600">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} Reciclap. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
