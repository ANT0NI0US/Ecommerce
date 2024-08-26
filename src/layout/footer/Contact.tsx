import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

interface allContactsProps {
  icon: JSX.Element;
  text: string;
}

const iconStyle: string = "text-3xl sm:text-2xl";

const allContacts: Array<allContactsProps> = [
  { icon: <FaLocationDot className={iconStyle} />, text: "Alexandria , Egypt" },
  { icon: <FaPhone className={iconStyle} />, text: "01285551479" },
  { icon: <MdEmail className={iconStyle} />, text: "antoniousnasr3@gmail.com" },
];

export default function Contact() {
  return (
    <div className="flex flex-col items-center gap-[15px] sm:items-start">
      <h4 className="text-orange-color mb-3 text-xl font-extrabold">Contact</h4>
      <div className="flex flex-col gap-4">
        {allContacts.map((contact: allContactsProps) => (
          <div
            key={contact.text}
            className="flex flex-col items-center gap-[15px] sm:flex-row"
          >
            {contact.icon}
            <span>{contact.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
