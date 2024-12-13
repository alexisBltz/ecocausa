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

    const navLinkClass = "text-sm font-medium hover:text-emerald-600";

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-16 items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <img src="/logo.ico" alt="Ecokausa Logo" className="h-20 w-24"/>
                    <span className="text-xl font-bold">Ecokausa</span>
                </Link>
                <nav className="hidden md:flex gap-6">
                    <Link to="#mission" className={navLinkClass}>Misión</Link>
                    <Link to="#marketplace" className={navLinkClass}>Vision</Link>
                    <Link to="#contact" className={navLinkClass}>Contactanos</Link>
                </nav>
                <button
                    className="md:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {isMenuOpen && (
                <nav ref={menuRef} className="md:hidden flex flex-col items-center py-4 bg-white border-t">
                    <Link to="#mission" className={navLinkClass} onClick={toggleMenu}>Misión</Link>
                    <Link to="#marketplace" className={navLinkClass} onClick={toggleMenu}>Productos</Link>
                    <Link to="#contact" className={navLinkClass} onClick={toggleMenu}>Contacto</Link>
                </nav>
            )}
        </header>
    );
}
