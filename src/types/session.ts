export interface Session {
    accessToken: string;
    refreshToken?: string;
    expiresAt?: number;
  }
  
  export interface User {
    id: string;
    email: string;
    name?: string;
    avatarUrl?: string;
  }
  
  export interface AuthContextValue {
    session: Session | null;
    user: User | null;
    isLoading: boolean;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
  }