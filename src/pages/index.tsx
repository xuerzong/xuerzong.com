import { NextPage } from 'next';
import CustomerHead from '@/components/head';
import PostCard from '@/components/post/card';
import Post from '@/interfaces/post';
import { getAllPosts } from 'utils/api';

interface IndexPageProps {
  posts: Post[];
}

const IndexPage: NextPage<IndexPageProps, unknown> = ({ posts }) => (
  <>
    <CustomerHead title="首页" description="脚踏实地，厚积薄发" />
    <section>
      {posts.map((item) => (
        <PostCard key={item.title} {...item} />
      ))}
    </section>
  </>
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
