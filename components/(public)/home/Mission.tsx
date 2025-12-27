


import { Heart, Shield, Users } from "lucide-react";

export default function Mission() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At True Care, we believe that every family deserves access to reliable, compassionate, and trusted care services. 
            Our mission is to make caregiving simple, safe, and accessible for everyone — connecting families with professional caregivers for children, the elderly, and those in need of special care.
          </p>
        </div>

        {/* Mission Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mb-6">
              <Heart className="w-8 h-8 text-[#ff0099]" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Compassionate Care</h3>
            <p className="text-gray-600">
              We prioritize empathy and kindness in every interaction, ensuring your loved ones receive care with warmth and respect.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
              <Shield className="w-8 h-8 text-[#6632ae]" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Safety & Trust</h3>
            <p className="text-gray-600">
              Every caregiver is carefully vetted and background-checked to provide peace of mind and the highest standards of safety.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mb-6">
              <Users className="w-8 h-8 text-[#ff0064]" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Accessible for All</h3>
            <p className="text-gray-600">
              We make professional care services easy to book and affordable, bringing trusted support directly to your home.
            </p>
          </div>
        </div>

        {/* Visual Representation of Services */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-10">
            Caring for Every Stage of Life
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Baby Care */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://images.ctfassets.net/6m9bd13t776q/4ubU17sV6xUq0jJhHVVYWm/afa7f490b12889ce0e89d8d9f0146dad/nanny-or-daycare-hero-shutterstock_1071970724.png?q=80"
                  alt="Professional babysitter playing with happy baby"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-2xl font-semibold mb-2">Baby Care</h4>
                  <p>Reliable and loving childcare for your little ones</p>
                </div>
              </div>
            </div>

            {/* Elderly Care */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://www.care.com/c/wp-content/uploads/sites/2/2021/09/GettyImages-640966547-1620x1080.jpg"
                  alt="Caregiver providing companionship to elderly person"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-2xl font-semibold mb-2">Elderly Care</h4>
                  <p>Companionship and support for seniors to live comfortably</p>
                </div>
              </div>
            </div>

            {/* Special Care */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://www.nurseregistry.com/wp-content/uploads/2023/07/private-nursing-for-seniors.jpg"
                  alt="Professional nurse providing in-home special care"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-2xl font-semibold mb-2">Special Care</h4>
                  <p>Professional nursing and assistance for those in need</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}