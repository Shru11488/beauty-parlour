"use client";

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
  onBook: () => void;
};

export default function ServiceModal({ service, onClose, onBook }: Props) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">{service.title}</h2>

        <div className="space-y-3">
          {service.options.map((opt, i) => (
            <div key={i} className="flex justify-between border-b pb-2">
              <span>{opt.name}</span>
              <span className="text-[#D4AF37]">{opt.price}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onBook}
          className="mt-6 w-full bg-[#D4AF37] py-2 rounded-full font-medium"
        >
          Book This Service
        </button>

        <button
          onClick={onClose}
          className="mt-3 text-sm text-gray-500 block mx-auto"
        >
          Close
        </button>
      </div>
    </div>
  );
}
