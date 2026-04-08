import Image from "next/image";
import Link from "next/link";
import { PostItem } from "./utils";

export const ProjectCard: React.FC<{ post: PostItem; }> = ({ post }) => {
  const { route, frontMatter: { title, description, other } } = post;
  const image = other?.image;
  const tags = other?.tags ? (other.tags as unknown as string).split(',') : [];
  return (
    <div key={route} role="listitem" className="x-project-card">
      {image && (
        <div className="x-project-image">
          <Image
            src={image}
            alt={title ?? ''}
            width={400}
            height={225}
          />
        </div>
      )}
      <div className="x-project-content">
        <Link href={route}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
        {tags.length > 0 && (
          <div className="x:flex x:flex-wrap x:gap-1.5 x:mt-2">
            {tags.map((tag) => (
              <span key={tag} className="x:px-2 x:py-0.5 x:text-xs x:font-medium x:rounded x:bg-neutral-100 x:dark:bg-neutral-800 x:text-neutral-600 x:dark:text-neutral-400">
                {tag.trim()}
              </span>
            ))}
          </div>
        )}
        <Link href={route} className="x-read-more-link">Read More →</Link>
      </div>
    </div>
  );
};
