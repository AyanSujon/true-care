

import ServiceCard from '@/components/(public)/services/ServiceCard';
import { dbConnect, collections } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';

// MongoDB document shape (direct from DB)
type ServiceFromDB = {
  _id: ObjectId;
  title: string;
  category: string;
  description: string;
  features: string[];
  price: number;
  unit: string;
  image?: string; // optional in database
};

// Shape we send to the frontend (safe for serialization)
type Service = {
  _id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  price: number;
  unit: string;
  image: string; // always has a value (with fallback)
};

export default async function ServicesPage() {
  const servicesCollection = await dbConnect(collections.SERVICES);

  // Fetch raw services from MongoDB
  const servicesFromDB = (await servicesCollection.find({}).toArray()) as ServiceFromDB[];

  // Serialize for frontend: convert ObjectId → string, ensure image fallback
  const serializedServices: Service[] = servicesFromDB.map((service) => ({
    _id: service._id.toString(),
    title: service.title,
    category: service.category,
    description: service.description,
    features: service.features,
    price: service.price,
    unit: service.unit,
    image: service.image || '/placeholder-service.jpg',
  }));

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#323940] mb-4">
          Our Care Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Reliable, compassionate, and professional care tailored to your loved ones' needs.
        </p>
      </div>

      {serializedServices.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-500">No services available at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {serializedServices.map((service) => (
            <ServiceCard
              key={service._id}
              id={service._id}
              title={service.title}
              category={service.category}
              description={service.description}
              features={service.features}
              price={service.price}
              unit={service.unit}
              image={service.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}