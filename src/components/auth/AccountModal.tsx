import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import AuthHeader from "./AuthHeader";
import GoogleButton from "./GoogleButton";
import Divider from "./Divider";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ForgotPassword from "./ForgotPassword";

type AuthMode = "login" | "signup" | "forgot";

interface AccountModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AccountModal({ open, onClose }: AccountModalProps) {
  const [mode, setMode] = useState<AuthMode>("login");

  // Close with ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="relative w-full  max-w-md rounded-3xl bg-[#FDFBF7] p-8 shadow-2xl"
          >
            <AuthHeader
              title="Welcome Back"
              subtitle="Continue your craftsmanship journey"
              onClose={onClose}
            />

            <GoogleButton onSuccess={onClose} />

            <Divider />

            {/* Email Login (Next Step) */}

            <AnimatePresence mode="wait">
              {mode === "login" && (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                >
                  <LoginForm
                    onSuccess={onClose}
                    onForgotPassword={() => setMode("forgot")}
                  />
                </motion.div>
              )}

              {mode === "signup" && (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                >
                  <SignupForm onSuccess={onClose} />
                </motion.div>
              )}

              {mode === "forgot" && (
                <motion.div
                  key="forgot"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                >
                  <ForgotPassword onBack={() => setMode("login")} />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="mt-6 text-center">
              {mode === "login" ? (
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <button
                    onClick={() => setMode("signup")}
                    className="font-semibold text-[#C79A3B] hover:underline"
                  >
                    Create Account
                  </button>
                </p>
              ) : (
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <button
                    onClick={() => setMode("login")}
                    className="font-semibold text-[#C79A3B] hover:underline"
                  >
                    Sign In
                  </button>
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
