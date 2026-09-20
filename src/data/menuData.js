export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'biryani', label: 'Biryani Specials' },
  { id: 'starters', label: 'Starters' },
  { id: 'main', label: 'Main Course' },
  { id: 'veg', label: 'Vegetarian' },
  { id: 'beverages', label: 'Beverages' },
  { id: 'desserts', label: 'Desserts' }
];

export const FEATURED_DISH = {
  id: 'featured-1',
  name: "Signature Guntur Chicken Biryani",
  category: "biryani",
  price: 290,
  description: "Fragrant long-grain Seeraga Samba & Basmati rice layered with succulent marinated chicken, slow-cooked in traditional handi over glowing coals with authentic Guntur red chillies and secret roasted spices.",
  isVeg: false,
  isSpicy: true,
  rating: 4.9,
  prepTime: "25-30 mins",
  calories: "650 kcal",
  image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000&auto=format&fit=crop",
  highlights: [
    "Traditional Coal Dum Process",
    "Hand-ground Guntur Chilli Spice Blend",
    "Served with Mirchi Ka Salan & Creamy Raita"
  ]
};

export const MENU_ITEMS = [
  // Biryani
  {
    id: 'b1',
    name: 'Special Chicken Dum Biryani',
    category: 'biryani',
    price: 280,
    description: 'Slow-cooked fragrant basmati rice layered with tender chicken chunks, rich ghee, and authentic Guntur spices.',
    isVeg: false,
    isSpicy: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b2',
    name: 'Royal Mutton Dum Biryani',
    category: 'biryani',
    price: 360,
    description: 'Rich and aromatic mutton biryani slow cooked in traditional coal dum with caramelized onions and saffron.',
    isVeg: false,
    isSpicy: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b3',
    name: 'Special Veg Dum Biryani',
    category: 'biryani',
    price: 220,
    description: 'Garden fresh vegetables cooked with fragrant basmati rice, mint leaves, roasted cashew nuts and whole spices.',
    isVeg: true,
    isSpicy: false,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b4',
    name: 'Paneer Tikka Biryani',
    category: 'biryani',
    price: 250,
    description: 'Char-grilled cottage cheese cubes layered over spiced biryani rice with aromatic herbs.',
    isVeg: true,
    isSpicy: false,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=800&auto=format&fit=crop'
  },

  // Starters
  {
    id: 's1',
    name: 'Authentic Chicken 65',
    category: 'starters',
    price: 240,
    description: 'Deep-fried spicy chicken bites tossed with curry leaves, red chilli paste, and mustard seeds.',
    isVeg: false,
    isSpicy: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1610057099443-f63a152d2f62?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 's2',
    name: 'Tandoori Chicken Tikka',
    category: 'starters',
    price: 260,
    description: 'Boneless chicken pieces marinated in hung curd, Kashmiri chilli and chat masala, roasted in clay tandoor.',
    isVeg: false,
    isSpicy: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 's3',
    name: 'Paneer Tikka Grill',
    category: 'starters',
    price: 230,
    description: 'Fresh malai paneer cubes marinated in rich Indian spices, capsicum and onions, charred in clay oven.',
    isVeg: true,
    isSpicy: false,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 's4',
    name: 'Guntur Spicy Chilli Chicken',
    category: 'starters',
    price: 250,
    description: 'Signature Andhra style spicy dry chicken fry made with fiery Guntur red chillies and shallots.',
    isVeg: false,
    isSpicy: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop'
  },

  // Main Course
  {
    id: 'm1',
    name: 'Paneer Butter Masala',
    category: 'main',
    price: 240,
    description: 'Soft paneer cubes simmered in a rich, buttery, velvety tomato cashew gravy with fresh cream.',
    isVeg: true,
    isSpicy: false,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm2',
    name: 'Butter Naan Basket (2 Pcs)',
    category: 'main',
    price: 60,
    description: 'Soft and fluffy refined flour bread baked in tandoor and brushed with rich melted butter.',
    isVeg: true,
    isSpicy: false,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm3',
    name: 'Guntur Special Chicken Curry',
    category: 'main',
    price: 270,
    description: 'Fiery Andhra chicken curry simmered with roasted spices, garlic, curry leaves, and rich gravy.',
    isVeg: false,
    isSpicy: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm4',
    name: 'Dal Tadka Special',
    category: 'main',
    price: 180,
    description: 'Yellow lentils cooked till soft and tempered with ghee, cumin seeds, garlic, and dry red chillies.',
    isVeg: true,
    isSpicy: false,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop'
  },

  // Veg Specials (also highlighted under veg)
  {
    id: 'v1',
    name: 'Mushroom Masala Curry',
    category: 'veg',
    price: 230,
    description: 'Tender button mushrooms cooked in an aromatic onion-tomato curry with crushed fenugreek leaves.',
    isVeg: true,
    isSpicy: false,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'v2',
    name: 'Kadai Paneer Special',
    category: 'veg',
    price: 240,
    description: 'Cottage cheese cooked with bell peppers, tomatoes, and coarsely freshly ground kadai spices.',
    isVeg: true,
    isSpicy: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop'
  },

  // Beverages
  {
    id: 'bev1',
    name: 'Fresh Lime Soda (Sweet/Salt)',
    category: 'beverages',
    price: 60,
    description: 'Chilled refreshing lime soda with mint leaves and a hint of black salt.',
    isVeg: true,
    isSpicy: false,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bev2',
    name: 'Royal Sweet Lassi',
    category: 'beverages',
    price: 80,
    description: 'Thick, creamy churned yogurt drink flavoured with cardamom and topped with dry fruits.',
    isVeg: true,
    isSpicy: false,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1571006682855-3bc6729c1186?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bev3',
    name: 'Chilled Soft Drinks (300ml)',
    category: 'beverages',
    price: 40,
    description: 'Selection of chilled carbonated soft beverages (Thums Up, Sprite, Coke).',
    isVeg: true,
    isSpicy: false,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop'
  },

  // Desserts
  {
    id: 'd1',
    name: 'Hot Gulab Jamun (2 Pcs)',
    category: 'desserts',
    price: 80,
    description: 'Classic milk-solid dumplings fried golden and soaked in warm cardamom rose sugar syrup.',
    isVeg: true,
    isSpicy: false,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'd2',
    name: 'Special Matka Kulfi',
    category: 'desserts',
    price: 90,
    description: 'Traditional slow-cooked thick kulfi infused with saffron, pistachio and cardamom in earthenware pot.',
    isVeg: true,
    isSpicy: false,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'd3',
    name: 'Vanilla & Chocolate Ice Cream',
    category: 'desserts',
    price: 70,
    description: 'Double scoop rich ice cream served with chocolate drizzle and roasted nuts.',
    isVeg: true,
    isSpicy: false,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=800&auto=format&fit=crop'
  }
];
