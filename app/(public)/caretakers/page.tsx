


'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { 
  ShieldCheck, 
  Star, 
  Calendar, 
  MapPin, 
  Clock,
  Baby,
  UserRound,
  Stethoscope,
  Filter,
  DollarSign
} from 'lucide-react';

export default function Caretakers() {
  // Filter States
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [experienceRange, setExperienceRange] = useState([0, 15]);
  const [hourlyRateRange, setHourlyRateRange] = useState([20, 60]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]); // checkboxes for 1–5 stars
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  // Sample data
  const allCaretakers = [
    {
      id: 1,
      name: 'Ayesha Rahman',
      type: 'Baby Care',
      experience: 5,
      rating: 4.9,
      reviews: 128,
      location: 'Dhaka',
      hourlyRate: 35,
      verified: true,
      bio: 'Loving and patient caregiver with a passion for early childhood development. Certified in pediatric first aid and CPR.',
      icon: Baby,
    },
    {
      id: 2,
      name: 'Fatima Begum',
      type: 'Elderly Care',
      experience: 8,
      rating: 5.0,
      reviews: 92,
      location: 'Chittagong',
      hourlyRate: 40,
      verified: true,
      bio: 'Compassionate elder companion with extensive experience in dementia care.',
      icon: UserRound,
    },
    {
      id: 3,
      name: 'Nur Islam',
      type: 'Sick Patient Care',
      experience: 6,
      rating: 4.8,
      reviews: 76,
      location: 'Dhaka',
      hourlyRate: 45,
      verified: true,
      bio: 'Professional nurse aide skilled in post-operative recovery.',
      icon: Stethoscope,
    },
    {
      id: 4,
      name: 'Salma Akter',
      type: 'Baby Care',
      experience: 3,
      rating: 4.7,
      reviews: 54,
      location: 'Sylhet',
      hourlyRate: 28,
      verified: false,
      bio: 'Energetic babysitter who loves educational games and playtime.',
      icon: Baby,
    },
    {
      id: 5,
      name: 'Rahim Khan',
      type: 'Elderly Care',
      experience: 12,
      rating: 4.9,
      reviews: 201,
      location: 'Dhaka',
      hourlyRate: 48,
      verified: true,
      bio: 'Dedicated senior care specialist with over a decade of experience.',
      icon: UserRound,
    },
    {
      id: 6,
      name: 'Jannat Ara',
      type: 'Sick Patient Care',
      experience: 7,
      rating: 4.6,
      reviews: 89,
      location: 'Rajshahi',
      hourlyRate: 42,
      verified: true,
      bio: 'Trained in wound care and rehabilitation support.',
      icon: Stethoscope,
    },
  ];

  // Filter logic
  const filteredCaretakers = allCaretakers.filter((caretaker) => {
    if (verifiedOnly && !caretaker.verified) return false;
    if (selectedSpecialties.length > 0 && !selectedSpecialties.includes(caretaker.type)) return false;
    if (caretaker.experience < experienceRange[0] || caretaker.experience > experienceRange[1]) return false;
    if (caretaker.hourlyRate < hourlyRateRange[0] || caretaker.hourlyRate > hourlyRateRange[1]) return false;
    if (selectedRatings.length > 0) {
      const floorRating = Math.floor(caretaker.rating);
      if (!selectedRatings.includes(floorRating)) return false;
    }
    if (selectedLocation !== 'all' && caretaker.location !== selectedLocation) return false;
    return true;
  });

  const locations = ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi'];
  const specialties = ['Baby Care', 'Elderly Care', 'Sick Patient Care'];

  const getServiceIcon = (icon: React.ElementType) => {
    return React.createElement(icon, { className: "w-5 h-5" });
  };

  const toggleRating = (rating: number) => {
    setSelectedRatings(prev =>
      prev.includes(rating)
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

  const MobileFilters = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="lg:hidden fixed bottom-6 right-6 z-10 rounded-full shadow-lg p-6">
          <Filter className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Filter Caretakers</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-8">
          <FilterSidebarContent />
        </div>
      </SheetContent>
    </Sheet>
  );

  const FilterSidebarContent = () => (
    <>
      {/* Verified */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Verification</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="verified" checked={verifiedOnly} onCheckedChange={(c) => setVerifiedOnly(c as boolean)} />
          <Label htmlFor="verified" className="cursor-pointer">Only verified</Label>
        </div>
      </div>

      {/* Specialties */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Specialties</h3>
        {specialties.map((spec) => (
          <div key={spec} className="flex items-center space-x-2">
            <Checkbox
              id={spec}
              checked={selectedSpecialties.includes(spec)}
              onCheckedChange={(checked) => {
                if (checked) setSelectedSpecialties([...selectedSpecialties, spec]);
                else setSelectedSpecialties(selectedSpecialties.filter(s => s !== spec));
              }}
            />
            <Label htmlFor={spec} className="cursor-pointer">{spec}</Label>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Experience (Years)</h3>
        <Slider value={experienceRange} onValueChange={setExperienceRange} min={0} max={15} step={1} />
        <div className="flex justify-between text-sm text-gray-600">
          <span>{experienceRange[0]} yrs</span>
          <span>{experienceRange[1]} yrs</span>
        </div>
      </div>

      {/* Hourly Rate */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Hourly Rate (USD)</h3>
        <Slider value={hourlyRateRange} onValueChange={setHourlyRateRange} min={20} max={60} step={5} />
        <div className="flex justify-between text-sm text-gray-600">
          <span>${hourlyRateRange[0]}</span>
          <span>${hourlyRateRange[1]}</span>
        </div>
      </div>

      {/* Rating Checkboxes 1–5 stars */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Minimum Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${star}`}
                checked={selectedRatings.includes(star)}
                onCheckedChange={() => toggleRating(star)}
              />
              <Label htmlFor={`rating-${star}`} className="cursor-pointer flex items-center gap-1 text-sm">
                {star} <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> & up
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Location</h3>
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger>
            <SelectValue placeholder="All locations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            {locations.map((loc) => (
              <SelectItem key={loc} value={loc}>{loc}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          setVerifiedOnly(false);
          setSelectedSpecialties([]);
          setExperienceRange([0, 15]);
          setHourlyRateRange([20, 60]);
          setSelectedRatings([]);
          setSelectedLocation('all');
        }}
      >
        Clear All Filters
      </Button>
    </>
  );

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-r from-pink-600 to-purple-700 py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Find Your Perfect Caretaker</h1>
            <p className="mt-4 text-xl opacity-90">Trusted care starting from $20/hour</p>
            <Badge variant="secondary" className="mt-6 text-lg px-6 py-3">
              {filteredCaretakers.length} Available Caretaker
            </Badge>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block">
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Filters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <FilterSidebarContent />
                </CardContent>
              </Card>
            </aside>

            {/* Caretakers Grid */}
            <div className="lg:col-span-3">
              {filteredCaretakers.length === 0 ? (
                <Card className="p-12 text-center">
                  <p className="text-gray-500 text-lg">No caretakers match your filters.</p>
                </Card>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredCaretakers.map((caretaker) => (
                    <Card
                      key={caretaker.id}
                      className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg"
                    >
                      {/* Verified Badge - Top Right */}
                      {caretaker.verified && (
                        <div className="absolute top-3 right-3 z-10">
                          <Badge className="bg-purple-600 text-white text-xs">
                            <ShieldCheck className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        </div>
                      )}

                      <CardHeader className="bg-gradient-to-br from-pink-50 to-purple-50 pb-6 text-center">
                        <Avatar className="h-24 w-24 mx-auto mb-3 ring-4 ring-white">
                          <AvatarImage src={`/caretaker-${caretaker.id}.jpg`} />
                          <AvatarFallback className="bg-gradient-to-br from-pink-500 to-purple-600 text-white text-2xl">
                            {caretaker.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-lg">{caretaker.name}</CardTitle>
                        <div className="flex items-center justify-center gap-2 mt-1">
                          {getServiceIcon(caretaker.icon)}
                          <span className="text-sm text-pink-700">{caretaker.type}</span>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-4 space-y-4">
                        {/* Short Bio */}
                        <p className="text-xs text-gray-600 line-clamp-2">{caretaker.bio}</p>

                        <Separator />

                        {/* Rating + Price */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-sm">{caretaker.rating}</span>
                            <span className="text-xs text-gray-500">({caretaker.reviews})</span>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center justify-end gap-1">
                              <DollarSign className="w-5 h-5 text-green-600" />
                              <span className="text-2xl font-bold text-green-600">{caretaker.hourlyRate}</span>
                            </div>
                            <p className="text-xs text-gray-600">per hour</p>
                          </div>
                        </div>

                        {/* Experience & Location */}
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-purple-600" />
                            <span>{caretaker.experience}+ yrs</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-purple-600" />
                            <span>{caretaker.location}</span>
                          </div>
                        </div>

                        {/* Small Buttons */}
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" className="flex-1 bg-pink-600 hover:bg-pink-700 text-xs">
                            <Clock className="w-4 h-4 mr-1" />
                            Book
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 text-xs border-none shadow">
                            Profile
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Filters */}
        <MobileFilters />
      </div>
    </>
  );
}
