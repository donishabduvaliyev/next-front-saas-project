"use client";



import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/templates/template-flower/components/layout/header";
// Import your pages/components
import HomePage from "@/app/templates/template-flower/home/page";
import { useI18n } from "@/app/components/context/i18context";
import { useCartContext } from "@/app/components/context/cartContext";


export default function FlowerTemplate({ pageslug }) {
    const router = useRouter();
     const { t, lang, changeLang } = useI18n()
     const {cart } = useCartContext();
     

 

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Render children based on Next.js routing (use layout.js or page.js for actual routing)
    return (
        <div className="bg-gray-50 font-sans text-gray-700">
            <Header  cartCount={cartCount} pageslug={pageslug} />
            <main>


               <HomePage  pageslug={pageslug}   />
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

