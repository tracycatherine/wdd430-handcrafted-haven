'use client';

import { useEffect, useState } from 'react';
import './shop.css';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string; // new property for image
};

// Add image URLs for each product (these can be placeholder images or URLs)
const mockProducts: Product[] = [
  { id: 1, name: 'Hand-stitched Leather Wallet', price: 115.24, image: 'https://images.unsplash.com/photo-1606813901963-5f1e37e7e9c7?auto=format&fit=crop&w=500&q=80' },
  { id: 2, name: 'Ceramic Coffee Mug', price: 48.98, image: 'https://images.unsplash.com/photo-1560464024-54f32f9e79f2?auto=format&fit=crop&w=500&q=80' },
  { id: 3, name: 'Woven Wall Hanging', price: 103.89, image: 'https://images.unsplash.com/photo-1616627984586-63e0f3b1f7b6?auto=format&fit=crop&w=500&q=80' },
  { id: 4, name: 'Silver Pendant Necklace', price: 72.21, image: 'https://images.unsplash.com/photo-1590080877476-2f7e60e31549?auto=format&fit=crop&w=500&q=80' },
  { id: 5, name: 'Knitted Scarf', price: 139.37, image: 'https://images.unsplash.com/photo-1602810310420-cd67681c431c?auto=format&fit=crop&w=500&q=80' },
  { id: 6, name: 'Wooden Serving Board', price: 63.77, image: 'https://images.unsplash.com/photo-1604152135912-04a0b3b2f3d2?auto=format&fit=crop&w=500&q=80' },
  { id: 7, name: 'Handmade Soap Set', price: 93.88, image: 'https://images.unsplash.com/photo-1617196033643-71d2f08d8da7?auto=format&fit=crop&w=500&q=80' },
  { id: 8, name: 'Terracotta Planter', price: 27.35, image: 'https://images.unsplash.com/photo-1616627398410-20e3e0e7f2cb?auto=format&fit=crop&w=500&q=80' },
  { id: 9, name: 'Embroidered Pillow', price: 55.24, image: 'https://images.unsplash.com/photo-1580657013890-bbb2c1d5c47c?auto=format&fit=crop&w=500&q=80' },
  { id: 10, name: 'Beaded Bracelet', price: 77.94, image: 'https://images.unsplash.com/photo-1616629137206-f02dbf450869?auto=format&fit=crop&w=500&q=80' },
  { id: 11, name: 'Macramé Plant Hanger', price: 121.37, image: 'https://images.unsplash.com/photo-1585487007982-17e74b8e576d?auto=format&fit=crop&w=500&q=80' },
  { id: 12, name: 'Custom Candle', price: 50.15, image: 'https://images.unsplash.com/photo-1580556840533-2c4c2764eea3?auto=format&fit=crop&w=500&q=80' },
  { id: 13, name: 'Artisan Earrings', price: 63.18, image: 'https://images.unsplash.com/photo-1616628690188-4e1d9f7a0d34?auto=format&fit=crop&w=500&q=80' },
  { id: 14, name: 'Hand-painted Vase', price: 38.18, image: 'https://images.unsplash.com/photo-1597444300022-8a15773d3e25?auto=format&fit=crop&w=500&q=80' },
  { id: 15, name: 'Leather Keychain', price: 113.12, image: 'https://images.unsplash.com/photo-1616628924461-0d982e64f1c4?auto=format&fit=crop&w=500&q=80' },
  { id: 16, name: 'Silk Bandana', price: 130.72, image: 'https://images.unsplash.com/photo-1600185360054-7e0d7c8b80cf?auto=format&fit=crop&w=500&q=80' },
  { id: 17, name: 'Crochet Coasters', price: 101.54, image: 'https://images.unsplash.com/photo-1616628756576-94b9b3d67f2d?auto=format&fit=crop&w=500&q=80' },
  { id: 18, name: 'Hand-blown Glass Ornament', price: 43.31, image: 'https://images.unsplash.com/photo-1616628867578-ef3f74603f3f?auto=format&fit=crop&w=500&q=80' },
  { id: 19, name: 'Pressed Flower Frame', price: 118.97, image: 'https://images.unsplash.com/photo-1616628902012-3b842deef4f7?auto=format&fit=crop&w=500&q=80' },
  { id: 20, name: 'Bamboo Utensil Set', price: 84.03, image: 'https://images.unsplash.com/photo-1616628939673-4f0c8e7c4f7f?auto=format&fit=crop&w=500&q=80' },
  { id: 21, name: 'Quilted Table Runner', price: 102.22, image: 'https://images.unsplash.com/photo-1616628973452-4a0a8b2f5e7b?auto=format&fit=crop&w=500&q=80' },
  { id: 22, name: 'Scented Linen Spray', price: 69.66, image: 'https://images.unsplash.com/photo-1616629004762-2c1e8f2f9e2d?auto=format&fit=crop&w=500&q=80' },
  { id: 23, name: 'Minimalist Tote Bag', price: 58.61, image: 'https://images.unsplash.com/photo-1616629042386-63e4b2e3c5f7?auto=format&fit=crop&w=500&q=80' },
  { id: 24, name: 'Vintage-style Poster', price: 47.18, image: 'https://images.unsplash.com/photo-1616629079563-2f8b8d4a2c4c?auto=format&fit=crop&w=500&q=80' },
];


export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find((item: any) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  const viewDetails = (product: Product) => {
    alert(`Product: ${product.name}\nPrice: $${product.price.toFixed(2)}`);
  };

  return (
    <div className="shop-container">
      <h1>Shop</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button className="add" onClick={() => addToCart(product)}>Add to cart</button>
            <button className="details" onClick={() => viewDetails(product)}>Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
