import { Activity, Baby, CheckCircle, Users2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Services = () => {
    return (
        <div>
    {/* Services Overview Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className=' mb-16'>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Services</h2>
          <p className='text-center text-gray-500 text-2xl '>Choose according to your needs and book easily</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Baby Care */}
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-4">
              <div className="h-80 relative overflow-hidden">
                <img 
                  src="https://aaniie.com/wp-content/uploads/2025/05/woman-babysitter-happily-playing-with-a-young-boy-at-home.jpg" 
                  alt="Professional babysitter playing with happy child"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 flex items-center text-white translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                  <Baby className="w-10 h-10 mr-3 text-pink-400" />
                  <h3 className="text-3xl font-bold">Baby Care</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 text-lg mb-6">
                  Reliable and loving care for your baby. Playtime, feeding, sleeping, and daily routines.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Trained babysitters</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Play and educational activities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Safe and fun environment</span>
                  </li>
                </ul>
                <Link
                  href="/services/baby-care" 
                  className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-all duration-300 group-hover:translate-x-2"
                >
                  View Details <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Elderly Service */}
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-4">
              <div className="h-80 relative overflow-hidden">
                <img 
                  src="https://static.vecteezy.com/system/resources/previews/070/867/145/non_2x/compassionate-caregiver-assisting-elderly-woman-walking-in-a-nursing-home-hallway-photo.jpg" 
                  alt="Compassionate caregiver assisting elderly person"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 flex items-center text-white translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                  <Users2 className="w-10 h-10 mr-3 text-purple-400" />
                  <h3 className="text-3xl font-bold">Elderly Service</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 text-lg mb-6">
                  Companionship, assistance, and care for your beloved elders. Medication reminders and light household help.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Companionship and conversation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Medication and health monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Assistance with daily tasks</span>
                  </li>
                </ul>
                <Link 
                  href="/services/elderly-care" 
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-all duration-300 group-hover:translate-x-2"
                >
                  View Details <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Sick People Service */}
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-4">
              <div className="h-80 relative overflow-hidden">
                <img 
                  src="https://www.nurseregistry.com/wp-content/uploads/2023/07/senior-in-home-nurse-care.jpg" 
                  alt="Caregiver providing home care to recovering patient"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 flex items-center text-white translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                  <Activity className="w-10 h-10 mr-3 text-pink-400" />
                  <h3 className="text-3xl font-bold">Sick People Service</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 text-lg mb-6">
                  Professional nursing care for sick or recovering patients. Medical support and comfortable care.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Trained nurses/caregivers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Medication administration and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Recovery support</span>
                  </li>
                </ul>
                <Link 
                  href="/services/sick-care" 
                  className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-all duration-300 group-hover:translate-x-2"
                >
                  View Details <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Services;