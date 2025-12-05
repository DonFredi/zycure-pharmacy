"use client";
import { useState } from "react";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function useContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: any = {};

    if (!values.name.trim()) newErrors.name = "Name is required";

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!values.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Failed to send email");

      setSuccess(true);
      setValues({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    values,
    errors,
    loading,
    success,
    handleChange,
    handleSubmit,
  };
}
