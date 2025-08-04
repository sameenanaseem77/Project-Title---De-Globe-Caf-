import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { useCart, MenuItem } from '../context/CartContext';

const Menu: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addItem } = useCart();

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'tea', name: 'Tea' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'sandwiches', name: 'Sandwiches' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Signature Espresso',
      description: 'Rich, bold espresso with notes of chocolate and caramel',
      price: 4.50,
      category: 'coffee',
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
      available: true
    },
    {
      id: '2',
      name: 'Cappuccino Supreme',
      description: 'Perfect balance of espresso, steamed milk, and foam art',
      price: 5.75,
      category: 'coffee',
      image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg',
      available: true
    },
    {
      id: '3',
      name: 'Caramel Macchiato',
      description: 'Vanilla-flavored syrup, steamed milk, espresso, and caramel drizzle',
      price: 6.25,
      category: 'coffee',
      image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg',
      available: true
    },
    {
      id: '4',
      name: 'Cold Brew',
      description: 'Smooth, refreshing cold-brewed coffee served over ice',
      price: 4.75,
      category: 'coffee',
      image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg',
      available: true
    },
    {
      id: '5',
      name: 'Earl Grey Tea',
      description: 'Classic bergamot-flavored black tea',
      price: 3.50,
      category: 'tea',
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg',
      available: true
    },
    {
      id: '6',
      name: 'Chamomile Tea',
      description: 'Soothing herbal tea perfect for relaxation',
      price: 3.25,
      category: 'tea',
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg',
      available: true
    },
    {
      id: '7',
      name: 'Artisan Croissant',
      description: 'Buttery, flaky croissant baked fresh daily',
      price: 3.25,
      category: 'pastries',
      image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg',
      available: true
    },
    {
      id: '8',
      name: 'Blueberry Muffin',
      description: 'Moist muffin packed with fresh blueberries',
      price: 3.75,
      category: 'pastries',
      image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg',
      available: true
    },
    {
      id: '9',
      name: 'Turkey Club Sandwich',
      description: 'Roasted turkey, bacon, lettuce, tomato on artisan bread',
      price: 8.95,
      category: 'sandwiches',
      image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg',
      available: true
    },
    {
      id: '10',
      name: 'Grilled Cheese',
      description: 'Classic grilled cheese with tomato soup',
      price: 6.50,
      category: 'sandwiches',
      image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg',
      available: true
    },
    {
      id: '11',
      name: 'Chocolate Cake',
      description: 'Rich, decadent chocolate cake with ganache',
      price: 5.95,
      category: 'desserts',
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
      available: true
    },
    {
      id: '12',
      name: 'Cheesecake',
      description: 'Creamy New York style cheesecake with berry compote',
      price: 6.50,
      category: 'desserts',
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg',
      available: true
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory && item.available;
  });

  const handleAddToCart = (item: MenuItem) => {
    addItem(item);
    // You could add a toast notification here
  };

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">
            Our Menu
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our carefully crafted selection of premium coffee, teas, and delicious food items.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-brown-600 text-white'
                    : 'bg-white text-brown-600 hover:bg-brown-50 border border-brown-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-brown-800">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-gold-600">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full flex items-center justify-center px-4 py-3 bg-brown-600 text-white font-medium rounded-lg hover:bg-brown-700 transition-colors duration-200"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No items found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;