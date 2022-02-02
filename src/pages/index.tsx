import { NextPage } from 'next';
import Layout from 'components/layout';
import PostCard from 'components/post/card';
import Post from 'interfaces/post';
import { getAllPosts } from 'utils/api';

interface IndexPageProps {
  posts: Post[];
}

const IndexPage: NextPage<IndexPageProps, unknown> = ({ posts }) => (
  <Layout title="首页">
    <section>
      {posts.map((item) => (
        <PostCard key={item.title} {...item} />
      ))}
    </section>
  </Layout>
);

export const getStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'description',
    'category',
    'date',
    'slug',
  ]);

  return {
    props: { posts },
  };
};

export default IndexPage;
