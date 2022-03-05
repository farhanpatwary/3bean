import React, { FunctionComponent, MouseEventHandler } from "react";

export const RegisterComponent: FunctionComponent = () => {
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
      id: "confirm-password",
      name: "password",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <h1 className="text-3xl font-bold w-fit mb-6">Register to 3bean</h1>
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
        <button
          type="submit"
          className="mt-8 px-4 py-2 font-medium text-white bg-black border border-transparent rounded-md hover:bg-gray-700 focus:outline-none"
        >
          Register
        </button>
      </form>
    </>
  );
};
