import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-16 items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <Leaf className="h-6 w-6 text-emerald-600" />
                    <span className="text-xl font-bold">Reciclap</span>
                </Link>
                <nav className="flex gap-6">
                    <Link to="#mission" className="text-sm font-medium hover:text-emerald-600">
                        Misión
                    </Link>
                    <Link to="#marketplace" className="text-sm font-medium hover:text-emerald-600">
                        Productos
                    </Link>
                    <Link to="#contact" className="text-sm font-medium hover:text-emerald-600">
                        Contacto
                    </Link>
                </nav>
            </div>
        </header>
    );
}
