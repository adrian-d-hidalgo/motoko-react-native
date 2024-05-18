import { fromHex } from "@dfinity/agent";
import { DelegationChain, Ed25519PublicKey } from "@dfinity/identity";
import { ReactNode, createContext, useEffect, useState } from "react";

export type AuthContextType = {
  isAuth: boolean;
  authError: Error | null;
  publicKey: Ed25519PublicKey | null;
  redirectUri: string | null;
  delegation: DelegationChain | null;
  authenticate: () => void;
  setAuthError: React.Dispatch<React.SetStateAction<Error | null>>;
  setDelegation: React.Dispatch<React.SetStateAction<DelegationChain | null>>;
};

export type AuthContextProviderType = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [isAuth, setIsAuth] = useState(false);
  const [authError, setAuthError] = useState<Error | null>(null);
  const [publicKey, setPublicKey] = useState<Ed25519PublicKey | null>(null);
  const [redirectUri, setRedirectUri] = useState<string | null>(null);
  const [delegation, setDelegation] = useState<DelegationChain | null>(null);

  useEffect(() => {
    init();
  }, []);

  function authenticate() {
    setIsAuth(true);
  }

  function init() {
    const params = new URLSearchParams(window.location.search);

    const pubkey = params.get("pubkey");
    if (pubkey) {
      const publicKey = Ed25519PublicKey.fromDer(fromHex(pubkey));
      setPublicKey(publicKey);
    }

    const redirect_uri = params.get("redirect_uri");
    if (redirect_uri) {
      setRedirectUri(redirect_uri);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        authError,
        delegation,
        publicKey,
        redirectUri,
        authenticate,
        setAuthError,
        setDelegation,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
