import PostsLists from "@/components/PostsLists";
import PostsPagination from "@/components/PostsPagination";
import { allPosts, Post } from "contentlayer/generated";

interface Props {
  params: {
    number: string;
  };
}

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));
const postsPerPage = 2;

const LayoutPages = ({ params }: Props) => {
  const currentPage = parseInt(params.number);
  
  // Calcular el número total de páginas
  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  
  const offset = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(offset, offset + postsPerPage);

  return (
    <div>
      <h1 className="text-center my-4 text-3xl">Posts</h1>
      <div className="grid gap-4">
        <PostsLists posts={currentPosts} />
        <PostsPagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default LayoutPages;

export async function generateStaticParams() {
  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const paths = Array.from({ length: totalPages }, (_, index) => ({
    number: (index + 1).toString(),
  }));

  return paths;
}
