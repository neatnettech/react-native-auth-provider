import React, { createContext, useContext, useEffect, useState } from "react";
import type { PropsWithChildren } from "react";
import type { AuthContextValue } from "../types/session";
import type { AuthService } from "../services/AuthService";

const SessionContext = createContext<AuthContextValue | undefined>(undefined);

interface SessionProviderProps {
  authService: AuthService;
}

export const SessionProvider = ({
  children,
  authService,
}: PropsWithChildren<SessionProviderProps>) => {
  const [session, setSession] = useState<AuthContextValue["session"]>(null);
  const [user, setUser] = useState<AuthContextValue["user"]>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSession = async () => {
      const [s, u] = await Promise.all([
        authService.getSession(),
        authService.getUser(),
      ]);
      setSession(s);
      setUser(u);
      setIsLoading(false);
    };
    loadSession();
  }, [authService]);

  const value: AuthContextValue = {
    session,
    user,
    isLoading,
    signIn: () => authService.signIn(),
    signOut: () => authService.signOut(),
  };

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => {
  const context = useContext(SessionContext);
  if (!context) throw new Error("useSessionContext must be used within SessionProvider");
  return context;
};