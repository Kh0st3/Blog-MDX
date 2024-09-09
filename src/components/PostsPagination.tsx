import Link from "next/link";

interface Props {
  totalPages: number;
  currentPage?: number;
}

const PostsPagination = ({totalPages, currentPage = 1}: Props) => {
  return (
    <div className="flex gap-4">
      <Link href={`/page/${currentPage - 1}`}>Prev</Link>
      {
        Array.from({length: totalPages}).map((_, index) => (
          <Link href={`/page/${index + 1}`} key={index}>{index + 1}</Link>
        ))
      }
      <Link href={`/page/${currentPage + 1}`}>Next</Link>
    </div>
  );
}

export default PostsPagination;
