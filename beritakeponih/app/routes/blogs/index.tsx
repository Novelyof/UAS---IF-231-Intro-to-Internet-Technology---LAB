import type { MetaFunction } from "remix";
import Blog from "~/components/Card/Blog";
import Protected from "~/components/Protected";
import BlogsData from "~/data/blogs.json";

export let meta: MetaFunction = () => {
  return {
    title: "Blogs",
    description: "Blogs page",
  };
};

export default function Index() {
  return (
    <Protected>
      <div className="flex-1 w-full min-h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16 py-16">
        {BlogsData.map((blog) => (
          <Blog key={blog.id} {...blog} />
        ))}
      </div>
    </Protected>
  );
}
