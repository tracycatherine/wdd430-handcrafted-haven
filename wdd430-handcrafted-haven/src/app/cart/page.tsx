'use client';

import { useEffect, useState } from 'react';
import './cart.css';

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

// Example mock cart (can be empty initially)
const mockCart: Product[] = [
  { id: 1, name: 'Hand-stitched Leather Wallet', price: 115.24, quantity: 1, image: 'https://images.unsplash.com/photo-1606813901963-5f1e37e7e9c7?auto=format&fit=crop&w=500&q=80' },
];

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    } else {
      setCart(mockCart);
      localStorage.setItem('cart', JSON.stringify(mockCart));
    }
  }, []);

  const updateCart = (updatedCart: Product[]) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const increase = (id: number) => {
    updateCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrease = (id: number) => {
    updateCart(cart.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (id: number) => {
    updateCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <a href="/shop">Go shopping</a></p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div className="cart-controls">
                  <button onClick={() => decrease(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increase(item.id)}>+</button>
                  <button onClick={() => removeItem(item.id)} className="remove">Remove</button>
                </div>
              </div>
            </div>
          ))}
          <h2>Total: ${total.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
}
