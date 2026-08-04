import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "../../firebase/auth";

interface Props {
  onSuccess: () => void;
}

export default function GoogleButton({ onSuccess }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    try {
      setLoading(true);

      await signInWithGoogle();

      onSuccess();
    } catch (err) {
      console.error(err);
      alert("Unable to sign in.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleLogin}
      disabled={loading}
      className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-5 py-3 font-medium transition hover:bg-[#F8F4EC] disabled:opacity-60"
    >
      <FcGoogle size={24} />

      {loading ? "Signing in..." : "Continue with Google"}
    </button>
  );
}