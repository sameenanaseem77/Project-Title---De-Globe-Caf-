import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Coffee } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Coffee,
      title: 'Premium Coffee',
      description: 'Freshly roasted beans from the finest coffee regions around the world.'
    },
    {
      icon: Users,
      title: 'Cozy Atmosphere',
      description: 'A warm, welcoming space perfect for meetings, work, or relaxation.'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in coffee quality and customer service.'
    }
  ];

  const featuredItems = [
    {
      id: '1',
      name: 'Signature Espresso',
      description: 'Rich, bold espresso with notes of chocolate and caramel',
      price: 4.50,
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg'
    },
    {
      id: '2',
      name: 'Artisan Croissant',
      description: 'Buttery, flaky croissant baked fresh daily',
      price: 3.25,
      image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg'
    },
    {
      id: '3',
      name: 'Cappuccino Supreme',
      description: 'Perfect balance of espresso, steamed milk, and foam art',
      price: 5.75,
      image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brown-800 via-brown-700 to-brown-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to
              <span className="block text-gold-400">De Globe Café</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Where every cup tells a story and every moment is crafted with passion. 
              Experience the perfect blend of exceptional coffee and warm hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="inline-flex items-center px-8 py-4 bg-gold-500 text-brown-900 font-semibold rounded-lg hover:bg-gold-400 transition-all duration-300 transform hover:scale-105"
              >
                View Our Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brown-800 transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
              Why Choose De Globe Café?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We're more than just a café - we're a community hub where quality meets comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 rounded-xl bg-cream-50 hover:bg-cream-100 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brown-600 text-white rounded-full mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-brown-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
              Featured Favorites
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover our most beloved items, crafted with the finest ingredients and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
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
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gold-400 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">(4.9)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center px-8 py-4 bg-brown-600 text-white font-semibold rounded-lg hover:bg-brown-700 transition-all duration-300 transform hover:scale-105"
            >
              View Full Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brown-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience De Globe Café?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable coffee experience. Whether you're starting your day or taking a break, we're here to serve you the perfect cup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold-500 text-brown-900 font-semibold rounded-lg hover:bg-gold-400 transition-all duration-300 transform hover:scale-105"
            >
              Visit Us Today
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center px-8 py-4 border-2 border-gold-400 text-gold-400 font-semibold rounded-lg hover:bg-gold-400 hover:text-brown-900 transition-all duration-300"
            >
              Order Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;