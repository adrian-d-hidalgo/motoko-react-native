import { Ed25519PublicKey } from "@dfinity/identity";
import { useContext } from "react";

import { AuthContext } from "./auth.context";
import DataValidationError from "./components/DataValidationError";
import Login from "./components/Login";
import LoginError from "./components/LoginError";
import Redirect from "./components/Redirect";

export default function App() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[350px]">
        <Content />
      </div>
    </div>
  );
}

function validate(pubkey: Ed25519PublicKey | null, redirect_uri: string | null) {
  if (!pubkey || !redirect_uri) {
    return false;
  }

  return true;
}

function Content() {
  const { publicKey, redirectUri, isAuth, authError } = useContext(AuthContext);

  if (!validate(publicKey, redirectUri)) {
    return <DataValidationError />;
  }

  if (!isAuth && !authError) {
    return <Login />;
  }

  if (isAuth && !authError) {
    return <Redirect />;
  }

  return <LoginError />;
}
