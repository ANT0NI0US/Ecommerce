import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail, MdSms } from "react-icons/md";

interface allContactsProps {
  href: string;
  icon: JSX.Element;
  text: string;
  rel?: string;
  target?: string;
  title: string;
}

const allContacts: Array<allContactsProps> = [
  {
    title: "Email",
    href: "mailto:antoniousnasr3@gmail.com",
    icon: <MdEmail />,
    text: "antoniousnasr3@gmail.com",
  },
  {
    title: "SMS",
    href: "sms:+201285551479",
    icon: <MdSms />,
    text: "+201285551479",
  },
  {
    title: "Phone",
    href: "tel:+201285551479",
    icon: <FaPhone />,
    text: "+201285551479",
  },
  {
    title: "Address",
    href: "https://www.google.com/maps/place/my+home/@31.264949,29.9993177,21z/data=!4m6!3m5!1s0x14f5db7ecddbda23:0x5a34faff355c357!8m2!3d31.2650278!4d29.9994472!16s%2Fg%2F11p4blgp_l?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D",
    icon: <FaLocationDot />,
    text: "Egypt, Alexandria, Behind the Academy Street",
    rel: "noopener noreferrer",
    target: "_blank",
  },
];

export default function ContactInformation() {
  return (
    <div className="flex w-full flex-col gap-10 rounded-md p-6 shadow-md dark:shadow-secondary-color sm:basis-1/3 sm:gap-8">
      {allContacts.map(
        ({ title, href, icon, text, target, rel }: allContactsProps) => (
          <a
            key={href}
            href={href}
            target={target || undefined}
            rel={rel || undefined}
            className="mx-auto flex w-fit flex-col items-center gap-1 sm:mx-0 sm:flex-row sm:items-start sm:gap-3"
          >
            <div className="text-[40px] text-orange-color-light dark:text-orange-color">
              {icon}
            </div>
            <div className="space-y-2 text-center sm:text-start">
              <h3 className="text-xl font-extrabold text-orange-color-light dark:text-orange-color">
                {title}
              </h3>
              <p>{text}</p>
            </div>
          </a>
        ),
      )}
    </div>
  );
}
