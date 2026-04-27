"use client";

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

type FormData = {
  name: string;
  phone: string;
  service: string;
  date: string;
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
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      service: selectedService || "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ THIS IS THE KEY PART (auto-fill sync)
  useEffect(() => {
    if (selectedService) {
      reset((prev) => ({
        ...prev,
        service: selectedService,
      }));
    }
  }, [selectedService, reset]);

  if (!isOpen) return null;

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    await new Promise((res) => setTimeout(res, 1200));

    console.log("Booking:", data);

    setLoading(false);
    setSuccess(true);
    reset();

    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl">
        <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>

        {success ? (
          <p className="text-green-600 text-center font-medium">
            Booking Successful!
          </p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="w-full border p-2 rounded"
            />

            <input
              {...register("phone", { required: true })}
              placeholder="Phone Number"
              className="w-full border p-2 rounded"
            />

            {/* ✅ UPDATED SELECT */}
            <select
              {...register("service")}
              className="w-full border p-2 rounded"
            >
              <option value="">Select Service</option>
              <option>Bridal Makeup</option>
              <option>Hair Styling</option>
              <option>Facials</option>
              <option>Nail Art</option>
              <option>Manicure</option>
              <option>Pedicure</option>
            </select>

            <input
              type="date"
              {...register("date")}
              className="w-full border p-2 rounded"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D4AF37] py-2 rounded-full font-medium"
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
