import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function About() {
  const values = [
    {
      title: "Quality",
      description:
        "We never compromise on the quality of our ingredients or preparation methods.",
      icon: "🎯",
    },
    {
      title: "Innovation",
      description:
        "Constantly exploring new flavors and techniques to delight our customers.",
      icon: "💡",
    },
    {
      title: "Sustainability",
      description:
        "Committed to eco-friendly practices and supporting local suppliers.",
      icon: "🌱",
    },
    {
      title: "Community",
      description:
        "Building relationships with our customers and giving back to the community.",
      icon: "🤝",
    },
  ];

  const team = [
    {
      name: "Chef Marco",
      role: "Head Chef",
      specialty: "Italian & Modern Fusion",
      image: "/professional-chef-portrait.png",
    },
    {
      name: "Chef Lisa",
      role: "Pastry Chef",
      specialty: "Desserts & Baking",
      image: "/pastry-chef-portrait.png",
    },
    {
      name: "Chef James",
      role: "Sous Chef",
      specialty: "Asian Cuisine",
      image: "/asian-chef-portrait.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Trendy Foods
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2020, Trendy Foods emerged from a passion for
                bringing contemporary culinary excellence to our community. We
                believe that great food is more than just sustenance—it's an
                experience that brings people together.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our mission is simple: deliver delicious, modern meals prepared
                with the finest ingredients and innovative techniques. Every
                dish is crafted with care, combining traditional flavors with
                contemporary twists.
              </p>
              <p className="text-lg text-gray-600">
                We're committed to sustainability, quality, and customer
                satisfaction. From our kitchen to your table, we ensure every
                meal exceeds expectations.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/pizza-pasta-italian-food.jpg"
                  alt="Trendy Foods Restaurant Interior"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src="/gourmet-burger-restaurant.jpg"
                    alt="Restaurant Ambiance"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src="/fresh-salad-healthy-food.jpg"
                    alt="Fresh Ingredients"
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-8 md:p-12 text-center mb-16 shadow-lg">
            <p className="text-2xl md:text-3xl font-bold italic">
              "Bringing people together through taste and trend."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center border-t-4 border-red-600">
              <div className="text-5xl font-bold text-red-600 mb-2">500+</div>
              <p className="text-gray-600 text-lg font-semibold">
                Happy Customers Daily
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center border-t-4 border-red-600">
              <div className="text-5xl font-bold text-red-600 mb-2">50+</div>
              <p className="text-gray-600 text-lg font-semibold">Menu Items</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center border-t-4 border-red-600">
              <div className="text-5xl font-bold text-red-600 mb-2">4.8★</div>
              <p className="text-gray-600 text-lg font-semibold">
                Average Rating
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-red-100 rounded-full -mr-10 -mt-10 opacity-20"></div>
                  <div className="text-4xl mb-4 relative z-10">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 relative z-10">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Story in Images
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/authentic-margherita-pizza.jpg"
                  alt="Authentic Margherita Pizza"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/grilled-salmon-fillet-lemon.jpg"
                  alt="Grilled Salmon Fillet"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/chocolate-lava-cake-dessert.jpg"
                  alt="Chocolate Lava Cake Dessert"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Meet Our Culinary Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-red-600 font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
