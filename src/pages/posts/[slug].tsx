import { getAllPosts, getPostBySlug } from 'utils/api';
import CustomerHead from 'components/head';
import PostBody from 'components/post/body';
import PostFooter from 'components/post/footer';
import markdownToHtml from 'utils/markdown';

const PostSlugPage = ({ post }) => (
  <>
    <CustomerHead title={post.title} description={post.description} />
    <article>
      <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
      <main className="my-8">
        <PostBody content={post.content} />
      </main>
    </article>
    <PostFooter slug={post.slug} />
  </>
);

export default PostSlugPage;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'description',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = (await markdownToHtml(post.content)) || '';

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
