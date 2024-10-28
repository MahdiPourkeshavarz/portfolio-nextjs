import { Icon } from "@radix-ui/react-select";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedin />,
    path: "",
  },
  {
    icon: <FaYoutube />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
];

export function Socials({ containerStyles, iconStyles }) {
  return (
    <>
      <div className={containerStyles}>
        {socials.map((social, index) => {
          return (
            <Link href={social.path} key={index} className={iconStyles}>
              {social.icon}
            </Link>
          );
        })}
      </div>
    </>
  );
}
