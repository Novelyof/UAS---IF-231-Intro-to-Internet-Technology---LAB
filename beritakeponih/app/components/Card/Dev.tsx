import React from "react";

type Props = {
  name: string;
  nim: string;
  image_url: string;
};

const Dev: React.FC<Props> = ({ name, nim, image_url }) => {
  return (
    <div className="shadow-md rounded-md flex flex-col items-center px-4 py-8 transition-shadow hover:shadow-2xl">
      <img
        className="w-24 h-24 rounded-full object-cover object-top"
        src={image_url}
        alt={name}
      />
      <h1 className="mt-4">{name}</h1>
    </div>
  );
};

export default Dev;
