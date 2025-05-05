import Image from "next/image";
import Link from "next/link";
import { PostItem } from "./utils";

export const ProjectCard: React.FC<{ post: PostItem; }> = ({ post }) => {
  const { route, title, frontMatter: { description, date, image } } = post;
  return (
    <div key={route} role="listitem" className="x-project-card">
      {image && (
        <div className="x-project-image">
          <Image
            src={image}
            alt={title}
            width={400}
            height={225}
          />
        </div>
      )}
      <div className="x-project-content">
        <Link href={route}>
          <h2>{title}</h2>
        </Link>
        <p>
          {description}{" "}
          <Link href={route} className="x-read-more-link">Read More →</Link>
        </p>
      </div>
    </div>
  );
};