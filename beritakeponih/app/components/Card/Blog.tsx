import React from "react";

type Props = {
  title: string;
  _id: string;
  coverImage: string;
  slug: string;
  author: {
    name: string;
  };
};

const Dev: React.FC<Props> = ({ title, _id, coverImage, author, slug }) => {
  return (
    <a
      href={"https://hashnode.com/" + `${slug}`}
      target="_blank"
      className="shadow-md overflow-hidden relative w-full  h-40 md:w-80 rounded-md transition-shadow hover:shadow-2xl hover:cursor-pointer"
    >
      <img
        className="h-full w-full object-cover"
        src={
          coverImage ??
          "https://via.placeholder.com/350/ffffff/FFFFFF/?text=%E2%80%8E"
        }
        alt={title}
      />
      <div className="absolute left-0 right-0 px-4 pb-4 bottom-0 top-9 bg-gradient-to-b from-transparent to-[#242222dd] flex flex-col justify-end">
        <h1 className="truncate text-white " aria-label={title} about={title}>
          {title}
        </h1>
      </div>
    </a>
  );
};

export default Dev;
