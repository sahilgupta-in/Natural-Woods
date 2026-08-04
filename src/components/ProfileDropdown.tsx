import { LogOut } from "lucide-react";

import { useAuth } from "../context/AuthContext";
import { logout } from "../firebase/auth";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ProfileDropdown({ open, onClose }: Props) {
  const { user } = useAuth();

  if (!open || !user) return null;

  async function handleLogout() {
    await logout();
    onClose();
  }

  return (
    <div className="absolute right-0 top-14 z-50 w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
      {/* User Info */}
      <div className="border-b p-6">
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.displayName ?? ""}
            className="mx-auto h-16 w-16 rounded-full object-cover"
          />
        ) : (
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2F2115] text-xl font-bold text-white">
            {(
              user.displayName?.charAt(0) ??
              user.email?.charAt(0) ??
              "U"
            ).toUpperCase()}
          </div>
        )}

        <h3 className="mt-4 text-center text-lg font-semibold text-[#2F2115]">
          {user.displayName || "Natural Woods Customer"}
        </h3>

        <p className="mt-1 text-center text-sm text-gray-500">
          {user.email}
        </p>
      </div>

      {/* Logout */}
      <div className="p-2">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-[#2F2115] transition hover:bg-red-50 hover:text-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}