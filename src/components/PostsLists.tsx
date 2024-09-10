import { Post } from "contentlayer/generated";
import PostItem from "./PostItem";

interface Props {
    posts: Post[];
}

const PostsLists = ({posts}: Props) => {
  return (
    <>
        {posts.map((post) =>(
            <PostItem 
            key={post._raw.flattenedPath} 
            post={post} />  
        ))} 
    </>
  );
}

export default PostsLists;
