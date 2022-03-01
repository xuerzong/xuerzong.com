type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => (
  <article
    className="max-w-none prose dark:prose-invert"
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

export default PostBody;
