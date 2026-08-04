import { FileText, BadgeIndianRupee, Paintbrush } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Fill the Form",
    description:
      "Share your artwork idea, dimensions, wood type and preferred finish.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Receive Quote",
    description:
      "Our team will review your request and send you a detailed quotation.",
    icon: BadgeIndianRupee,
  },
  {
    number: "03",
    title: "We Craft It",
    description:
      "Once approved, our artisans begin crafting your custom masterpiece.",
    icon: Paintbrush,
  },
];

export default function CustomizeArt() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#2F2115]">
              Customize
            </h3>
          </div>

          <h2 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2F2115]">
            Your Wooden Art
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Tell us your requirements and our artisans will craft a unique
            wooden masterpiece exclusively for you.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Section */}
          <div className="space-y-12">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <div key={number} className="flex gap-6">
                <span className="min-w-[70px] text-5xl lg:text-6xl font-bold text-[#E8E2D8]">
                  {number}
                </span>

                <div>
                  <Icon
                    size={38}
                    className="mb-4 text-[#C79A3B]"
                    strokeWidth={1.8}
                  />

                  <h3 className="text-2xl font-semibold text-[#2F2115]">
                    {title}
                  </h3>

                  <p className="mt-2 leading-7 text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="rounded-2xl bg-[#F8F4EC] p-8 shadow-lg lg:p-10">
            <h3 className="mb-8 text-3xl font-semibold text-[#2F2115]">
              Customize Your Art
            </h3>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#C79A3B]"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#C79A3B]"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#C79A3B]"
              />

              <select className="w-full border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#C79A3B]">
                <option>Select Product</option>
                <option>Paintings</option>
                <option>Wall Art</option>
                <option>Sculptures</option>
                
              </select>

              <textarea
                rows={5}
                placeholder="Describe your customization..."
                className="w-full resize-none border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#C79A3B]"
              />

              <button
                type="submit"
                className="rounded-full bg-[#C79A3B] px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-[#A87A2E]"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
