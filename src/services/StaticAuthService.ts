import { AuthService } from "./AuthService";
import type { Session, User } from "../types/session";

const MOCK_SESSION: Session = {
  accessToken: "mock-token",
  expiresAt: Date.now() + 3600 * 1000,
};

const MOCK_USER: User = {
  id: "123",
  email: "test@example.com",
  name: "Test User",
  avatarUrl: "https://placekitten.com/200/200",
};

export class StaticAuthService implements AuthService {
  async getSession() {
    return MOCK_SESSION;
  }

  async getUser() {
    return MOCK_USER;
  }

  async signIn() {
    // No-op for mock
  }

  async signOut() {
    // No-op for mock
  }
}