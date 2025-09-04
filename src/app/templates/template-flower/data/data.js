export const products = [
    { id: 1, name: 'Ethereal White', price: 250, category: 'Bouquets', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+1' },
    { id: 2, name: 'Velvet Rouge', price: 280, category: 'Bouquets', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+2' },
    { id: 3, name: 'Golden Hour', price: 320, category: 'Vases', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+3' },
    { id: 4, name: 'Pastel Dream', price: 265, category: 'Arrangements', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+4' },
    { id: 5, name: 'Azure Whispers', price: 350, category: 'Vases', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+5' },
    { id: 6, name: 'Crimson Tide', price: 295, category: 'Bouquets', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+6' },
    { id: 7, name: 'Ivory Elegance', price: 450, category: 'Centerpieces', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+7' },
    { id: 8, name: 'Sun-kissed Peony', price: 275, category: 'Bouquets', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+8' },
    { id: 9, name: 'Lilac Haze', price: 310, category: 'Arrangements', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+9' },
    { id: 10, name: 'Marble Vase', price: 380, category: 'Vases', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+10' },
    { id: 11, name: 'Orchid Cascade', price: 520, category: 'Centerpieces', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+11' },
    { id: 12, name: 'Midnight Bloom', price: 330, category: 'Arrangements', image: 'https://placehold.co/600x800/f0f2f5/a89a8d?text=Fleur+12' },
];
 export const categories = ['All', ...new Set(products.map(p => p.category))];
 export const ITEMS_PER_PAGE = 6;