import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";

export default function SubscribeForm() {
  const [status, setStatus] = useState("");

  // use our custom hook instead of useState directly
  const [firstNameInputProps, resetFirstName] = useFormInput("Mary");
  const [lastNameInputProps, resetLastName] = useFormInput("steve");
  const [emailInputProps, resetEmail] = useFormInput("mary@pop.com");
  function handleSubscribe() {
    resetFirstName();
    resetLastName();
    resetEmail();
    setStatus("Thanks for subscribing!");
  }

  return (
    <div className="SubscribeForm componentBox">
      <label>
        First name: <input {...firstNameInputProps} />
      </label>
      <label>
        Last name: <input {...lastNameInputProps} />
      </label>
      <label>
        Email: <input {...emailInputProps} />
      </label>

      <button onClick={handleSubscribe}>Subscribe</button>
      <div>{status}</div>
    </div>
  );
}
