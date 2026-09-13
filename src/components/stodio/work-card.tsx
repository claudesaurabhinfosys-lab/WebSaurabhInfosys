import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  title: string;
  service: string;
  image: string;
  priority?: boolean;
};

/** One project tile: rounded thumbnail, name left, discipline right. */
export default function WorkCard({ href, title, service, image, priority }: Props) {
  return (
    <Link className="st-project-card-block" href={href}>
      <div className="st-project-card">
        <Image
          className="st-project-thumb"
          src={image}
          alt={title}
          width={1080}
          height={763}
          priority={priority}
        />
      </div>
      <div className="st-project-card-info">
        <div className="st-project-name">{title}</div>
        <div className="st-project-service st-text-xl">{service}</div>
      </div>
    </Link>
  );
}
