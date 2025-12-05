"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Title from "@/components/ui/Title";
import useContactForm from "@/hooks/useContactForm";

const ContactCard = () => {
  const { values, errors, loading, success, handleChange, handleSubmit } = useContactForm();

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span className="text-sm font-medium text-foreground">Name</span>
          <Input type="text" placeholder="Enter your name" name="name" value={values.name} onChange={handleChange} />
        </label>

        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

        <label htmlFor="email">
          <span className="text-sm font-medium text-foreground">Email</span>
          <Input type="text" placeholder="Enter your email" name="email" value={values.email} onChange={handleChange} />
        </label>

        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

        <label htmlFor="message">Message</label>
        <Textarea
          id="message"
          rows={8}
          className="h-32"
          placeholder="Enter your message..."
          name="message"
          value={values.message}
          onChange={handleChange}
        />
        {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}

        <Button className="mt-2" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </Button>
        {success && <p className="text-green-500 text-sm mt-2">Message sent successfully!</p>}
      </form>
    </div>
  );
};
export default ContactCard;
