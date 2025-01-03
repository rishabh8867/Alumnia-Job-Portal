import React, { useContext, useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { CircularProgress } from "@mui/material";
import { DataContext } from "../context/DataProvider";

export default function RegistrationForm({ setOpen }) {
  const [err, setErr] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    graduationYear: "",
    mobileNumber: "",
    email: "",
  });
  const [step, setStep] = useState(1);

  const currentYear = new Date().getFullYear();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (err) {
      setErr("");
    }
  };

  const handleProceed = () => {
    if (
      formData.name &&
      formData.graduationYear &&
      formData.mobileNumber &&
      formData.email
    ) {
      setStep(2);
    } else {
      setErr("Please fill in all required fields");
    }
  };

  return (
    <div className="bg-white text-slate-800 p-4 md:p-8 rounded-lg shadow-md max-w-xs md:max-w-4xl w-full">
      {step === 1 && (
        <>
          <h2 className="text-xl md:text-4xl font-bold text-center mb-2 md:mb-6">
            72nd Alumni Day Registration
          </h2>
          <form className="flex flex-col md:grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile number
              </label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Graduation Year
              </label>
              <input
                type="number"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                required
              />
            </div>
            {err && <div className="text-red-500 text-xs mt-1">{err}</div>}
            <div className="col-span-2 flex justify-center mt-4">
              <button
                type="button"
                onClick={handleProceed}
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Proceed <ArrowForwardIcon />
              </button>
            </div>
          </form>
        </>
      )}
      {step === 2 && (
        <>
          {formData.graduationYear > currentYear ? (
            <StudentForm formData={formData} setOpen={setOpen} />
          ) : (
            <AlumniForm formData={formData} setOpen={setOpen}/>
          )}
        </>
      )}
    </div>
  );
}

function StudentForm({ formData,setOpen }) {
  const [events, setEvents] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [loading, setLoading] = useState(false);
  const [eventGuests, setEventGuests] = useState({
    "Marathon": 0,
    "Alumni Family Connect": 0,
    "Gala Dinner & Cultural Program": 0,
  });
  const {setReceiptData,setPaymentDone}=useContext(DataContext);

  const eventCosts = {
    "Marathon": 100,
    "Alumni Family Connect": 200,
    "Gala Dinner & Cultural Program": 200,
  };

  const handlePayNow = async () => {
    setLoading(true);
  
    try {
      // Filter eventGuests to only include events with more than 0 guests
      const filteredEventGuests = Object.fromEntries(
        Object.entries(eventGuests).filter(([event, guests]) => guests > 0)
      );
  
      const payload = {
        formData,       // All form data including name, mobile, email, etc.
        events,         // List of selected events
        totalCost,      // Total cost to pay
        eventGuests: filteredEventGuests // Only events with more than 0 guests
      };
  
      console.log(payload);
      setReceiptData(payload);
  
      // const response = await axios.post("your-api-endpoint", payload);
  
      // if (response.status === 200) {
        setPaymentDone(true);
        setOpen(false);
      //   console.log("Payment successful", response.data);
      // } else {
      //   // Handle failure
      //   console.error("Payment failed", response.data);
      // }
    } catch (error) {
      console.error("Error in payment API", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    let cost = 0;
    events.forEach((event) => {
      cost += eventCosts[event];
    });
    setTotalCost(cost);
  }, [events]);

  const handleEventChange = (e) => {
    const { value, checked } = e.target;

    // Update eventGuests when checkbox is checked or unchecked
    setEventGuests((prevState) => ({
      ...prevState,
      [value]: checked ? 1 : 0,  // Set 1 if checked, 0 if unchecked
    }));

    // Update events list based on checkbox state
    setEvents((prevEvents) =>
      checked ? [...prevEvents, value] : prevEvents.filter((event) => event !== value)
    );
  };

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Select Events to participate</FormLabel>

        <div className="mt-4">
          <FormControlLabel
            control={
              <Checkbox
                checked={events.includes("Marathon")}
                onChange={handleEventChange}
                name="Marathon"
                value="Marathon"
              />
            }
            label="Marathon (Rs. 100/per person)"
          />
        </div>

        <div className="mt-4">
          <FormControlLabel
            control={
              <Checkbox
                checked={events.includes("Alumni Family Connect")}
                onChange={handleEventChange}
                name="Alumni Family Connect"
                value="Alumni Family Connect"
              />
            }
            label="Alumni Family Connect,Lunch(Rs. 200/per person)"
          />
        </div>

        <div className="mt-4">
          <FormControlLabel
            control={
              <Checkbox
                checked={events.includes("Gala Dinner & Cultural Program")}
                onChange={handleEventChange}
                name="Gala Dinner & Cultural Program"
                value="Gala Dinner & Cultural Program"
              />
            }
            label="Gala Dinner & Cultural Program (Rs. 200/individual)"
          />
        </div>
      </FormControl>

      <div className="mt-4 font-poppins">
        <h2>
          Total Cost to Pay: Rs. <b>{totalCost}</b>{" "}
        </h2>
      </div>

      <div className="mt-6">
        <button
          disabled={loading}
          type="button"
          onClick={handlePayNow}
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            <span>
              Pay Now <CurrencyRupeeIcon />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

function AlumniForm({ formData, setOpen }) {
  const [isBringingGuest, setIsBringingGuest] = useState(false);
  const [loading, setLoading] = useState(false);
  const [eventGuests, setEventGuests] = useState({
    "Marathon": 0,
    "Alumni Family Connect": 0,
    "Gala Dinner & Cultural Program": 0,
  });
  const [events, setEvents] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const { setReceiptData, setPaymentDone } = useContext(DataContext);

  const eventCosts = {
    "Marathon": 200,
    "Alumni Family Connect": 1000,
    "Gala Dinner & Cultural Program": 500,
  };

  const handlePayNow = async () => {
    setLoading(true);
    try {
      const filteredEventGuests = Object.fromEntries(
        Object.entries(eventGuests).filter(([_, guests]) => guests > 0)
      );

      const payload = {
        formData,
        events,
        totalCost,
        eventGuests: filteredEventGuests,
      };

      console.log(payload); // Simulate API payload
      setReceiptData(payload);

      // Simulate successful API call
      setPaymentDone(true);
      setOpen(false);
    } catch (error) {
      console.error("Error in payment API", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let cost = 0;

    events.forEach((event) => {
      const guestCount = eventGuests[event] || 0;

      if (event === "Marathon") {
        cost += eventCosts[event] * guestCount;
      } else if (event === "Alumni Family Connect") {
        cost += eventCosts[event] * guestCount;
      } else if (event === "Gala Dinner & Cultural Program") {
        cost += eventCosts[event] + 300 * (guestCount - 1);
      }
    });

    setTotalCost(cost);
  }, [events, eventGuests]);

  const handleEventChange = (e) => {
    const { value, checked } = e.target;

    setEvents((prevEvents) =>
      checked ? [...prevEvents, value] : prevEvents.filter((event) => event !== value)
    );

    setEventGuests((prevGuests) => ({
      ...prevGuests,
      [value]: checked ? (isBringingGuest ? prevGuests[value] || 1 : 1) : 0,
    }));
  };

  const handleGuestChange = (event, eventName) => {
    const { value } = event.target;
    setEventGuests((prevGuests) => ({
      ...prevGuests,
      [eventName]: Number(value),
    }));
  };

  const handleBringingGuestChange = (e) => {
    const bringingGuest = e.target.value === "yes";
    setIsBringingGuest(bringingGuest);

    setEventGuests((prevGuests) => {
      const updatedGuests = { ...prevGuests };
      events.forEach((event) => {
        updatedGuests[event] = bringingGuest ? prevGuests[event] || 1 : 1;
      });
      return updatedGuests;
    });
  };

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Is there anyone else coming with you?</FormLabel>
        <RadioGroup
          row
          aria-label="isBringingGuest"
          name="isBringingGuest"
          value={isBringingGuest ? "yes" : "no"}
          onChange={handleBringingGuestChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      {/* Event Options */}
      {Object.keys(eventCosts).map((eventName) => (
        <div className="mt-4" key={eventName}>
          <FormControlLabel
            control={
              <Checkbox
                checked={events.includes(eventName)}
                onChange={handleEventChange}
                name={eventName}
                value={eventName}
              />
            }
            label={`${eventName} (Rs. ${eventCosts[eventName]}${eventName === "Gala Dinner & Cultural Program" ? " + Rs.300 for each additional family member" : ""})`}
          />
          {events.includes(eventName) && isBringingGuest && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Number of Guests</label>
              <input
                type="number"
                name={`numberOfGuests${eventName}`}
                value={eventGuests[eventName]}
                onChange={(e) => handleGuestChange(e, eventName)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                min="1"
              />
            </div>
          )}
        </div>
      ))}

      <div className="mt-4 font-poppins">
        <h2>
          Total Cost to Pay: Rs. <b>{totalCost}</b>
        </h2>
      </div>

      <div className="mt-6">
        <button
          disabled={loading}
          onClick={handlePayNow}
          type="button"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : <span>Pay Now <CurrencyRupeeIcon /></span>}
        </button>
      </div>
    </div>
  );
}

  
