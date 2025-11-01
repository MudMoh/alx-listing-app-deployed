import React from 'react';
import { PropertyProps } from '../../interfaces'; // Adjust path as needed

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{property.name}</h3>
      <p>{property.address.city}, {property.address.country}</p>
      <p>Rating: {property.rating} stars</p>
      <p>Price: ${property.price} / night</p>
      {property.image && (
        <img src={property.image} alt={property.name} className="w-full h-48 object-cover mt-2 rounded-md" />
      )}
    </div>
  );
};

export default PropertyCard;
