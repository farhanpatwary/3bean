import { FunctionComponent, useState } from "react";
import { RegisterComponent } from "../register/register.component";

type loginState = "default" | "register" | "sign-in";
export const AuthPanel: FunctionComponent = () => {
  const [loginState, updateLoginState] = useState("default" as loginState);
  const [panelSwipeRight, updatePanelSwipeRight] = useState(false);

  const goToRegister = () => {
    updateLoginState("register");
  };

  const goToLogin = () => {
    updateLoginState("sign-in");
  };

  switch (loginState) {
    case "default":
      return (
        <div className={`${panelSwipeRight ? "swipe-right" : ""}`}>
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
        </div>
      );
    case "register":
      return (
        <div className="swipe-left">
          <RegisterComponent
            updateLoginState={updateLoginState}
            updatePanelSwipeRight={updatePanelSwipeRight}
          />
        </div>
      );
    case "sign-in":
      return <div className="swipe-left"></div>;
  }
};
