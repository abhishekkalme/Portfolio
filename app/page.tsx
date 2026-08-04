import { getAllPosts, BlogPost } from "@/lib/blog";
import PortfolioPage from "@/components/PortfolioPage";

export default function Home() {
  const posts: BlogPost[] = getAllPosts().slice(0, 2);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="site-container">
        <PortfolioPage posts={posts} />
      </div>
    </div>
  );
}
