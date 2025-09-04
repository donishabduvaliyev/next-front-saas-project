import { useCartContext } from "@/app/components/context/cartContext";
import { PlusIcon } from "./icons";

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const { handleAddToCart } = useCartContext();

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
                onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}
                className={`absolute bottom-4 right-4 bg-white text-gray-800 rounded-full p-3 transform transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
                <PlusIcon className="w-5 h-5" />
            </button>
        </div>
    );
};

export default ProductCard;
