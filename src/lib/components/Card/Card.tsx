import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  imgSrc?: string;
  href?: string;
}

const Card = ({ title, description, imgSrc, href }: CardProps) => (
  <div className="md p-4 bg-green-500" style={{ maxWidth: "1000px" }}>
    <button className="bg-purple-500 border border-blue-500 text-white text-2xl uppercase p-6 rounded-md m-4 transition-colors hover:bg-purple-800 hover:border-blue-200 hover:text-gray-200">
      Click me!
    </button>
    <div
      className={`${
        imgSrc && "h-full"
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700 bg-green-500`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
          {description}
        </p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default Card;
