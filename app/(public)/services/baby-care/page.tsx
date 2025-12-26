





// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { 
//   Heart, 
//   ShieldCheck, 
//   Clock, 
//   Baby, 
//   Star, 
//   CheckCircle2, 
//   CalendarCheck,
//   MapPin,
//   ArrowRight
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// const BabyCare = () => {
//   const [hours, setHours] = useState<number>(4);
//   const [totalPrice, setTotalPrice] = useState<number>(0);
//   const HOURLY_RATE = 250; // Example service charge per hour

//   useEffect(() => {
//     setTotalPrice(hours * HOURLY_RATE);
//   }, [hours]);

//   const features = [
//     {
//       title: "Verified Sitters",
//       desc: "Every caregiver undergoes rigorous background checks and identity verification.",
//       icon: <ShieldCheck className="w-6 h-6 text-[#ff0099]" />,
//     },
//     {
//       title: "Flexible Scheduling",
//       desc: "Book from 2 hours to a full day. We adapt to your family's routine.",
//       icon: <Clock className="w-6 h-6 text-[#ff0064]" />,
//     },
//     {
//       title: "Developmental Play",
//       desc: "Our sitters engage children in age-appropriate educational activities.",
//       icon: <Baby className="w-6 h-6 text-[#6632ae]" />,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative py-16 md:py-24 overflow-hidden">
//         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#ff0099]/10 rounded-full blur-3xl" />
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <Badge className="bg-[#6632ae] hover:bg-[#6632ae]/90 mb-4 px-4 py-1">
//                 Trusted by 5000+ Parents
//               </Badge>
//               <h1 className="text-4xl md:text-6xl font-bold text-[#323940] leading-tight mb-6">
//                 Professional Care for Your <span className="text-[#ff0099]">Little Ones</span>
//               </h1>
//               <p className="text-lg text-gray-600 mb-8 max-w-lg">
//                 True Care provides reliable, safe, and nurturing babysitting services. 
//                 Whether it's a date night or a full work day, your child is in safe hands.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <Button className="bg-[#ff0099] hover:bg-[#ff0064] text-white px-8 py-6 text-lg rounded-full">
//                   Book a Sitter Now
//                 </Button>
//                 <Button variant="outline" className="border-[#6632ae] text-[#6632ae] px-8 py-6 text-lg rounded-full">
//                   Meet our Caretakers
//                 </Button>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
//                 <img 
//                   src="https://images.unsplash.com/photo-1544126592-807daa2b565b?q=80&w=1000&auto=format&fit=crop" 
//                   alt="Baby Care Service" 
//                   className="w-full h-[400px] object-cover"
//                 />
//               </div>
//               <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 flex items-center gap-4">
//                 <div className="bg-green-100 p-3 rounded-full">
//                   <Heart className="text-green-600 fill-green-600" />
//                 </div>
//                 <div>
//                   <p className="font-bold text-[#323940]">100% Secure</p>
//                   <p className="text-sm text-gray-500">Parental Peace of Mind</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Booking Integration Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="bg-[#323940] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
//             <div className="lg:w-1/2 p-8 md:p-16 text-white">
//               <h2 className="text-3xl font-bold mb-6">Estimate your care cost</h2>
//               <p className="text-gray-300 mb-8">
//                 Select your required duration and see the transparent pricing instantly. 
//                 No hidden fees, ever.
//               </p>

//               <ul className="space-y-4 mb-8">
//                 <li className="flex items-center gap-3">
//                   <CheckCircle2 className="text-[#ff0099] w-5 h-5" />
//                   <span>Customizable duration</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <CheckCircle2 className="text-[#ff0099] w-5 h-5" />
//                   <span>Real-time availability check</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <CheckCircle2 className="text-[#ff0099] w-5 h-5" />
//                   <span>Includes safety equipment & basic supplies</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="lg:w-1/2 bg-white p-8 md:p-16">
//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Service Duration (Hours)</label>
//                   <div className="flex items-center gap-4">
//                     <input 
//                       type="range" 
//                       min="2" 
//                       max="24" 
//                       value={hours}
//                       onChange={(e) => setHours(parseInt(e.target.value))}
//                       className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ff0099]"
//                     />
//                     <span className="font-bold text-xl text-[#323940] min-w-[60px]">{hours}h</span>
//                   </div>
//                 </div>

//                 <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-gray-600">Base Rate</span>
//                     <span className="font-medium">৳{HOURLY_RATE}/hr</span>
//                   </div>
//                   <div className="flex justify-between items-center pt-4 border-t border-gray-200">
//                     <span className="text-lg font-bold text-[#323940]">Total Cost</span>
//                     <span className="text-3xl font-black text-[#ff0099]">৳{totalPrice}</span>
//                   </div>
//                 </div>

//                 <Button className="w-full bg-[#6632ae] hover:bg-[#6632ae]/90 text-white py-8 text-lg flex gap-2">
//                   <CalendarCheck className="w-5 h-5" />
//                   Proceed to Booking
//                 </Button>

//                 <p className="text-center text-xs text-gray-400">
//                   You won't be charged yet. Final location details on next step.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BabyCare;



















import React from "react";
import Link from "next/link";
import {
  Baby,
  ShieldCheck,
  Heart,
  CheckCircle2,
  Moon,
  Gamepad2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  priceHint: string;
}

const services: Service[] = [
  {
    id: 1,
    slug: "newborn-care",
    title: "Newborn Care",
    description:
      "Specialized support for infants including feeding, sleep scheduling, and gentle hygiene care by certified experts.",
    icon: <Baby className="w-8 h-8 text-[#6632ae]" />,
    tags: ["CPR Certified", "24/7 Available"],
    priceHint: "Starts at $25/hr",
  },
  {
    id: 2,
    slug: "toddler-supervision",
    title: "Toddler Supervision",
    description:
      "Engaging play-based learning and active supervision to keep your growing explorer safe and happy.",
    icon: <Gamepad2 className="w-8 h-8 text-[#6632ae]" />,
    tags: ["Educational", "Verified"],
    priceHint: "Starts at $20/hr",
  },
  {
    id: 3,
    slug: "overnight-support",
    title: "Overnight Support",
    description:
      "Peace of mind through the night. Our caregivers ensure your baby is safe while you get the rest you need.",
    icon: <Moon className="w-8 h-8 text-[#6632ae]" />,
    tags: ["Sleep Training", "Background Checked"],
    priceHint: "Starts at $180/night",
  },
  {
    id: 4,
    slug: "sick-child-care",
    title: "Sick Child Care",
    description:
      "Compassionate care when your little one feels under the weather. We monitor symptoms and provide comfort.",
    icon: <Heart className="w-8 h-8 text-[#6632ae]" />,
    tags: ["Medical Training", "Rapid Response"],
    priceHint: "Starts at $30/hr",
  },
];

const BabyCareServices: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-[#fdf2f8]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <Badge
            variant="outline"
            className="border-[#ff0099] text-[#ff0099] px-4 py-1 rounded-full bg-pink-50"
          >
            Trusted by 5000+ Parents
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#323940] tracking-tight">
            Nurturing Care for Your <span className="text-[#ff0099]">Little Ones</span>
          </h2>
          <p className="text-[#323940]/70 max-w-2xl mx-auto text-lg">
            True Care provides background-checked, professional caregivers who treat your children like family. Safety and love in every visit.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-sm font-medium text-[#323940]/80">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              100% Verified Caregivers
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-[#323940]/80">
              <ShieldCheck className="w-5 h-5 text-[#6632ae]" />
              Insurance Covered
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white flex flex-col"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-[#323940]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-[#323940]">{service.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider text-[#6632ae] bg-[#6632ae]/10 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="flex-grow">
                <CardDescription className="text-[#323940]/80 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="flex flex-col items-start gap-4 border-t border-gray-50 pt-6">
                <span className="text-sm font-semibold text-[#323940]">
                  {service.priceHint}
                </span>
                <Link href={`/services/${service.slug}`} className="w-full">
                  <Button className="w-full bg-[#ff0099] hover:bg-[#ff0064] text-white font-bold transition-colors shadow-md hover:shadow-pink-200">
                    Book Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Trust Footer */}
        <div className="mt-16 bg-[#6632ae] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">First Time using True Care?</h3>
            <p className="text-purple-100 opacity-90">
              Schedule a free 15-minute consultation call with our childcare specialists to find the perfect match for your family.
            </p>
          </div>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-[#6632ae] hover:bg-gray-100 font-bold px-8 h-14 text-lg"
          >
            Schedule Free Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BabyCareServices;

























