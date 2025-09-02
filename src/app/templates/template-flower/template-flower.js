export default function FlowerTemplate({shop}) {








    return (

        <div>
            <h1>Flower Template for {shop.name}</h1>
            <p>This is a template for displaying jewelry items.</p>
        </div>
    );
}



import React from 'react';

// --- ICONS ---
// Using inline SVGs for icons to keep everything in one file.
const SearchIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
);

const ShoppingBagIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
);

const ArrowLeftIcon = ({ className = "w-6 h-6" }) => (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
);

const PlusIcon = ({ className = "w-4 h-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

const MinusIcon = ({ className = "w-4 h-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg>
);

const XMarkIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


// --- MOCK PRODUCT DATA ---
const products = [
    { id: 1, name: 'Ethereal White', price: 250, category: 'Bouquets', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+1' },
    { id: 2, name: 'Velvet Rouge', price: 280, category: 'Bouquets', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+2' },
    { id: 3, name: 'Golden Hour', price: 320, category: 'Vases', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+3' },
    { id: 4, name: 'Pastel Dream', price: 265, category: 'Arrangements', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+4' },
    { id: 5, name: 'Azure Whispers', price: 350, category: 'Vases', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+5' },
    { id: 6, name: 'Crimson Tide', price: 295, category: 'Bouquets', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+6' },
    { id: 7, name: 'Ivory Elegance', price: 450, category: 'Centerpieces', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+7' },
    { id: 8, name: 'Sun-kissed Peony', price: 275, category: 'Bouquets', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+8' },
    { id: 9, name: 'Lilac Haze', price: 310, category: 'Arrangements', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+9' },
    { id: 10, name: 'Marble Vase', price: 380, category: 'Vases', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+10' },
    { id: 11, name: 'Orchid Cascade', price: 520, category: 'Centerpieces', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+11' },
    { id: 12, name: 'Midnight Bloom', price: 330, category: 'Arrangements', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+12' },
];
const categories = ['All', ...new Set(products.map(p => p.category))];
const ITEMS_PER_PAGE = 6;

// --- UTILITY COMPONENTS ---
const AnimatedPage = ({ children, className = "" }) => (
    <div className={`animate-fadeIn ${className}`}>
        {children}
    </div>
);

// --- HEADER & NAVIGATION ---
const Header = ({ onNavigate, cartCount }) => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 
                onClick={() => onNavigate('home')} 
                className="text-2xl font-serif text-gray-800 tracking-wider cursor-pointer group"
            >
                Fleur d'Élite
                <span className="block h-[1px] bg-gray-600 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
            </h1>
            <nav className="flex items-center space-x-8">
                <a onClick={() => onNavigate('home')} className="text-gray-600 hover:text-gray-900 transition duration-300 cursor-pointer">Home</a>
                <a onClick={() => onNavigate('all')} className="text-gray-600 hover:text-gray-900 transition duration-300 cursor-pointer">Shop All</a>
                <button onClick={() => onNavigate('cart')} className="relative text-gray-600 hover:text-gray-900 transition duration-300">
                    <ShoppingBagIcon />
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                            {cartCount}
                        </span>
                    )}
                </button>
            </nav>
        </div>
    </header>
);

// --- HOME PAGE COMPONENTS ---
const HomePage = ({ onNavigate }) => (
    <AnimatedPage>
        <div className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080/e8e2dd/7a6c5d?text=Elegant+Florals')" }}>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative text-center text-white z-10 p-8">
                <h2 className="text-5xl md:text-7xl font-serif tracking-widest mb-4 animate-slideInUp">Artistry in Every Petal</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-slideInUp" style={{animationDelay: '0.2s'}}>
                    Experience the epitome of floral luxury. Curated collections for the moments that matter most.
                </p>
                <button 
                    onClick={() => onNavigate('all')} 
                    className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 animate-slideInUp"
                    style={{animationDelay: '0.4s'}}
                >
                    Discover The Collection
                </button>
            </div>
        </div>
    </AnimatedPage>
);


// --- "SHOP ALL" PAGE COMPONENTS ---
const ProductCard = ({ product, onAddToCart }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div 
            className="group relative overflow-hidden rounded-lg shadow-sm bg-white cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={product.image} alt={product.name} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="p-4 absolute bottom-0 left-0 right-0 text-white">
                <h3 className="text-lg font-serif">{product.name}</h3>
                <p className="text-md opacity-80">${product.price}</p>
            </div>
            <button 
                onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                className={`absolute bottom-4 right-4 bg-white text-gray-800 rounded-full p-3 transform transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
                <PlusIcon className="w-5 h-5"/>
            </button>
        </div>
    );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className="flex justify-center items-center space-x-2 mt-12">
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                        currentPage === page 
                        ? 'bg-gray-800 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                    {page}
                </button>
            ))}
        </nav>
    );
};

const AllProductsPage = ({ onAddToCart }) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [activeCategory, setActiveCategory] = React.useState('All');
    const [currentPage, setCurrentPage] = React.useState(1);

    const filteredProducts = React.useMemo(() => {
        return products
            .filter(p => activeCategory === 'All' || p.category === activeCategory)
            .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [searchTerm, activeCategory]);
    
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    React.useEffect(() => {
        setCurrentPage(1); // Reset to first page on filter change
    }, [searchTerm, activeCategory]);

    return (
        <AnimatedPage className="container mx-auto px-6 py-24 min-h-screen">
            <div className="text-center pt-16 mb-12">
                <h2 className="text-4xl font-serif text-gray-800">Our Collection</h2>
                <p className="text-gray-500 mt-2">Curated with passion, designed for elegance.</p>
            </div>
            
            <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 text-sm rounded-full transition-all duration-300 ${
                                activeCategory === category 
                                ? 'bg-gray-800 text-white shadow-md' 
                                : 'bg-white text-gray-600 hover:bg-gray-100 border'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                
                {/* Search Input */}
                <div className="relative w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="Search for flowers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-64 pl-10 pr-4 py-2 border rounded-full focus:ring-2 focus:ring-gray-400 focus:outline-none transition"
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <SearchIcon className="w-5 h-5" />
                    </div>
                </div>
            </div>

            {paginatedProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paginatedProducts.map(product => (
                        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 text-gray-500">
                    <h3 className="text-2xl font-serif">No Creations Found</h3>
                    <p className="mt-2">Try adjusting your search or category filters.</p>
                </div>
            )}
            
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </AnimatedPage>
    );
};


// --- CART PAGE COMPONENTS ---
const CartPage = ({ cart, onUpdateCart, onNavigate }) => {
    const subtotal = React.useMemo(() => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }, [cart]);
    
    const shipping = 25.00;
    const total = subtotal + shipping;

    if (cart.length === 0) {
        return (
            <AnimatedPage className="container mx-auto px-6 py-32 min-h-screen text-center">
                <ShoppingBagIcon className="w-24 h-24 mx-auto text-gray-300 mb-6" />
                <h2 className="text-3xl font-serif text-gray-800 mb-2">Your Bag is Empty</h2>
                <p className="text-gray-500 mb-8">Looks like you haven't added any beautiful arrangements yet.</p>
                <button onClick={() => onNavigate('all')} className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-700 transition-colors duration-300">
                    Return to Shop
                </button>
            </AnimatedPage>
        );
    }

    return (
        <AnimatedPage className="container mx-auto px-6 py-32 min-h-screen">
             <div className="text-center pt-8 mb-12">
                <h2 className="text-4xl font-serif text-gray-800">Your Bag</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <div className="space-y-6">
                        {cart.map(item => (
                            <div key={item.id} className="flex items-center gap-6 bg-white p-4 rounded-lg shadow-sm">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md"/>
                                <div className="flex-grow">
                                    <h3 className="font-serif text-lg text-gray-800">{item.name}</h3>
                                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center gap-3 border rounded-full px-2 py-1">
                                    <button onClick={() => onUpdateCart(item.id, item.quantity - 1)} className="text-gray-500 hover:text-gray-800"><MinusIcon /></button>
                                    <span className="font-medium w-6 text-center">{item.quantity}</span>
                                    <button onClick={() => onUpdateCart(item.id, item.quantity + 1)} className="text-gray-500 hover:text-gray-800"><PlusIcon /></button>
                                </div>
                                <p className="font-semibold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                                <button onClick={() => onUpdateCart(item.id, 0)} className="text-gray-400 hover:text-red-500 transition-colors">
                                    <XMarkIcon className="w-5 h-5"/>
                                </button>
                            </div>
                        ))}
                    </div>
                     <button onClick={() => onNavigate('all')} className="flex items-center gap-2 text-gray-600 mt-8 hover:text-gray-900 transition-colors">
                        <ArrowLeftIcon className="w-5 h-5" /> Continue Shopping
                    </button>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-fit">
                    <h3 className="text-2xl font-serif text-gray-800 mb-6 border-b pb-4">Order Summary</h3>
                    <div className="space-y-4 text-gray-600">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-gray-800 text-lg border-t pt-4 mt-4">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                    <button className="w-full mt-8 bg-gray-800 text-white font-semibold py-3 rounded-full hover:bg-gray-700 transition-colors duration-300">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </AnimatedPage>
    );
};

// --- MAIN APP COMPONENT ---
export default function App() {
    const [currentPage, setCurrentPage] = React.useState('home');
    const [cart, setCart] = React.useState([]);

    const handleNavigate = (page) => {
        window.scrollTo(0, 0);
        setCurrentPage(page);
    };

    const handleAddToCart = (productToAdd) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === productToAdd.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...productToAdd, quantity: 1 }];
        });
    };

    const handleUpdateCart = (productId, quantity) => {
        if (quantity <= 0) {
            setCart(prevCart => prevCart.filter(item => item.id !== productId));
        } else {
            setCart(prevCart =>
                prevCart.map(item =>
                    item.id === productId ? { ...item, quantity } : item
                )
            );
        }
    };
    
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onNavigate={handleNavigate} />;
            case 'all':
                return <AllProductsPage onAddToCart={handleAddToCart} />;
            case 'cart':
                return <CartPage cart={cart} onUpdateCart={handleUpdateCart} onNavigate={handleNavigate} />;
            default:
                return <HomePage onNavigate={handleNavigate} />;
        }
    };

    return (
        <div className="bg-gray-50 font-sans text-gray-700">
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Poppins:wght@300;400;500;600&display=swap');
                body {
                    font-family: 'Poppins', sans-serif;
                }
                h1, h2, h3, .font-serif {
                    font-family: 'Lora', serif;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.7s ease-in-out forwards;
                }
                 @keyframes slideInUp {
                    from { opacity: 0; transform: translateY(50px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-slideInUp {
                    animation: slideInUp 0.8s ease-out forwards;
                }
                `}
            </style>
            <Header onNavigate={handleNavigate} cartCount={cartCount} />
            <main>
                {renderPage()}
            </main>
            <footer className="bg-white border-t">
                <div className="container mx-auto px-6 py-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Fleur d'Élite. All Rights Reserved.</p>
                    <p className="text-sm mt-2">Crafting luxury floral arrangements since 2024.</p>
                </div>
            </footer>
        </div>
    );
}

