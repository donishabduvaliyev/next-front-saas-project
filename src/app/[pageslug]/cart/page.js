import CartPage from "@/app/templates/template-flower/cart/page";

export default function ShopCart({ params }) {
    const { pageslug } =   params;

  if (pageslug !== "gulshan") {
    return <h1>404 - This page doesn’t exist for {params.pageslug}</h1>;
  }

  return <CartPage pageslug={pageslug} />;
}
