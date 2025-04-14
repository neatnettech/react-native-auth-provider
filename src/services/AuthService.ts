import type { AuthContextValue } from "../types/session";

export interface AuthService {
  getSession(): Promise<AuthContextValue["session"]>;
  getUser(): Promise<AuthContextValue["user"]>;
  signIn(): Promise<void>;
  signOut(): Promise<void>;
}