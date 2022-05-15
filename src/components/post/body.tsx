import 'highlight.js/styles/github-dark.css';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => (
  <article
    className="max-w-none markdown-body"
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

export default PostBody;
