import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { loginWithEmail } from "../../firebase/auth";

interface Props {
  onSuccess: () => void;
  onForgotPassword: () => void;
}

export default function LoginForm({ onSuccess, onForgotPassword }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      await loginWithEmail(email, password);

      onSuccess();
    } catch {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium">Email</label>

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-[#C79A3B]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Password</label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border p-3 pr-12 outline-none focus:ring-2 focus:ring-[#C79A3B]"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-4"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onForgotPassword}
          className="text-sm text-[#C79A3B] hover:underline"
        >
          Forgot Password?
        </button>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[#2F2115] py-3 font-medium text-white hover:bg-[#4A3523] disabled:opacity-60"
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}
