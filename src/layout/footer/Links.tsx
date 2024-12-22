import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

interface allLinksProps {
  href: string;
  icon: JSX.Element;
  hoverColor: string;
  label: string;
  title?: string;
}

const links: Array<allLinksProps> = [
  {
    href: "https://www.linkedin.com/in/antonious-nasr-a20887196",
    label: "LinkedIn Profile",
    icon: <FaLinkedin />,
    hoverColor: "hover:text-[#0077B5] dark:hover:text-[#0077B5]",
  },
  {
    href: "https://github.com/ANT0NI0US",
    label: "GitHub Profile",
    icon: <FaGithub />,
    hoverColor: "hover:text-black dark:hover:text-black",
  },
  {
    href: "http://wa.me/+201285551479",
    title: "+201285551479",
    label: "WhatsApp",
    icon: <FaWhatsapp />,
    hoverColor: "hover:text-[#25D366] dark:hover:text-[#25D366]",
  },
];

export default function Links() {
  return (
    <div className="flexCenter gap-2">
      {links.map(({ href, label, icon, title, hoverColor }: allLinksProps) => (
        <a
          key={href}
          href={href}
          title={title ? title : href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <div
            className={`text-3xl text-primary-color-light transition-all delay-200 duration-300 dark:text-primary-color ${hoverColor}`}
          >
            {icon}
          </div>
        </a>
      ))}
    </div>
  );
}
