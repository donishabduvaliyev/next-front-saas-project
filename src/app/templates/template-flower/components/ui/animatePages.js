import "@/app/templates/template-flower/template-css.css"



const AnimatedPage = ({ children, className = "" }) => (
    <div className={`animate-fadeIn ${className}`}>
        {children}
    </div>
);
export default AnimatedPage;