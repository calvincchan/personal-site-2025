import Image from "next/image";
import Link from "next/link";
import { DateOnly } from "src/_components/date-only";
import { PostItem } from "./utils";

export const PostCard: React.FC<{ post: PostItem; }> = ({ post }) => {
  const { route, title, frontMatter: { description, date, image } } = post;
  return (
    <div key={route} role="listitem" className="x-post-card">
      {image && (
        <div className="x:float-right x:ml-4 x:mb-4">
          <Image
            src={image}
            alt={title}
            width={200}
            height={113}
          />
        </div>
      )}
      <Link href={route}>
        <h2>{title}</h2>
      </Link>
      <p>
        {description}{" "}
        <Link href={route}>Read More →</Link>
      </p>

      <DateOnly date={date} />
    </div>
  );
};