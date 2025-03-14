"use client";
import { motion } from "motion/react";
import { Rubik_Glitch } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const main = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const Card: React.FC<Props> = ({
  title,
  description,
  imageUrl,
  projectUrl,
}) => {
  return (
    <motion.div
      id={`Card.${title}`}
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{ duration: 1.5, type: "spring" }}
      className="h-auto w-full max-w-xs overflow-hidden rounded-lg border-2 backdrop-blur-md"
    >
      <Image
        src={imageUrl}
        alt={title}
        className="h-36 w-full object-cover"
        width={400}
        height={400}
      />
      <div className="p-4">
        <div
          className={`text-center text-white ${main.className} text-lg`}
          id={`title.${title}`}
        >
          {title}
        </div>
        <div
          className="mt-2 text-center text-sm font-bold text-white"
          id={`description.${title}`}
        >
          {description}
        </div>
        <div className="mt-4 text-center">
          <Link
            href={projectUrl}
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full rounded-lg bg-blue-500 p-2 text-center text-white"
          >
            View Project
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
