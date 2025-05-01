import Link from "next/link";
import { DateOnly } from "src/_components/date-only";
import { PostItem } from "./utils";

export const PostCard: React.FC<{ post: PostItem; }> = ({ post }) => {
  const { route, title, frontMatter: { description, date } } = post;
  return (
    <div key={route} role="listitem" className="x-post-card">
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