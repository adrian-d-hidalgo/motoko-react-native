import { toHex } from "@dfinity/agent";
import { useContext } from "react";

import { AuthContext } from "../auth.context";

export default function RedirectButton() {
  const { delegation, publicKey, redirectUri } = useContext(AuthContext);

  function handleClick() {
    if (!delegation || !publicKey || !redirectUri) throw new Error("delegation not defined");

    const pubkey = toHex(publicKey.toDer());
    const delegationString = JSON.stringify(delegation.toJSON());
    const url = new URL(decodeURIComponent(redirectUri));

    window.open(`${url.href}?publicKey=${pubkey}&delegation=${delegationString}`, "_self");
  }

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
      Redirect me to the App
    </button>
  );
}
