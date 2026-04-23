import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="text-white mt-4 rounded-lg bg-primary p-4"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="text-white mt-4 rounded-lg bg-primary p-4"
      >
        Go to Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="text-white mt-4 rounded-lg bg-primary p-4"
      >
        Go to Sign Up
      </Link>
      <Link
        href="/subscriptions/spotify"
        className="text-white mt-4 rounded-lg bg-primary p-4"
      >
        Spotify Subscriptions
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="text-white mt-4 rounded-lg bg-primary p-4"
      >
        Claude Max Subscriptions
      </Link>
    </View>
  );
}
