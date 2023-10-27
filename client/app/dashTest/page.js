"use client";
import { ApiClient } from "@/apiClient";
import Register from "@/components/Register";
import login from "@/components/Login";
import Dashboard from "@/components/Dashboard";
import { useState, useEffect } from "react";

export default function Home() {




  const [token, setToken] = useState(1)      // (window.localStorage.getItem("token")); // should I set this as 1 to match the tokens that the users have atm?

  const logout = () => {
    window.localStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    const token = 1 // window.localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const client = new ApiClient(
    () => token,
    () => logout()
  );

  return (
    <main>
        {token ? <Dashboard client={client} /> : <h1>Login</h1>}
    </main>
  );
}


