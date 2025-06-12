import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Cerrar el menú si el usuario hace clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const navLinkClass = "relative text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-emerald-600 before:transition-all hover:before:w-full";

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-sm">
            <div className="container flex h-20 items-center justify-between">
                <Link to="/" className="flex items-center space-x-3 group">
                    <img 
                        src="/logo.ico" 
                        alt="Ecokausa Logo" 
                        className="h-12 w-14 group-hover:scale-105 transition-transform"
                    />
                    <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                        Ecokausa
                    </span>
                </Link>
                
                <nav className="hidden md:flex gap-8">
                    <Link to="#mission" className={navLinkClass}>Misión & Visión</Link>
                    <Link to="#marketplace" className={navLinkClass}>Productos</Link>
                    <Link to="#contact" className={navLinkClass}>Contacto</Link>
                </nav>
                
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {isMenuOpen && (
                <nav ref={menuRef} className="md:hidden border-t bg-white/95 backdrop-blur-md">
                    <div className="container py-4 space-y-4">
                        <Link 
                            to="#mission" 
                            className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" 
                            onClick={toggleMenu}
                        >
                            Misión & Visión
                        </Link>
                        <Link 
                            to="#marketplace" 
                            className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" 
                            onClick={toggleMenu}
                        >
                            Productos
                        </Link>
                        <Link 
                            to="#contact" 
                            className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors" 
                            onClick={toggleMenu}
                        >
                            Contacto
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
}
