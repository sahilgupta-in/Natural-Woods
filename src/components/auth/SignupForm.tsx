import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signupWithEmail } from "../../firebase/auth";

interface Props {
  onSuccess: () => void;
}

export default function SignupForm({ onSuccess }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      await signupWithEmail(email, password);

      onSuccess();
    } catch {
      setError("Unable to create account.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label>Name</label>

        <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div>
        <label>Email</label>

        <input
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div>

        <label>Password</label>

        <div className="relative">

          <input
            type={showPassword ? "text":"password"}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full rounded-xl border p-3 pr-12"
          />

          <button
            type="button"
            onClick={()=>setShowPassword(!showPassword)}
            className="absolute right-4 top-4"
          >
            {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
          </button>

        </div>

      </div>

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}

      <button
        className="w-full rounded-xl bg-[#2F2115] py-3 text-white"
      >
        {loading ? "Creating..." : "Create Account"}
      </button>

    </form>
  );
}