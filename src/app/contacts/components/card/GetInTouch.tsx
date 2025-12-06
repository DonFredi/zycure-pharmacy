import Title from "@/components/ui/Title";
import { contacts } from "@/data/contacts";

const GetInTouch = () => {
  return (
    <div className="p-3 max-w-[525px] gap-5 flex flex-col items-left">
      <Title
        text="Get in touch"
        as="h2"
        size="xxl"
        align="left"
        color="text-foreground"
        className="text-xl font-bold"
      />
      <p>
        Whether you have questions about your prescription, need guidance on medication use, or want to learn more about
        our products and services, our friendly team is ready to assist you.
      </p>
      <div className="flex flex-col gap-2 w-full">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href="/products"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-4 items-center my-1"
          >
            <div className="w-fit h-fit bg-neutral rounded-full flex flex-col items-center p-2 text-primary">
              {contact.icon}
            </div>
            <span>{contact.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
export default GetInTouch;
