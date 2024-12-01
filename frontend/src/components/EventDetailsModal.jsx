import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';

const EventDetailsModal = ({ isOpen, onClose, eventDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 relative">
      <div className="absolute right-5">
      <button 
          onClick={onClose}
          className=" text-gray-600"
        >
           <CancelIcon/>
        </button>
      </div>
        

        <h2 className="text-2xl font-semibold text-[#723F14] mb-4">
          {eventDetails.title}
        </h2>
        <p className="text-lg font-semibold">{eventDetails.time}</p>
        <p className="text-gray-600 text-sm md:text-base mb-4">{eventDetails.location}</p>
        <p className="text-base mb-4">{eventDetails.description}</p>

        <h3 className="font-semibold text-lg">Highlights:</h3>
        <ul className="list-disc pl-5">
          {eventDetails.highlights.map((highlight, index) => (
            <li key={index} className="text-sm md:text-base text-gray-600">
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventDetailsModal;
