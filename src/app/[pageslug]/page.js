import { notFound } from "next/navigation";
import CosmeticsTemplate from "@/app/templates/template-cosmetics/template-cosmetics";
import FlowerTemplate from "@/app/templates/template-flower/page";
import OutfitTemplate from "@/app/templates/template-outfit/template-outfit";
import Outfit2Template from "@/app/templates/template-outfit2/template-outfit2";
import WatchTemplate from "@/app/templates/template-watch/template-watch";



const shops = [
    { slug: "Beautiy-corean", name: "Beauty korean", template: "template-cosmetics" },
    { slug: "gulshan", name: "Gulshan", template: "template-flower" },
]


export default async function Page({ params }) {
    const { pageslug } =  await params;
    const shop = shops.find(shop => shop.slug === pageslug);
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