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

interface props {
  containerStyles: string;
  iconStyles: string;
}

export function Socials({ containerStyles, iconStyles }: props) {
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
