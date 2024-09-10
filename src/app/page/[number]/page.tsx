import { allPosts, Post } from "contentlayer/generated";

import PostsLists from "@/components/PostsLists";
import PostsPagination from "@/components/PostsPagination";
import { notFound } from "next/navigation";
import { getPagination } from "@/utils/pagination";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));
interface Props {
  params: {
    number: string;
  };
}

export const generateStaticParams = () => {
  return Array.from({ length: posts.length}).map((_, index) => ({
    number: `${index + 1}`,
  }));
};

const LayoutPages = ({ params }: Props) => {  

  let arrayCurrentPosts;
  let totalPagesNumber;

  try{
    const { currentPosts, totalPages} = getPagination(posts, 2, params.number);
    arrayCurrentPosts = currentPosts;
    totalPagesNumber = totalPages;
  } catch(error){
    notFound();
  }

  return (
    <div>
      <div className="grid gap-4">
        <PostsLists posts={arrayCurrentPosts} />

        {totalPagesNumber > 1 && (
          <PostsPagination 
            totalPages={totalPagesNumber} 
            currentPage={parseInt(params.number)} />
        )}
      </div>
    </div>
  );
};

export default LayoutPages;
