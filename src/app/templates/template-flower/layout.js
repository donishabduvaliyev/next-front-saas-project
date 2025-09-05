import Header from "./components/layout/header";

export default function TemplateFlowerLayout({ children ,pageslug}) {
  return (
    <div className="bg-gray-50 font-sans text-gray-700 min-h-screen flex flex-col">

      <Header pageslug={pageslug} />
      <main className="flex-1">{children}</main>
      <footer className="bg-white border-t">
        <div className="container mx-auto px-6 py-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Fleur d'Élite. All Rights Reserved.</p>
          <p className="text-sm mt-2">Crafting luxury floral arrangements since 2024.</p>
        </div>
      </footer>
    </div>
  );
}