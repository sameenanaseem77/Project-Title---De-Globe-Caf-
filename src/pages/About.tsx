import React from 'react';
import { Heart, Award, Users, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Coffee,
      title: 'Quality First',
      description: 'We source only the finest beans and ingredients, ensuring every cup and bite meets our high standards.'
    },
    {
      icon: Heart,
      title: 'Community Focus',
      description: 'We believe in building connections and creating a welcoming space for everyone in our community.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to excellence drives us to continuously improve and innovate in everything we do.'
    },
    {
      icon: Users,
      title: 'Customer Care',
      description: 'Every customer is family to us. We strive to provide exceptional service with a personal touch.'
    }
  ];

  const team = [
    {
      name: 'Maria Rodriguez',
      role: 'Head Barista',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg',
      description: 'Coffee enthusiast with 8 years of experience in specialty coffee preparation.'
    },
    {
      name: 'James Chen',
      role: 'Pastry Chef',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
      description: 'Creates delicious pastries and desserts fresh daily using traditional techniques.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Manager',
      image: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg',
      description: 'Ensures every visitor has an exceptional experience at De Globe Café.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brown-800 to-brown-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Founded in 2018, De Globe Café was born from a simple dream: to create a space where exceptional coffee meets genuine hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-brown-800">
                The Beginning
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                What started as a small neighborhood coffee shop has grown into a beloved community hub. Our founders, passionate about both coffee and community, wanted to create more than just a place to grab a quick cup – they envisioned a space where relationships are built, ideas are shared, and memories are made.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every morning, we roast our beans with care, bake our pastries with love, and prepare each drink with precision. But most importantly, we serve each customer with the warmth and attention they deserve.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, De Globe Café continues to be a place where coffee enthusiasts, remote workers, friends, and families come together to enjoy not just great coffee, but great moments.
              </p>
            </div>
            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg"
                alt="Coffee shop interior"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1797121/pexels-photo-1797121.jpeg"
                alt="Coffee preparation"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              These core values guide everything we do and shape the experience we create for our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brown-600 text-white rounded-full mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-brown-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The passionate people behind De Globe Café who make every visit special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brown-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-brown-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed mb-8">
            "To create exceptional coffee experiences that bring people together, support our community, and inspire connection one cup at a time."
          </p>
          <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
        </div>
      </section>
    </div>
  );
};

export default About;