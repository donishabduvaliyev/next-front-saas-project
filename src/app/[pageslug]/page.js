import { notFound } from "next/navigation";
import CosmeticsTemplate from "../templates/template-cosmetics";
import FlowerTemplate from "../templates/template-flower/template-flower";
import OutfitTemplate from "../templates/template-outfit";
import Outfit2Template from "../templates/template-outfit2";
import WatchTemplate from "../templates/template-watch";



const shops = [
  { slug: "Beautiy-corean", name: "Beauty korean", template: "template-cosmetics" },
  { slug: "Gulshan", name: "Gulshan", template: "template-flower" },
]


export default function Page({ params }) {

    const shop =shops.find(shop =>shop.slug === params.pageslug);
if (!shop) return notFound();

switch (shop.template) {

    case "template-cosmetics":
        return <CosmeticsTemplate shop={shop} />;
    case "template-flower":
        return <FlowerTemplate shop={shop} />;
    case "template-outfit":
        return <OutfitTemplate shop={shop} />;
    case "template-outfit2":
        return <Outfit2Template shop={shop} />;
    case "template-watch":
        return <WatchTemplate shop={shop} />;
    default:
        return notFound();
}

}