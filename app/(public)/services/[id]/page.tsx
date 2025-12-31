


"use client";

import { useParams } from "next/navigation";

const ServiceDetails = () => {
  const params = useParams();
  const id = params.id as string;

  return (
    <div>
      <h1>Service Details</h1>
      <p>Service ID: {id}</p>
    </div>
  );
};

export default ServiceDetails;


