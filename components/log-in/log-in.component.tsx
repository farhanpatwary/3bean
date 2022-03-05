import { FunctionComponent } from "react";

interface LoginProps {
  updateLoginState: Function;
  updatePanelSwipeRight: Function;
}

export const LoginComponent: FunctionComponent<LoginProps> = ({
  updateLoginState,
  updatePanelSwipeRight,
}) => {
  const formFields = [
    {
      label: "Username or Email Address",
      type: "text",
      id: "username",
      name: "username",
    },
    {
      label: "Password",
      type: "password",
      id: "password",
      name: "password",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleBackButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updatePanelSwipeRight(true);
    updateLoginState("default");
  };

  const handleRegisterButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    updateLoginState("default");
    setTimeout(() => {
      updateLoginState("register");
    }, 1);
  };

  return (
    <>
      <h1 className="text-3xl font-bold w-fit mb-6">Login to 3bean</h1>
      <form method="post" className=" w-80" onSubmit={handleSubmit}>
        {formFields.map((field, index) => {
          return (
            <div key={index} className="grid grid-cols-1">
              <label className="text-sm text-gray-700 mb-2" htmlFor="username">
                {field.label}
              </label>
              <input
                className="p-2 rounded-md mb-4 border-2 border-gray-100 form-input"
                type={field.type}
                id={field.id}
                name={field.name}
              />
            </div>
          );
        })}
        <p className="text-sm text-gray-700">
          Haven't got an account?{" "}
          <button
            onClick={handleRegisterButtonClick}
            className="font-medium hover:underline text-gray-900"
          >
            Register here.
          </button>
        </p>
        <button
          type="submit"
          className="mt-8 px-4 py-2 font-medium text-white bg-black border border-transparent rounded-md hover:bg-gray-700 focus:outline-none mr-2"
        >
          Log In
        </button>
        <button
          onClick={handleBackButtonClick}
          className="px-4 py-2 font-medium text-gray-900 bg-white border-2 border-gray-50 rounded-md hover:border-gray-900 focus:outline-none"
        >
          Back
        </button>
      </form>
    </>
  );
};
