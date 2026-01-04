"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Title from "@/components/ui/Title";
import useContactForm from "@/hooks/useContactForm";

const ContactCard = () => {
  const { register, handleSubmit, onSubmit, errors, loading, success } = useContactForm();

  return (
    <div className="flex flex-col items-left gap-2.5 px-6 py-4">
      <Title
        text="Send us a message"
        as="h2"
        size="xxl"
        align="left"
        color="text-foreground"
        className="text-xl font-bold"
      />

      <p>Send us a message and we will get back to you as soon as possible.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {/* Name */}
        <label>
          <span className="text-sm font-medium">Name</span>
          <Input placeholder="Enter your name" {...register("name", { required: "Name is required" })} />
        </label>
        {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}

        {/* Email */}
        <label>
          <span className="text-sm font-medium">Email</span>
          <Input
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            })}
          />
        </label>
        {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}

        {/* Message */}
        <label>
          <span className="text-sm font-medium">Message</span>
          <Textarea
            rows={8}
            className="h-32"
            placeholder="Enter your message..."
            {...register("message", {
              required: "Message cannot be empty",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
          />
        </label>
        {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}

        <Button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </Button>

        {success && <p className="text-green-500 text-sm mt-2">Message sent successfully!</p>}
      </form>
    </div>
  );
};

export default ContactCard;
