import AllProductsPage from "@/app/templates/template-flower/allProduct/flowershopAll";

export default function ShopAll({ params }) {
  if (params.pageslug !== "gulshan") {
    return <h1>404 - This page doesn’t exist for {params.pageslug}</h1>;
  }

  return <AllProductsPage />;
}
