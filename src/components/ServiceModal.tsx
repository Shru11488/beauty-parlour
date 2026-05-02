"use client";

import { useState, useEffect } from "react";

type ServiceOption = {
  name: string;
  price: string;
};

type Service = {
  title: string;
  options: ServiceOption[];
};

type Props = {
  service: Service | null;
  onClose: () => void;
  onBook: (selectedServices: string[]) => void;
};

export default function ServiceModal({ service, onClose, onBook }: Props) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    setSelectedOptions([]); // reset when switching category
  }, [service]);

  if (!service) return null;

  const handleSelect = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">{service.title}</h2>

        {service.options.map((opt, i) => (
          <div
            key={i}
            onClick={() => handleSelect(opt.name)}
            className={`flex justify-between p-2 border-b cursor-pointer rounded
              ${
                selectedOptions.includes(opt.name)
                  ? "bg-yellow-100"
                  : "hover:bg-gray-50"
              }`}
          >
            <span>{opt.name}</span>
            <span>{opt.price}</span>
          </div>
        ))}

        <button
          disabled={selectedOptions.length === 0}
          onClick={() => {
            onBook(selectedOptions); // send to parent
            setSelectedOptions([]); // reset local
          }}
          className="mt-4 w-full bg-yellow-500 py-2 rounded disabled:opacity-50"
        >
          Add to Booking
        </button>

        <button onClick={onClose} className="mt-2 text-sm block mx-auto">
          Close
        </button>
      </div>
    </div>
  );
}
