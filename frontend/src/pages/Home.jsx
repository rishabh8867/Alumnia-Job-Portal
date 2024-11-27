import React from "react";

export default function Home() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="text-center p-4 px-6 pt-20 md:pt-28 md:px-36">
        <h1 className="text-4xl md:text-6xl  font-bold text-black mb-4 font-poppins">
          Welcome to the <br /> 72nd SGSITS Alumni Day!
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-6">
          Join us on December 21, 2024, for a day filled with nostalgia,
          connection, and celebration. Reconnect with old friends and relive
          cherished memories at our vibrant alumni gathering.
        </p>

        <div className="flex justify-center flex-col md:flex-row gap-2 md:space-x-8">
          {/* Register Button */}
          <button className="bg-[#723F14] text-white hover:opacity-90 font-semibold py-2 px-8 rounded-md">
            Register
          </button>
          {/* Itinerary Button */}
          <button className="border-2 border-[#b5895a] text-[#b5895a] hover:opacity-90 font-semibold py-2 px-6 rounded-md">
            Itinerary
          </button>
        </div>
      </section>

      {/* Event Image */}
      <section className="flex justify-center px-8 md:px-20">
        <img
          src="/mainimg.png" // Replace with the actual image URL
          alt="Alumni Event"
          className="rounded-lg shadow-md max-w-full"
        />
      </section>

      <div className="flex flex-col md:flex-row justify-center px-4 py-6 md:px-6">
        {/* Left Column */}
        <div className="flex-1 md:mb-0 md:p-4 md:ml-16 font-poppins text-center md:text-left">
          <h2 className="text-lg md:text-2xl font-bold text-[#723F14] mb-4 hidden md:block">
            Reunion
          </h2>
          <h3 className="text-xl md:text-3xl font-bold mb-6 ">
            Join Us for the <br /> 72nd Alumni Day Celebration!
          </h3>
        </div>

        {/* Right Column */}
        <div className="flex-1 md:p-4 md:mr-10 text-center md:text-left">
          <p className="text-gray-700 leading-relaxed text-xs md:text-lg">
            Celebrate the legacy and achievements of our alumni at the 72nd
            SGSITS Alumni Day. This special event on December 21, 2024, promises
            a day filled with nostalgia, connection, and excitement. We invite
            you to reconnect with old friends and create new memories on our
            beautiful campus.
          </p>
        </div>
      </div>

      <div className="flex flex-col text-center gap-1 md:gap-4  p-4" >
        <p className="md:text-3xl text-slate-600 font-sans" >Reconnect</p>
        <p className="text-2xl md:text-5xl font-semibold font-poppins" >Celebrate out Legacy together</p>
        <p className="text-sm text-slate-700" >Explore our exciting schedule for the 72nd Alumni Day.<br/> Each Event is designed to foster connection and celebration </p>
      </div>

  {/* Card Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-10">
  {/* Zumba Section */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src="/zumba.png" alt="Zumba Section" className="w-full h-40 object-cover"/>
  </div>

  {/* Marathon */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src="/marathon.png" alt="Marathon" className="w-full h-40 object-cover"/>
  </div>

  {/* Indore Special Breakfast */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src="/poha.png" alt="Indore Special Breakfast" className="w-full h-40 object-cover"/>
  </div>

  {/* Campus Tour */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src="/campus.png" alt="Campus Tour" className="w-full h-40 object-cover"/>
  </div>

  {/* Family Connect Activity */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src="/connect.png" alt="Family Connect Activity" className="w-full h-40 object-cover"/>
  </div>

  {/* Gala Dinner & Cultural Night */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src="/dinner.png" alt="Gala Dinner & Cultural Night" className="w-full h-40 object-cover"/>
  </div>
</div>



</div>
  );
}
