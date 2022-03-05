import { FunctionComponent, useState } from "react";

type loginState = "default" | "register" | "sign-in";
export const AuthPanel: FunctionComponent = () => {
  const [loginState, updateLoginState] = useState("default" as loginState);

  const goToRegister = () => {
    updateLoginState("register");
  };

  const goToLogin = () => {
    updateLoginState("sign-in");
  };

  switch (loginState) {
    case "default":
      return (
        <>
          <h1 className="text-3xl font-bold w-fit mb-6">Welcome to 3bean</h1>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={goToRegister}
              className="px-4 py-2 font-medium text-white bg-black border border-transparent rounded-md hover:bg-gray-700 focus:outline-none"
            >
              Register
            </button>
            <button
              onClick={goToLogin}
              className="px-4 py-2 font-medium text-gray-900 bg-white border-2 border-gray-50 rounded-md hover:border-gray-900 focus:outline-none"
            >
              Login
            </button>
          </div>
        </>
      );
    case "register":
      const formFields = [
        {
          label: "Username",
          type: "text",
          id: "username",
          name: "username",
        },
        {
          label: "Email Address",
          type: "email",
          id: "email",
          name: "email address",
        },
        {
          label: "Create a password",
          type: "password",
          id: "password",
          name: "password",
        },
        {
          label: "Confirm your password",
          type: "password",
          id: "password",
          name: "password",
        },
      ];
      return (
        <>
          <h1 className="text-3xl font-bold w-fit mb-6">Register to 3bean</h1>
          <form
            action="/send-data-here"
            method="post"
            className="grid grid-cols-1 w-80"
          >
            {formFields.map((field) => {
              return (
                <>
                  <label
                    className="text-sm text-gray-700 mb-2"
                    htmlFor="username"
                  >
                    {field.label}
                  </label>
                  <input
                    className="p-2 rounded-md mb-4 border-2 border-gray-100 form-input"
                    type={field.type}
                    id={field.id}
                    name={field.name}
                  />
                </>
              );
            })}
            <button
              onClick={goToRegister}
              className="mt-8 px-4 py-2 font-medium text-white bg-black border border-transparent rounded-md hover:bg-gray-700 focus:outline-none"
            >
              Register
            </button>
          </form>
        </>
      );
    case "sign-in":
      return <div></div>;
  }
};
