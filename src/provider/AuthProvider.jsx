import { createContext, useState, useEffect, useContext } from "react";
import keycloak from "@/service/Auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [name , setName] = useState("")
  const logout = () =>{
    keycloak.logout()
  }

  useEffect(() => {
    keycloak
      .init({ onLoad: "login-required" })
      .then((authenticated) => {
        if (authenticated) {
          localStorage.setItem("token",keycloak?.token)
          setToken(keycloak?.token);
          setName(keycloak?.tokenParsed?.name)
        }
      })
      .catch((err) => {
        console.error("Failed to init Keycloak", err);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken , logout , name }}>
      {children}
    </AuthContext.Provider>
  );
};

export  const useAuth = () => useContext(AuthContext)
