import { Image, Text, StyleSheet, StatusBar, View, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon
} from "react-native-heroicons/outline";


const HomeScreen = () => {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
            // headerTitle: "Salah App",
        });
    }, []);

    return (
        <SafeAreaView className="bg-white pt-5">
            <Text className="text-red-600">
                {/* Header */}
                <View className="flex-row pb-3 items-center mx-4 space-x-2">
                    <Image source={{
                        uri: "https://links.papareact.com/wru",
                    }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs"> Deliver Now!</Text>
                        <Text className="font-bold text-xl"> Current Location
                            <ChevronDownIcon size={20} color="#00CCBB" />
                        </Text>
                    </View>
                    <UserIcon size={35} color="#00CCBB" />
                </View>
                {/* Search */}
                <View className="flex-row items-center space-x-2 pb-2 mx-4">
                    <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                        <SearchIcon color="gray" size={20} />
                        <TextInput
                            placeholder="Restaurants and cusines"
                            keyboardType="default"
                        />
                    </View>
                    <AdjustmentsIcon color="#00CCBB" />
                </View>
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
})
export default HomeScreen;
