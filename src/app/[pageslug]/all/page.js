import AllProductsPage from "@/app/templates/template-flower/allProduct/page";

export default async function ShopAll({ params }) {
const { pageslug } = await params;

  if (pageslug !== "gulshan") {
    return <h1>404 - This page doesn’t exist for {pageslug}</h1>;
  }

  return <AllProductsPage pageslug={pageslug} />;
}
