"use client";
import { signup } from "@/actions/auth-action";
import Link from "next/link";

import { useFormState } from "react-dom";

export default function AuthForm({ mode }) {
  const [formState, useFormAction] = useFormState(signup, {});
  return (
    <form id="auth-form" action={useFormAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>

      <ul id="form-errors">
        {formState.errors &&
          Object.keys(formState.errors).map((error) => {
            return <li key={error}>{formState.errors[error]}</li>;
          })}
      </ul>
      <p>
        <button type="submit">
          {mode === "login" ? "login" : "Create Account"}
        </button>
      </p>

      <p>
        {mode === "login" && <Link href="/?mode=signUp"> Create account</Link>}
        {mode === "signUp" && (
          <Link href="/?mode=login">Login with existing account..</Link>
        )}
      </p>
    </form>
  );
}
