import NewsData from "~/data/news.json";
import type { MetaFunction } from "remix";
import News from "~/components/Card/News";

export let meta: MetaFunction = () => {
  return {
    title: "Homepage",
    description: "Welcome to BeritaKepoNih",
  };
};

export default function Index() {
  return (
    <>
      <div className="flex-1 w-full min-h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16 py-16">
        {NewsData.map((news) => (
          <News key={news.id} {...news} />
        ))}
      </div>
    </>
  );
}
