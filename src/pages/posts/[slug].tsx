import { getAllPosts, getPostBySlug } from 'utils/api';
import Layout from 'components/layout';
import PostBody from 'components/post/body';
import markdownToHtml from 'utils/markdown';

const PostSlugPage = ({ post }) => (
  <Layout title={post.slug}>
    <article>
      <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
      <main className="my-8">
        <PostBody content={post.content} />
      </main>
    </article>
  </Layout>
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
