import { PropertyProps } from "@/interfaces/index";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img src={property.image} alt={property.name} className="col-span-2 w-full h-96 object-cover rounded-lg" />
        {/* Add more images */}
      </div>

      {/* Amenities */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="flex flex-wrap space-x-4">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
              {amenity}
            </li>
          ))}
        </ul>
      </div>

      {/* Offers */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Property Details</h2>
        <div className="flex space-x-4 mt-2">
          <span>🛏️ {property.offers.bed} Beds</span>
          <span>🚿 {property.offers.shower} Bathrooms</span>
          <span>👥 {property.offers.occupants} Guests</span>
        </div>
      </div>

      {/* Price */}
      <div className="mt-4">
        <h2 className="text-3xl font-bold">${property.price} / night</h2>
        {property.discount && <span className="text-green-600">Save {property.discount}%</span>}
      </div>
    </div>
  );
};

export default PropertyDetail;