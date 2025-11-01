import React from 'react';

interface Property {
  id: string;
  name: string;
  // Add other properties as needed based on your API response
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{property.name}</h3>
      <p>ID: {property.id}</p>
      {/* Add more property details here */}
    </div>
  );
};

export default PropertyCard;
