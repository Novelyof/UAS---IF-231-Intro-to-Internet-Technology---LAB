import * as React from "react";

type Action =
  | { type: "login"; payload: { name: string; password: string } }
  | { type: "set-name"; payload: string }
  | { type: "logout" };
type Dispatch = (action: Action) => void;
type State = { name: string };
type AuthProviderProps = { children: React.ReactNode };

const AuthStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function authReducer(state: State, action: Action) {
  switch (action.type) {
    case "login": {
      if (action.payload.password !== "password") {
        throw new Error(`Name or password is incorrect`);
      }
      window.localStorage.setItem("login_name", action.payload.name);
      return { name: action.payload.name };
    }
    case "set-name": {
      return { name: action.payload };
    }
    case "logout": {
      window.localStorage.clear();
      return { name: "" };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = React.useReducer(authReducer, { name: "" });
  const value = { state, dispatch };
  return (
    <AuthStateContext.Provider value={value}>
      {children}
    </AuthStateContext.Provider>
  );
}

function useAuth() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
