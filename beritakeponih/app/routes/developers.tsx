import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, useNavigate } from "remix";
import Dev from "~/components/Card/Dev";
import { useAuth } from "~/context/auth";

type Dev = {
  name: string;
  nim: string;
  image_url: string;
};

export const loader: LoaderFunction = () => {
  const devs: Dev[] = [
    {
      name: "Jovan Haliem",
      nim: "00000047672",
      image_url: "/assets/img/jovan.jpg",
    },
    {
      name: "Bryant Christopher Hihola",
      nim: "00000051191",
      image_url: "/assets/img/bryant.jpg",
    },
    {
      name: "Noveliyo Frendika",
      nim: "00000050725",
      image_url: "/assets/img/noveliyo.jpg",
    },
    {
      name: "Muhamad Nouval Daviansyah",
      nim: "00000047293",
      image_url: "/assets/img/nouval.jpg",
    },
  ];
  return json(devs);
};

export let meta: MetaFunction = () => {
  return {
    title: "Developers",
    description: "Developers page",
  };
};

export default function Index() {
  const devs = useLoaderData<Dev[]>();
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();

  const onHandleAuth = () => {
    if (state.name !== "") {
      dispatch({ type: "logout" });
      navigate("/", { replace: true });
    }
    navigate("/login");
  };

  return (
    <div className="flex-1 w-full min-h-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {devs.map((dev, id) => (
          <Dev key={id} {...dev} />
        ))}
      </div>
      <button
        className="fixed bottom-16 right-16 rounded-full bg-black text-white px-6 py-2"
        onClick={() => onHandleAuth()}
      >
        {state.name === "" ? "Login" : "Logout"}
      </button>
    </div>
  );
}
