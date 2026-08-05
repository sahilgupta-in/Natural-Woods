import { useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
      console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
      console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          product: form.product,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSuccessMessage(
        "Thank you! Your customization request has been received. We'll review your requirements and get back to you within 24–48 hours.",
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        product: "",
        message: "",
      });
    } catch (error: any) {
      console.error("EmailJS Error:", error);

      if (error?.text) {
        alert(error.text);
      } else {
        alert("Failed to send request.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4">
            <h3 className="text-2xl font-semibold text-[#2F2115] sm:text-3xl">
              Customize
            </h3>
          </div>

          <h2 className="mt-2 text-4xl font-bold text-[#2F2115] sm:text-5xl lg:text-6xl">
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
                <span className="min-w-[70px] text-5xl font-bold text-[#E8E2D8] lg:text-6xl">
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

            {successMessage && (
              <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
                <h4 className="font-semibold text-lg">
                  ✓ Request Sent Successfully!
                </h4>
                <p className="mt-2 text-sm">{successMessage}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#C79A3B]"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#C79A3B]"
              />

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="w-full border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#C79A3B]"
              />

              <select
                name="product"
                value={form.product}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#C79A3B]"
              >
                <option value="">Select Product</option>
                <option value="Paintings">Paintings</option>
                <option value="Wall Art">Wall Art</option>
                <option value="Sculptures">Sculptures</option>
              </select>

              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your customization..."
                required
                className="w-full resize-none border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#C79A3B]"
              />

              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-[#C79A3B] px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-[#A87A2E] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
