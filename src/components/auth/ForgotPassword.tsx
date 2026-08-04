import { useState } from "react";
import { resetPassword } from "../../firebase/auth";

interface Props {
  onBack: () => void;
}

export default function ForgotPassword({ onBack }: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");
    setMessage("");

    try {
      setLoading(true);

      await resetPassword(email);

      setMessage(
        "Password reset email sent. Please check your inbox."
      );
    } catch {
      setError("Unable to send reset email.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <div>
        <label className="mb-2 block text-sm font-medium">
          Email Address
        </label>

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-[#C79A3B]"
        />
      </div>

      {message && (
        <p className="text-green-600 text-sm">
          {message}
        </p>
      )}

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[#2F2115] py-3 text-white font-medium hover:bg-[#4A3523]"
      >
        {loading ? "Sending..." : "Send Reset Link"}
      </button>

      <button
        type="button"
        onClick={onBack}
        className="w-full text-[#C79A3B] font-medium"
      >
        Back to Sign In
      </button>

    </form>
  );
}