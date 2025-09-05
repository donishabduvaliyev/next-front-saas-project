import { notFound } from "next/navigation";
import TemplateFlowerLayout from "../templates/template-flower/layout";

const shops = [
    { slug: "Beautiy-corean", name: "Beauty korean", template: "template-cosmetics" },
    { slug: "gulshan", name: "Gulshan", template: "template-flower" },
]

export default async function ShopLayout({ children , params }) {
const { pageslug } =  await params;

  const shop = shops.find(shop => shop.slug === pageslug);
      if (!shop) return notFound();
  

  switch (shop.template) {
    case "template-flower":
      return <TemplateFlowerLayout pageslug={pageslug} >{children}</TemplateFlowerLayout>;
    case "clothing":
      return <ClothingLayout shop={shop} >{children}</ClothingLayout>;
    case "beauty":
      return <BeautyLayout shop={shop}>{children}</BeautyLayout>;
    default:
      return (
        <div>
          <h1>{shop.name}</h1>
          {children}
        </div>
      );
  }
}