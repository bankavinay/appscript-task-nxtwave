// //fetch products from fake store api logic
// const url = "https://fakestoreapi.com/products";

// export const fetchProducts = async () => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Failed to fetch products");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching products:", error.message);
//     return null;
//   }
// };
const productsData = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and travel. The Fjallraven Rucksack is made from durable G-1000 material and features a padded sleeve for your laptop.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/1.jpg",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description:
      "Slim fit, 100% cotton T-shirt for men, made with comfort and style in mind.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/2.jpg",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Bracelet",
    price: 695,
    description:
      "From the Legends Collection, the Naga was created in the mythical belief that the dragon controls the flow of water and is a symbol of life and love.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/3.jpg",
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 4,
    title: "Solid Gold Petite Micropave 1/2 Carat Diamond Tennis Bracelet",
    price: 168,
    description:
      "A beautiful tennis bracelet crafted in solid 14K gold with micropave set diamonds.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/4.jpg",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 5,
    title:
      "White Gold Plated Stainless Steel Triple Interlocking Circles Necklace",
    price: 12.99,
    description:
      "An elegant, white gold plated necklace featuring three interlocking circles, symbolizing unity and love.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/5.jpg",
    rating: { rate: 3, count: 40 },
  },
  {
    id: 6,
    title:
      "Pierced Owl Rose Gold Plated Stainless Steel Double Flared Tunnel Plug Earrings",
    price: 10.99,
    description:
      "Stunning, rose gold-plated stainless steel double-flared tunnel plug earrings designed for a chic and modern look.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/6.jpg",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 7,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64,
    description:
      "Portable external hard drive with USB 3.0 connectivity and a large 2TB storage capacity, ideal for storing documents, photos, and videos.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/7.jpg",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 8,
    title: "SanDisk 128GB Ultra Flair USB 3.0 Flash Drive",
    price: 20.99,
    description:
      "Fast and durable USB 3.0 flash drive with a 128GB storage capacity, perfect for transferring and storing large files quickly.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/8.jpg",
    rating: { rate: 3.7, count: 453 },
  },
  {
    id: 9,
    title: "Samsung 49-Inch CHG90 32:9 Curved Gaming Monitor",
    price: 999.99,
    description:
      "Ultra-wide 49-inch curved gaming monitor with a 32:9 aspect ratio, delivering an immersive gaming experience with a high refresh rate.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/9.jpg",
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: 10,
    title: "Logitech G Pro X Superlight Wireless Gaming Mouse",
    price: 149.99,
    description:
      "Wireless gaming mouse featuring lightweight design and high-performance sensors for precision gameplay.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/10.jpg",
    rating: { rate: 5, count: 300 },
  },
  // More products can be added in the same format
];

// Replace the API call with returning the data
export const fetchProducts = async () => {
  try {
    return productsData; // Return the stored data
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return null;
  }
};