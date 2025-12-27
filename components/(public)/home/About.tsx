





// "use client";

// import React from 'react';
// import { Heart, Shield, Users, Clock, MapPin, CheckCircle, Baby, Users2, Activity } from 'lucide-react';
// import Link from 'next/link';

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
//       {/* Hero Section */}
//       <section className="relative py-20 px-6 overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//               About <span className="text-pink-500">True Care</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
//               Your trusted platform for reliable babysitting, elderly care, and special care services — making caregiving easy, secure, and accessible for every family.
//             </p>
//           </div>
//         </div>
//       </section>




//       {/* Closing Section */}
//       <section className="py-20 px-6 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-8">Join Us in Making Care Accessible</h2>
//           <p className="text-xl leading-relaxed">
//             At True Care, we're building a community where families can find the support they need, when they need it most. 
//             Because every family deserves true care.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;













import Image from "next/image";
import { Heart, Users, Shield } from "lucide-react";

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                About <span className="text-[#ff0099]">True Care</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                True Care is a trusted web platform dedicated to connecting families with reliable and compassionate caregivers for children, elderly loved ones, and individuals needing special care. We make booking professional caregiving services simple, safe, and accessible—right from the comfort of your home.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you need babysitting, elderly companionship, or care for sick family members, our platform allows you to book services based on duration, location, and specific needs. With automatic cost calculation, secure authentication, and real-time booking tracking, we ensure peace of mind for every family.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-[#ff0099]/10 rounded-full mb-4">
                  <Heart className="w-8 h-8 text-[#ff0099]" />
                </div>
                <h4 className="font-semibold text-gray-900">Compassionate Care</h4>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-[#6632ae]/10 rounded-full mb-4">
                  <Users className="w-8 h-8 text-[#6632ae]" />
                </div>
                <h4 className="font-semibold text-gray-900">Trusted Caregivers</h4>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-[#ff0064]/10 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-[#ff0064]" />
                </div>
                <h4 className="font-semibold text-gray-900">Safe & Secure</h4>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={"https://www.homewatchcaregivers.com/img/upload/man-with-granddaughter-md.webp"}
              alt="Compassionate caregiver spending quality time with elderly person and child – representing the warm, trusted care provided by True Care"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#323940]/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}