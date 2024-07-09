"use client";
import Signup from "@/actions/auth-action";
import Link from "next/link";

import { useFormState } from "react-dom";

export default function AuthForm() {
  const [formState, useFormAction] = useFormState(Signup, {});

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
        {formState.error &&
          Object.keys(formState.error).map((error) => {
            return <li key={error}>{formState.error[error]}</li>;
          })}
      </ul>
      <p>
        <button type="submit">Create Account</button>
      </p>

      <p>
        <Link href="/">Login with existing account.</Link>
      </p>
    </form>
  );
}
