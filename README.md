# react-native-auth-provider

> A provider-agnostic session context for Expo / React Native apps — modular, clean, and extensible.

---

## ✨ Features

- 🧩 Works with any auth provider (Supabase, Firebase, Cognito, etc.)
- 🧪 Built-in static mock provider for local dev
- 🧼 Clean separation of context, service, and hooks
- 🛠 Ready for dependency injection
- 🧠 Designed for composability and testability

---

## 🚀 Installation

```bash
yarn add @neatnettech/react-native-auth-provider
```

---

## 🔌 Usage

### 1. Wrap your app

```tsx
import { SessionProvider, StaticAuthService } from "@neatnettech/react-native-auth-provider";

export default function App() {
  return (
    <SessionProvider authService={new StaticAuthService()}>
      {/* your app */}
    </SessionProvider>
  );
}
```

---

### 2. Access session from anywhere

```tsx
import { useSession } from "@neatnettech/react-native-auth-provider";

const { user, session, signOut } = useSession();
```

---

## 🧱 Custom AuthService Example

```ts
import { AuthService } from "@neatnettech/react-native-auth-provider";
import type { Session, User } from "@neatnettech/react-native-auth-provider/types";

export class MyAuthService implements AuthService {
  async getSession(): Promise<Session | null> { /* ... */ }
  async getUser(): Promise<User | null> { /* ... */ }
  async signIn(): Promise<void> { /* ... */ }
  async signOut(): Promise<void> { /* ... */ }
}
```

---

## 🧪 Development

```bash
# install deps
yarn install

# build the library
yarn build

# publish (public)
npm publish --access public
```

---

## 🪪 License

MIT — use freely.
