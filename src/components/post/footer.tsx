import Link from 'next/link';

interface PostFooterProps {
  slug: string;
}

const PostFooter: React.FC<PostFooterProps> = ({ slug }) => {
  return (
    <div className="text-sm text-gray-800 bg-purple-100 p-4 border-l-4 border-purple-500 rounded">
      <p className="mb-2">
        <strong>本文链接：</strong>
        <Link href={`/posts/${slug}`}>
          <a className="break-all underline underline-offset-2">
            https://xuerzong.com/posts/{encodeURI(slug)}
          </a>
        </Link>
      </p>
      <p>
        <strong>转载说明：</strong>欢迎转载，转载请注明出处
      </p>
    </div>
  );
};

export default PostFooter;
