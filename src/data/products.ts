export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  images: string[];
  description: string;
  isFeatured?: boolean;
  isNew?: boolean;
  onSale?: boolean;
  salePrice?: number;
  rating: number;
  reviewsCount: number;
  stock: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "SkyLenzo Wood Book",
    price: 120.0,
    category: "Furniture",
    images: ["https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=800&auto=format&fit=crop"],
    description: "Elegant wooden book stand, perfect for your study or living room. Crafted from premium oak with a minimalist design.",
    isFeatured: true,
    rating: 4.5,
    reviewsCount: 12,
    stock: 10,
  },
  {
    id: "2",
    name: "Wood Decor",
    price: 42.0,
    category: "Decor",
    images: ["https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"],
    description: "Minimalist wood decor piece that adds a touch of nature to any room.",
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 8,
    stock: 25,
  },
  {
    id: "3",
    name: "Wood Chair",
    price: 150.0,
    category: "Furniture",
    images: ["https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop"],
    description: "Comfortable and stylish wood chair. Ergonomically designed for long hours of seating.",
    isFeatured: true,
    rating: 4.2,
    reviewsCount: 15,
    stock: 5,
  },
  {
    id: "4",
    name: "SkyLenzo Table Lamp",
    price: 85.0,
    category: "Lighting",
    images: ["https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop"],
    description: "A stunning table lamp with a wooden base and soft fabric shade.",
    isFeatured: true,
    rating: 4.7,
    reviewsCount: 20,
    stock: 12,
  },
  {
    id: "5",
    name: "Minimalist Sofa",
    price: 450.0,
    category: "Furniture",
    images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop"],
    description: "Grey minimalist sofa that fits perfectly in a modern living room.",
    isNew: true,
    rating: 4.9,
    reviewsCount: 5,
    stock: 3,
  },
  {
    id: "6",
    name: "Wooden Shelf",
    price: 110.0,
    category: "Furniture",
    images: ["https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800&auto=format&fit=crop"],
    description: "Three-tier wooden shelf for books and decorative items.",
    onSale: true,
    salePrice: 89.0,
    rating: 4.0,
    reviewsCount: 10,
    stock: 8,
  },
  {
    id: "7",
    name: "Ceramic Vase",
    price: 35.0,
    category: "Decor",
    images: ["https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=800&auto=format&fit=crop"],
    description: "Handcrafted ceramic vase with a matte finish.",
    rating: 4.6,
    reviewsCount: 18,
    stock: 30,
  },
  {
    id: "8",
    name: "Pendant Light",
    price: 125.0,
    category: "Lighting",
    images: ["https://images.unsplash.com/photo-1524484485831-a92ffc0bc0bc?q=80&w=800&auto=format&fit=crop"],
    description: "Industrial style pendant light for dining areas.",
    rating: 4.3,
    reviewsCount: 7,
    stock: 15,
  }
];

export const categories = ["All", "Furniture", "Decor", "Lighting", "Accessories"];
