import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-bold text-lg">SignIn</Text>
      <Link
        href="/(auth)/sign-up"
        className="p-4 bg-primary rounded-lg mt-4 text-white"
      >
        Create Account
      </Link>
    </View>
  );
};

export default SignIn;
