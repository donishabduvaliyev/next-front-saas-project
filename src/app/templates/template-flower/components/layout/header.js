import Link from "next/link";
import { ShoppingBagIcon } from "../ui/icons";

const Header = ({ onNavigate, cartCount , pageslug }) => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href={`/${pageslug}`} className="absolute inset-0">
                <h1 className="text-2xl font-serif text-gray-800 tracking-wider cursor-pointer group">
                    Fleur d'Élite
                    <span className="block h-[1px] bg-gray-600 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                </h1>
            </Link>
            <nav className="flex items-center space-x-8">
                <Link href={`/${pageslug}`}  >Home</Link>
                <Link href={`/${pageslug}/all`}  >Shop All</Link>
                <Link href={`/${pageslug}/cart`} className="relative">
                    <ShoppingBagIcon />
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                            {cartCount}
                        </span>
                    )}
                </Link>
            </nav>
        </div>
    </header>
);

export default Header;