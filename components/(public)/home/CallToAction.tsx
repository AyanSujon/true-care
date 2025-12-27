'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ClosingSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscription:', { name, email });
    setName('');
    setEmail('');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-[#ff0099] to-[#6632ae] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Join Us in Making Care Accessible
        </h2>
        <p className="text-xl leading-relaxed mb-12 max-w-4xl mx-auto">
          At True Care, we're building a community where families can find the support they need, when they need it most. 
          Because every family deserves true care.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto items-end"
        >
          {/* Name Input */}
          <Input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-white/10 border-white/30 placeholder:text-white/70 text-white focus:border-white h-12 lg:h-14"
          />

          {/* Email Input */}
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 border-white/30 placeholder:text-white/70 text-white focus:border-white h-12 lg:h-14 sm:col-span-2 lg:col-span-1"
          />

          {/* Submit Button - full width on mobile/small screens */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-white text-[#ff0099] hover:bg-gray-100 font-medium h-12 lg:h-14 sm:col-span-2 lg:col-span-1"
          >
            Get Early Access
          </Button>
        </form>
      </div>
    </section>
  );
}