import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      // headerTitle: "Salah App",
    });
  }, []);

  return (
    <View>
      <Text className="text-red-600">HomeScreen</Text>
    </View>
  )
}

export default HomeScreen;
