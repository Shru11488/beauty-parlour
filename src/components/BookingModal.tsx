"use client";

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

type FormData = {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
};

export default function BookingModal({
  isOpen,
  onClose,
  selectedService,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedService: string | null;
}) {
  const { register, handleSubmit, reset, setValue, watch } = useForm<FormData>({
    defaultValues: {
      service: selectedService || "",
      time: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const selectedTime = watch("time");

  // ✅ Auto-fill service
  useEffect(() => {
    if (selectedService) {
      setValue("service", selectedService);
    }
  }, [selectedService, setValue]);

  if (!isOpen) return null;

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    await new Promise((res) => setTimeout(res, 1000));

    // ✅ Store locally (temporary backend)
    const existing = JSON.parse(localStorage.getItem("bookings") || "[]");
    localStorage.setItem("bookings", JSON.stringify([...existing, data]));

    console.log("Booking:", data);

    setLoading(false);
    setSuccess(true);
    reset();

    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2000);
  };

  // ✅ Time slots
  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#F8F5F2] border border-gray-200 w-full max-w-md rounded-2xl p-6 shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Book Appointment
        </h2>

        {success ? (
          <p className="text-green-600 text-center font-medium">
            Booking Successful!
          </p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />

            <input
              {...register("phone", { required: true })}
              placeholder="Phone Number"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />

            {/* Service */}
            <select
              {...register("service", { required: true })}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <option value="">Select Service</option>
              <option>Bridal Makeup</option>
              <option>Hair Styling</option>
              <option>Facials</option>
              <option>Nail Art</option>
              <option>Manicure</option>
              <option>Pedicure</option>
            </select>

            {/* Date */}
            <input
              type="date"
              {...register("date", { required: true })}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />

            {/* Time Slots */}
            <div>
              <p className="text-sm font-medium mb-2">Select Time</p>

              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setValue("time", slot)}
                    className={`border rounded-lg py-2 text-sm transition ${
                      selectedTime === slot
                        ? "bg-[#D4AF37] text-black"
                        : "hover:bg-[#D4AF37] hover:text-black"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Hidden input to register time */}
            <input type="hidden" {...register("time", { required: true })} />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D4AF37] py-3 rounded-full font-medium hover:scale-105 transition"
            >
              {loading ? "Booking..." : "Confirm Booking"}
            </button>
          </form>
        )}

        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 block mx-auto"
        >
          Close
        </button>
      </div>
    </div>
  );
}
