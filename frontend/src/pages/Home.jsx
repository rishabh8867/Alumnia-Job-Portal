import React, { useRef } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Home() {

  const eventTimelineRef = useRef(null);

    const handleScrollToTimeline = () => {
    if (eventTimelineRef.current) {
      eventTimelineRef.current.scrollIntoView({
        behavior: 'smooth', // This ensures smooth scrolling
        block: 'start',     // This aligns the section to the top
      });
    }
  };

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
          <button  onClick={handleScrollToTimeline} className="border-2 border-[#b5895a] text-[#b5895a] hover:opacity-90 font-semibold py-2 px-6 rounded-md">
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

      <div className="flex flex-col text-center gap-1 md:gap-4  p-4">
        <p className="md:text-3xl text-slate-600 font-sans">Reconnect</p>
        <p className="text-2xl md:text-5xl font-semibold font-poppins">
          Celebrate out Legacy together
        </p>
        <p className="text-sm text-slate-700">
          Explore our exciting schedule for the 72nd Alumni Day.
          <br /> Each Event is designed to foster connection and celebration{" "}
        </p>
      </div>

      {/* Card Grid */}
      <div className="flex gap-2 px-4">
        <div className="flex-1 md:py-6">
          <div className="grid gid-row-5 md:p-2">
            <div className="row-span-1 md:p-2">
              <img
                src="/zumba.png"
                alt="Zumba Section"
                className="w-full object-fit rounded-lg shadow-lg"
              />
            </div>
            {/* Indore Special Breakfast */}
            <div className="row-span-2 md:p-2">
              <img
                src="/poha.png"
                alt="Indore Special Breakfast"
                className="w-full object-fit rounded-lg shadow-lg"
              />
            </div>
            {/* Campus Tour */}
            <div className="row-span-1 md:p-2">
              <img
                src="/campus.png"
                alt="Campus Tour"
                className="w-full object-fit rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 md:py-4">
          <div className="row-span-2">
            <img
              src="/marathon.png"
              alt="Marathon"
              className="w-full object-fit rounded-lg shadow-lg"
            />
          </div>

          <div className="row-span-2 md:p-2">
            <img
              src="/connect.png"
              alt="Family Connect Activity"
              className="w-full object-fit rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-2">
        <img
          src="/dinner.png"
          alt="Gala Dinner & Cultural Night"
          className="w-full object-fit rounded-lg shadow-lg"
        />
      </div>

      <div ref={eventTimelineRef} className="flex flex-col text-center md:gap-4 p-3">
        <p className="md:text-3xl text-slate-800 font-sans">Timeline</p>
        <p className="text-2xl md:text-5xl font-semibold font-poppins mb-2">
          Event Timeline for the day
        </p>
        <p className="text-xs px-6 text-slate-700 md:text-xl">
          Explore our exciting schedule for the 72nd Alumni Day.
          <br /> Each Event is designed to foster connection and celebration{" "}
        </p>
      </div>

      {/* Timeline Section 1*/}
      <div className="px-4 md:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">
            Morning
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">Start Your Day</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-1/2 w-1 bg-gray-200 h-full transform -translate-x-1/2"></div>
          {/* Timeline Items */}
          <div className="flex flex-col md:space-y-8">
            {/* Zumba Session */}
            <div className="flex items-center">
              <div className="w-1/2 text-right">
                <div className="flex justify-end">
                  <div className="bg-gray-50 rounded-lg shadow-md p-6">
                    <h3 className="text-lg md:text-xl font-bold">
                      Zumba Session
                    </h3>
                    <p className="text-gray-600 text-xs md:text-lg">
                      7:30 AM - 8:00 AM
                    </p>
                    <p className="text-xs md:text-base text-gray-500">
                      <LocationOnIcon /> College Main Ground
                    </p>
                    <a
                      href="/"
                      className="text-[#723F14] font-semibold text-sm hover:underline"
                    >
                      See Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative w-10 flex justify-center">
                <div className="h-4 w-4 bg-[#723F14] rounded-full z-10"></div>
                <div className="h-1 w-3 bg-[#723F14] absolute right-6 top-1.5"></div>
              </div>

              <div className="w-1/2"></div>
            </div>

            {/* Marathon */}
            <div className="flex items-center">
              <div className="w-1/2"></div>
              <div className="relative w-10 flex justify-center">
                <div className="h-4 w-4 bg-[#723F14] rounded-full z-10"></div>
                <div className="h-1 w-3 bg-[#723F14] absolute left-6 top-1.5"></div>
              </div>
              <div className="w-1/2 text-left">
                <div className="flex">
                  <div className=" bg-gray-50 rounded-lg shadow-md p-6">
                    <h3 className="text-lg md:text-xl font-bold">Marathon</h3>
                    <p className="text-gray-600 text-xs md:text-lg">
                      8:00 AM - 9:00 AM
                    </p>
                    <p className="text-xs md:text-base text-gray-500">
                      <LocationOnIcon />
                      From College Main Gate to College Main Ground
                    </p>
                    <a
                      href="/"
                      className="text-[#723F14] font-semibold text-sm hover:underline"
                    >
                      See Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Indore Special Breakfast */}
            <div className="flex items-center">
              <div className="w-1/2 text-right">
                <div className="flex justify-end">
                  <div className=" bg-gray-50 rounded-lg shadow-md p-6">
                    <h3 className="text-lg md:text-xl font-bold">
                      Indore Special Breakfast
                    </h3>
                    <p className="text-gray-600 text-xs md:text-lg">
                      9:00 AM - 10:00 AM
                    </p>
                    <p className="text-xs md:text-base text-gray-500">
                      <LocationOnIcon /> College Canteen Area
                    </p>
                    <a
                      href="/"
                      className="text-[#723F14] font-semibold text-sm hover:underline"
                    >
                      See Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative w-10 flex justify-center">
                <div className="h-4 w-4 bg-[#723F14] rounded-full z-10"></div>
                <div className="h-1 w-3 bg-[#723F14] absolute right-6 top-1.5"></div>
              </div>
              <div className="w-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section 2*/}
      <div className="px-4 md:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">
            Afternoon
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">Family Fun time</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-1/2 w-1 bg-gray-200 h-full transform -translate-x-1/2"></div>
          {/* Timeline Items */}
          <div className="flex flex-col md:space-y-8">
            {/* Zumba Session */}
            <div className="flex items-center">
              <div className="w-1/2 text-right">
                <div className="flex justify-end">
                  <div className="bg-gray-50 rounded-lg shadow-md p-6">
                    <h3 className="text-lg md:text-xl font-bold">
                     Family Connect Activities
                    </h3>
                    <p className="text-gray-600 text-xs md:text-lg">
                      12:30 AM - 1:30 PM
                    </p>
                    <p className="text-xs md:text-base text-gray-500">
                      <LocationOnIcon />Silveria Hall and Ground
                    </p>
                    <a
                      href="/"
                      className="text-[#723F14] font-semibold text-sm hover:underline"
                    >
                      See Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative w-10 flex justify-center">
                <div className="h-4 w-4 bg-[#723F14] rounded-full z-10"></div>
                <div className="h-1 w-3 bg-[#723F14] absolute right-6 top-1.5"></div>
              </div>

              <div className="w-1/2"></div>
            </div>

            {/* Marathon */}
            <div className="flex items-center">
              <div className="w-1/2"></div>
              <div className="relative w-10 flex justify-center">
                <div className="h-4 w-4 bg-[#723F14] rounded-full z-10"></div>
                <div className="h-1 w-3 bg-[#723F14] absolute left-6 top-1.5"></div>
              </div>
              <div className="w-1/2 text-left">
                <div className="flex">
                  <div className=" bg-gray-50 rounded-lg shadow-md p-6">
                    <h3 className="text-lg md:text-xl font-bold">Lunch</h3>
                    <p className="text-gray-600 text-xs md:text-lg">
                      1:00 PM - 3:00 PM
                    </p>
                    <p className="text-xs md:text-base text-gray-500">
                      <LocationOnIcon />
                     Silveria Hall and campus ground
                    </p>
                    <a
                      href="/"
                      className="text-[#723F14] font-semibold text-sm hover:underline"
                    >
                      See Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Indore Special Breakfast */}
            <div className="flex items-center">
              <div className="w-1/2 text-right">
                <div className="flex justify-end">
                  <div className=" bg-gray-50 rounded-lg shadow-md p-6">
                    <h3 className="text-lg md:text-xl font-bold">
                      Campus Tour
                    </h3>
                    <p className="text-gray-600 text-xs md:text-lg">
                      2:30 PM - 4:00 PM
                    </p>
                    <p className="text-xs md:text-base text-gray-500">
                      <LocationOnIcon />College Campus
                    </p>
                    <a
                      href="/"
                      className="text-[#723F14] font-semibold text-sm hover:underline"
                    >
                      See Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative w-10 flex justify-center">
                <div className="h-4 w-4 bg-[#723F14] rounded-full z-10"></div>
                <div className="h-1 w-3 bg-[#723F14] absolute right-6 top-1.5"></div>
              </div>
              <div className="w-1/2"></div>
            </div>
          </div>
        </div>
      </div>

    {/* Timeline Section 3*/}
    <div className="px-4 md:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">
            Evening
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">Gala Celebration</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-1/2 w-1 bg-gray-200 h-full transform -translate-x-1/2"></div>
          {/* Timeline Items */}
          <div className="flex flex-col md:space-y-8">
            {/* Zumba Session */}
            <div className="flex items-center">
              <div className="w-1/2 text-right">
                <div className="flex justify-end">
                  <div className="bg-gray-50 rounded-lg shadow-md p-6">
                    <h3 className="text-lg md:text-xl font-bold">
                    Welcome Reception
                    </h3>
                    <p className="text-gray-600 text-xs md:text-lg">
                      7:00 PM - 7:15 PM
                    </p>
                    <p className="text-xs md:text-base text-gray-500">
                      <LocationOnIcon />Silveria Auditorium
                    </p>
                    <a
                      href="/"
                      className="text-[#723F14] font-semibold text-sm hover:underline"
                    >
                      See Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative w-10 flex justify-center">
                <div className="h-4 w-4 bg-[#723F14] rounded-full z-10"></div>
                <div className="h-1 w-3 bg-[#723F14] absolute right-6 top-1.5"></div>
              </div>

              <div className="w-1/2"></div>
            </div>

            {/* Marathon */}
            <div className="flex items-center">
              <div className="w-1/2"></div>
              <div className="relative w-10 flex justify-center">
                <div className="h-4 w-4 bg-[#723F14] rounded-full z-10"></div>
                <div className="h-1 w-3 bg-[#723F14] absolute left-6 top-1.5"></div>
              </div>
              <div className="w-1/2 text-left">
                <div className="flex">
                  <div className=" bg-gray-50 rounded-lg shadow-md p-6">
                    <h3 className="text-lg md:text-xl font-bold">Cultural Performances</h3>
                    <p className="text-gray-600 text-xs md:text-lg">
                      7:15 PM - 8:00 PM
                    </p>
                    <p className="text-xs md:text-base text-gray-500">
                      <LocationOnIcon />
                     Silveria Auditorim
                    </p>
                    <a
                      href="/"
                      className="text-[#723F14] font-semibold text-sm hover:underline"
                    >
                      See Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Indore Special Breakfast */}
            <div className="flex items-center">
              <div className="w-1/2 text-right">
                <div className="flex justify-end">
                  <div className=" bg-gray-50 rounded-lg shadow-md p-6">
                    <h3 className="text-lg md:text-xl font-bold">
                      Falicitation Ceremony
                    </h3>
                    <p className="text-gray-600 text-xs md:text-lg">
                      8:00 PM - 8:15 PM
                    </p>
                    <p className="text-xs md:text-base text-gray-500">
                      <LocationOnIcon />Silveria Auditorium
                    </p>
                    <a
                      href="/"
                      className="text-[#723F14] font-semibold text-sm hover:underline"
                    >
                      See Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative w-10 flex justify-center">
                <div className="h-4 w-4 bg-[#723F14] rounded-full z-10"></div>
                <div className="h-1 w-3 bg-[#723F14] absolute right-6 top-1.5"></div>
              </div>
              <div className="w-1/2"></div>
            </div>

             {/* Marathon */}
             <div className="flex items-center">
              <div className="w-1/2"></div>
              <div className="relative w-10 flex justify-center">
                <div className="h-4 w-4 bg-[#723F14] rounded-full z-10"></div>
                <div className="h-1 w-3 bg-[#723F14] absolute left-6 top-1.5"></div>
              </div>
              <div className="w-1/2 text-left">
                <div className="flex">
                  <div className=" bg-gray-50 rounded-lg shadow-md p-6">
                    <h3 className="text-lg md:text-xl font-bold">Alumni Address and Vote of thanks</h3>
                    <p className="text-gray-600 text-xs md:text-lg">
                      8:30 PM - 8:45 PM
                    </p>
                    <p className="text-xs md:text-base text-gray-500">
                      <LocationOnIcon />
                    Silveria Auditorium
                    </p>
                    <a
                      href="/"
                      className="text-[#723F14] font-semibold text-sm hover:underline"
                    >
                      See Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-1/2 text-right">
                <div className="flex justify-end">
                  <div className=" bg-gray-50 rounded-lg shadow-md p-6">
                    <h3 className="text-lg md:text-xl font-bold">
                      Gala Dinner
                    </h3>
                    <p className="text-gray-600 text-xs md:text-lg">
                      8:45 PM - 10:00 PM
                    </p>
                    <p className="text-xs md:text-base text-gray-500">
                      <LocationOnIcon />Open Air Area Dinner
                    </p>
                    <a
                      href="/"
                      className="text-[#723F14] font-semibold text-sm hover:underline"
                    >
                      See Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative w-10 flex justify-center">
                <div className="h-4 w-4 bg-[#723F14] rounded-full z-10"></div>
                <div className="h-1 w-3 bg-[#723F14] absolute right-6 top-1.5"></div>
              </div>
              <div className="w-1/2"></div>
            </div>

          </div>
        </div>
      </div>

      <div className="flex flex-col text-center md:gap-4 p-3">
        <p className="md:text-3xl text-slate-800 font-sans">Enhancements</p>
        <p className="text-2xl md:text-5xl font-semibold font-poppins mb-2">
         Special Additions to your Day
        </p>
        <p className="text-xs px-6 text-slate-700 md:text-xl">
        From capturing memories to taking home souvenirs, these special 
          additions are here to make your Alumni Day truly memorable.{" "}
        </p>
      </div>

  <div className="px-4 md:px-8 py-8 grid gap-6 md:grid-cols-3">
  {/* Card 1 */}
  <div className="bg-gray-100 rounded-lg shadow-2xl p-6 text-center border border-gray-300">
    <div className="text-[#723F14] text-4xl mb-4">
      <i className="fas fa-store"></i>
    </div>
    <h3 className="text-xl font-bold mb-2">Alumni Souvenir Shop</h3>
    <p className="text-gray-600 mb-4">
      Tell us a bit about yourself so we can prepare a warm welcome.
    </p>
    <p className="text-gray-500 text-sm flex items-center justify-center">
      <i className="fas fa-map-marker-alt mr-2"></i> Near Silveria Hall
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-gray-100 rounded-lg shadow-2xl p-6 text-center border border-gray-300">
    <div className="text-[#723F14] text-4xl mb-4">
      <i className="fas fa-camera"></i>
    </div>
    <h3 className="text-xl font-bold mb-2">Photography & Media Coverage</h3>
    <p className="text-gray-600 mb-4">
      Professional photographers and media will capture the day's memorable
      moments, with special photo booths available for alumni testimonials and
      group photos.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-gray-100 rounded-lg shadow-2xl p-6 text-center border border-gray-300">
    <div className="text-[#723F14] text-4xl mb-4">
      <i className="fas fa-medkit"></i>
    </div>
    <h3 className="text-xl font-bold mb-2">First Aid & Medical Assistance</h3>
    <p className="text-gray-600 mb-4">
      A first aid station is available on campus to assist with any
      health-related concerns, ensuring a safe and comfortable experience for
      all attendees.
    </p>
  </div>
</div>



    </div>
  );
}
