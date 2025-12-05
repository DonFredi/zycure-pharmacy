import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Title from "@/components/ui/Title";

const ContactCard = () => {
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
      <form action="">
        <label htmlFor="name">
          <span className="text-sm font-medium text-foreground">Name</span>
          <Input type="text" placeholder="Enter your name" />
        </label>

        <label htmlFor="email">
          <span className="text-sm font-medium text-foreground">Email</span>
          <Input type="text" placeholder="Enter your email" />
        </label>

        <label htmlFor="message">Message</label>
        <Textarea id="message" rows={8} className="h-32" placeholder="Enter your message..." />

        <Button className="mt-2">Submit</Button>
      </form>
    </div>
  );
};
export default ContactCard;
