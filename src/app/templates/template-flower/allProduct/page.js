'use client';
import { useEffect, useMemo, useState } from "react";
import AnimatedPage from "../components/ui/animatePages";
import { SearchIcon } from "../components/ui/icons";
import Pagination from "../components/ui/pagination";
import ProductCard from "../components/ui/productCart";
import  { ITEMS_PER_PAGE, categories } from "@/app/templates/template-flower/data/data"

  const AllProductsPage = async ({ pageslug }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);

    const res = await fetch(`${process.env.API_URL}/shops/${pageslug}/products`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    const products = await res.json();



    const filteredProducts = useMemo(() => {
        return products
            .filter(p => activeCategory === 'All' || p.category === activeCategory)
            .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [searchTerm, activeCategory]);

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    useEffect(() => {
        setCurrentPage(1);
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
                            className={`px-5 py-2 text-sm rounded-full transition-all duration-300 ${activeCategory === category
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
                        <ProductCard key={product.id} product={product} />
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

export default AllProductsPage;