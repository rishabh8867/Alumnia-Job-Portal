import React from "react";

const Receipt = ({ formData, events, totalCost, eventGuests }) => {
  return (
    <div id="receipt" className="w-full max-w-[210mm] mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-300">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img src="/logo.png" alt="Event Logo" className="w-32" />
      </div>

      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-4xl font-poppins font-semibold text-[#723F14]">
          Event Registration Receipt
        </h2>
        <p className="text-gray-600 text-sm md:text-base mt-2">
          Thank you for registering for the 72nd SGSITS Alumni Day!
        </p>
      </div>

      {/* Registration Details */}
      <div className="border-t border-b border-gray-300 py-4 mb-6">
        <div className="flex justify-between">
          <span className="font-semibold">Name:</span>
          <span>{formData.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Graduation Year:</span>
          <span>{formData.graduationYear}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold ">Mobile Number:</span>
          <span>{formData.mobileNumber}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold ">Email:</span>
          <span>{formData.email}</span>
        </div>
      </div>

      {/* Events Details */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#723F14] md:text-xl mb-3">Selected Events:</h3>
        <ul className="space-y-2">
          {events.map((event) => (
            <li key={event} className="flex justify-between">
              <span className="text-base md:text-lg">{event}</span>
              <span className="font-semibold text-base md:text-lg">{eventGuests[event]} Guests</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Total Cost */}
      <div className="flex justify-between text-base md:text-lg font-semibold border-t pt-4 mt-4 border-gray-300">
        <span>Total Cost:</span>
        <span>₹ {totalCost}</span>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>For any inquiries, please contact the event organizers.</p>
        <p className="mt-2">Thank you for your participation! We look forward to seeing you at the event.</p>
      </div>
    </div>
  );
};

export default Receipt;
