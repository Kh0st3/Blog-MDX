import { Post } from "contentlayer/generated";
import Link from "next/link";

interface Props {
    post: Post;
}

const PostItem = ({post}: Props) => {
  return (
    <article className="shadow-md p-4 rounded">
        <h2 className="text-2xl">
            <Link href={post.url}>{post.title}</Link>
        </h2>
        <time>
            {new Date(post.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
            })}
        </time>
    </article>
  );
}

export default PostItem;
