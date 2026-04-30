import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

/* This component is responsible for rendering the UI of the application. Here's
a breakdown of what the component is doing: */
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-5xl font-sans-extrabold ">Home</Text>

      <Link
        href="/onboarding"
        className="text-white mt-4 font-sans-bold rounded-lg bg-primary p-4"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="text-white mt-4 font-sans-bold rounded-lg bg-primary p-4"
      >
        Go to Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="text-white mt-4 font-sans-bold rounded-lg bg-primary p-4"
      >
        Go to Sign Up
      </Link>
    </SafeAreaView>
  );
}
