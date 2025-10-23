import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const UtensilsIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
);

const TruckIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
    />
  </svg>
);

const CreditCardIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function Services() {
  const services = [
    {
      icon: UtensilsIcon,
      title: "Dine-in Experience",
      description:
        "Enjoy fresh meals in our cozy, modern setting with exceptional service and ambiance.",
      features: [
        "Comfortable seating",
        "Ambient lighting",
        "Professional staff",
        "Full bar service",
      ],
    },
    {
      icon: TruckIcon,
      title: "Home Delivery",
      description:
        "Get your favorite meals delivered fast and fresh to your doorstep within 30 minutes.",
      features: [
        "30-minute guarantee",
        "Hot & fresh",
        "Free delivery over $25",
        "Real-time tracking",
      ],
    },
    {
      icon: CreditCardIcon,
      title: "Online Ordering & Payment",
      description:
        "Easy and secure order placement with multiple payment options for your convenience.",
      features: [
        "Secure checkout",
        "Multiple payment methods",
        "Order history",
        "Easy reordering",
      ],
    },
  ];

  const benefits = [
    {
      title: "Premium Ingredients",
      description:
        "We source only the finest, freshest ingredients for every dish.",
      icon: "🥘",
      rating: 5,
    },
    {
      title: "Expert Chefs",
      description:
        "Our culinary team brings years of experience and passion to every meal.",
      icon: "👨‍🍳",
      rating: 5,
    },
    {
      title: "Fast Service",
      description:
        "Quick preparation and delivery without compromising on quality.",
      icon: "⚡",
      rating: 5,
    },
    {
      title: "Affordable Pricing",
      description: "Premium quality meals at prices that won't break the bank.",
      icon: "💰",
      rating: 5,
    },
    {
      title: "Customization",
      description:
        "Tailor your meals to your preferences and dietary requirements.",
      icon: "🎨",
      rating: 5,
    },
    {
      title: "24/7 Support",
      description: "Our customer service team is always ready to help you.",
      icon: "📞",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-32 h-32 bg-red-100 rounded-full opacity-20"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative z-10">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 relative z-10">
              Multiple ways to enjoy Trendy Foods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-red-100 rounded-full -mr-10 -mt-10 opacity-20"></div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 relative z-10">
                    <Icon />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 relative z-10">
                    {service.description}
                  </p>
                  <ul className="space-y-2 relative z-10">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <span className="text-red-600 font-bold">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center relative">
              <span className="relative z-10">Why Choose Trendy Foods?</span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600 rounded-full"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-100 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-red-100 rounded-full -mr-8 -mt-8 opacity-20"></div>
                  <div className="text-4xl mb-4 relative z-10">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 relative z-10">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 relative z-10 mb-4">
                    {benefit.description}
                  </p>
                  <div className="flex items-center gap-1 relative z-10">
                    {[...Array(benefit.rating)].map((_, i) => (
                      <span key={i} className="w-4 h-4 text-yellow-400">
                        <StarIcon />
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 md:p-12 text-center text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mb-12"></div>
            <h2 className="text-3xl font-bold mb-4 relative z-10">
              Ready to Experience Trendy Foods?
            </h2>
            <p className="text-lg mb-6 opacity-90 relative z-10">
              Start ordering now and enjoy delicious meals delivered to your
              door
            </p>
            <a
              href="/"
              className="inline-block px-8 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 relative z-10"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
