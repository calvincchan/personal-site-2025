import Image from "next/image";
import Link from "next/link";
import { DateOnly } from "src/_components/date-only";
import { PostItem } from "./utils";

export const PostCard: React.FC<{ post: PostItem; }> = ({ post }) => {
  const { route, title, frontMatter: { description, date, image } } = post;
  return (
    <div key={route} role="listitem" className="x-post-card">
      {image && (
        <div style={{ float: "right", position: "relative", width: 200, height: 112.5 }} className="float-right ml-4 mb-4">
          <Image
            src={image}
            alt={title}
            width={200}
            height={112.5}
          // fill
          // sizes="(max-width: 200px) 100vw, 200px"
          />
        </div>
      )}
      <Link href={route} className="hover:underline">
        <h2>{title}</h2>
      </Link>
      <p>
        {description}{" "}
        <Link href={route} className="underline">Read More →</Link>
      </p>

      <DateOnly date={date} />
    </div>
  );
};