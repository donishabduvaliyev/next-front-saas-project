import React from "react";
import AnimatedPage from "../components/ui/animatePages";
import { ArrowLeftIcon, ShoppingBagIcon, XMarkIcon } from "../components/ui/icons";
import { useCartContext } from "@/app/components/context/cartContext";

    const CartPage = () => {
const {cart, handleUpdateCart} = useCartContext();


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
                <a href="/all"  className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-700 transition-colors duration-300">
                    Return to Shop
                </a>
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
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                                <div className="flex-grow">
                                    <h3 className="font-serif text-lg text-gray-800">{item.name}</h3>
                                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center gap-3 border rounded-full px-2 py-1">
                                    <button onClick={() => handleUpdateCart(item.id, item.quantity - 1)} className="text-gray-500 hover:text-gray-800"><MinusIcon /></button>
                                    <span className="font-medium w-6 text-center">{item.quantity}</span>
                                    <button onClick={() => handleUpdateCart(item.id, item.quantity + 1)} className="text-gray-500 hover:text-gray-800"><PlusIcon /></button>
                                </div>
                                <p className="font-semibold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                                <button onClick={() => handleUpdateCart(item.id, 0)} className="text-gray-400 hover:text-red-500 transition-colors">
                                    <XMarkIcon className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <a href="/all" className="flex items-center gap-2 text-gray-600 mt-8 hover:text-gray-900 transition-colors">
                        <ArrowLeftIcon className="w-5 h-5" /> Continue Shopping
                    </a>
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

export default CartPage;