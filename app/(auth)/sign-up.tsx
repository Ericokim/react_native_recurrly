import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-bold text-lg">SignUp</Text>
      <Link
        href="/(auth)/sign-in"
        className="p-4 bg-primary rounded-lg mt-4 text-white"
      >
        Sign In
      </Link>
    </View>
  );
};

export default SignUp;
