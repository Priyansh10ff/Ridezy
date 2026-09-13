import { createContext, useContext, useEffect, useEffectEvent, useState } from "react";
import axiosInstance from "../AxiosCalls/axios.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUser = useEffectEvent(async () => {
    try {
      const response = await axiosInstance.get("/users/me");
      setUser(response.data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    // The initial auth request must update context state when it completes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getUser();
  }, []);

  const logout = async () => {
    try {
      await axiosInstance.post("/users/logout");
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, setLoading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// The provider and its hook intentionally live together in this context module.
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

