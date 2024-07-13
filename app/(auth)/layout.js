import { logout } from "@/actions/auth-action";
import "../globals.css";

export const metadata = {
  title: "Next Auth",
  description: "Next.js Authentication",
};

export default function AuthLayout({ children }) {
  return (
    <>
      <header id="auth-header">
        <p>Hello there</p>
        <form action={logout}>
          <button>logout</button>
        </form>
      </header>
      {children}
    </>
  );
}
