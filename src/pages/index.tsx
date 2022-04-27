import { NextPage } from 'next';
import CustomerHead from '@/components/head';
import PostBody from '@/components/post/body';
import PostCard from '@/components/post/card';
import Post from '@/interfaces/post';
import { getAllPosts, getProfile } from 'utils/api';
import markdownToHtml from '@/utils/markdown';

interface IndexPageProps {
  posts: Post[];
  profile: string;
}

const IndexPage: NextPage<IndexPageProps, unknown> = ({ posts, profile }) => {
  return (
    <>
      <CustomerHead title="首页" description="脚踏实地，厚积薄发" />

      <section className="py-8 mb-12 border-b">
        <PostBody content={profile} />
      </section>

      <section>
        {posts.map((item) => (
          <PostCard key={item.title} {...item} />
        ))}
      </section>
    </>
  );
};

export const getStaticProps = async () => {
  const profile = await markdownToHtml(getProfile());
  const posts = getAllPosts([
    'title',
    'description',
    'category',
    'date',
    'slug',
  ]);

  return {
    props: {
      posts,
      profile,
    },
  };
};

export default IndexPage;
