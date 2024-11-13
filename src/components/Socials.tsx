import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/MahdiPourkeshavarz",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/mahdi-pourkeshavarz-7b335327b",
  },
  {
    icon: <FaTelegram />,
    path: "https://t.me/Mahdikeshavrz",
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
