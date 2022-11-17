import { Form, useNavigate } from "remix";
import type { MetaFunction } from "remix";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import React from "react";
import { useAuth } from "~/context/auth";

export let meta: MetaFunction = () => {
  return {
    title: "Login",
    description: "Login page",
  };
};

export default function Index() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [form, setForm] = React.useState({
    name: "Devs",
    password: "password",
  });
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  React.useEffect(() => {
    const name = window.localStorage.getItem("login_name");
    if (name) {
      dispatch({ type: "set-name", payload: name });
      navigate(-1);
    }
  }, []);

  const onLoginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      dispatch({
        type: "login",
        payload: { name: form.name, password: form.password },
      });
    } catch (e) {
      setError(`${e}`);
      return;
    } finally {
      setIsLoading(false);
    }
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="flex-1 w-full min-h-full flex flex-col justify-center items-center">
      <div className="w-96">
        {error && (
          <div className="rounded-md w-full px-4 py-2 mb-4 bg-red-300 text-white flex items-center">
            <ExclamationCircleIcon height={16} width={16} className="mr-1" />
            <p className="text-sm">{error}</p>
          </div>
        )}
        <Form
          onSubmit={(e) => onLoginHandler(e)}
          className="rounded-md p-8 w-full bg-white shadow-md"
        >
          <div className="mb-4 flex flex-col">
            <label className="mb-1 text-slate-300 text-sm" htmlFor="name">
              Name
            </label>
            <input
              className="px-4 py-2 rounded-md border border-gray-200"
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="John Doe"
              autoComplete="off"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="mb-1 text-slate-300 text-sm" htmlFor="password">
              Password
            </label>
            <input
              className="px-4 py-2 rounded-md border border-gray-200"
              type="password"
              name="password"
              value={form.password}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, password: e.target.value }))
              }
              id="password"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-500 font-semibold disabled:bg-white disabled:cursor-not-allowed hover:bg-gray-500 hover:text-gray-200 transition"
          >
            Login
          </button>
        </Form>
      </div>
    </div>
  );
}
