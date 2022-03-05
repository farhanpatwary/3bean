import React, { FunctionComponent, MouseEventHandler, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

interface RegisterProps {
  updateLoginState: Function;
  updatePanelSwipeRight: Function;
}

export const RegisterComponent: FunctionComponent<RegisterProps> = ({
  updateLoginState,
  updatePanelSwipeRight,
}) => {
  const [errors, updateErrors] = useState([]);
  const formFields = [
    {
      label: "Username",
      type: "text",
      id: "username",
      name: "username",
      required: true,
      pattern: "[a-z]{0,9}",
    },
    {
      label: "Email Address",
      type: "email",
      id: "email",
      name: "email address",
      required: true,
    },
    {
      label: "Create a password",
      type: "password",
      id: "password",
      name: "password",
      required: true,
    },
    {
      label: "Confirm your password",
      type: "password",
      id: "confirm-password",
      name: "confirm-password",
      required: true,
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData: any = {};
    formFields.forEach((field) => {
      const cur = e.target[field.id].value as string;
      formData[field.id] = cur;
    });

    // validate data
    console.log(formData);
  };

  const handleBackButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updatePanelSwipeRight(true);
    updateLoginState("default");
  };

  const handleSignInButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateLoginState("default");
    setTimeout(() => {
      updateLoginState("sign-in");
    }, 1);
  };

  const handleFormInputDataChange = useDebouncedCallback(() => {
    console.log("deb");
    // validate form data
  }, 500);

  return (
    <>
      <h1 className="text-3xl font-bold w-fit mb-6">Register to 3bean</h1>
      <form
        className=" w-80"
        onSubmit={handleSubmit}
        onChange={() => handleFormInputDataChange()}
      >
        {formFields.map((field, index) => {
          return (
            <div key={index} className="grid grid-cols-1">
              <label className="text-sm text-gray-700 mb-2" htmlFor={field.id}>
                {field.label}
              </label>
              <input
                required={!!field.required}
                className="p-2 rounded-md mb-4 border-2 border-gray-100 form-input"
                type={field.type}
                id={field.id}
                name={field.name}
                pattern={field.pattern}
              />
            </div>
          );
        })}
        <div>{}</div>
        <p className="text-sm text-gray-700">
          Already have an account?{" "}
          <button
            onClick={handleSignInButtonClick}
            className="font-medium hover:underline text-gray-900"
          >
            Sign in.
          </button>
        </p>
        <button
          type="submit"
          className="mt-8 px-4 py-2 font-medium text-white bg-black border border-transparent rounded-md hover:bg-gray-700 focus:outline-none mr-2"
        >
          Register
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
