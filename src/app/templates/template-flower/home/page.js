import Link from "next/link";
import AnimatedPage from "../components/ui/animatePages";

const HomePage = ({ onNavigate , pageslug }) => (

    
    <AnimatedPage>
        <div className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080/e8e2dd/7a6c5d?text=Elegant+Florals')" }}>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative text-center text-white z-10 p-8">
                <h2 className="text-5xl md:text-7xl font-serif tracking-widest mb-4 animate-slideInUp">Artistry in Every Petal</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-slideInUp" style={{ animationDelay: '0.2s' }}>
                    Experience the epitome of floral luxury. Curated collections for the moments that matter most.
                </p>
                <Link
                    href={`/${pageslug}/all`}
                    className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 animate-slideInUp"
                    style={{ animationDelay: '0.4s' }}
                >
                    Discover The Collection
                </Link>
            </div>
        </div>
    </AnimatedPage> 
);
export default HomePage;
