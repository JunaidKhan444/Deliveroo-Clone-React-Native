import { Image, Text, StyleSheet, StatusBar, View, TextInput, ScrollView, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = ({ navigation }) => {
    // const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
            // headerTitle: "Salah App",
        });
    }, []);

    return (

        <SafeAreaView className="bg-white pt-5">
            <StatusBar backgroundColor="black" barStyle="white-content" />
            <View className="">
                <Button
                    title="Setting"
                    onPress={() => navigation.navigate("Setting")}
                />
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
                <View className="flex-row align-center space-x-2 pb-2 mx-4">
                    <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-full">
                        <MagnifyingGlassIcon color="gray" size={20} />
                        <TextInput
                            placeholder="Restaurants and Cusines"
                            keyboardType="default"
                        />
                    </View>
                    <AdjustmentsVerticalIcon color="#00CCBB" />
                </View>
            </View>
            <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 100, }}>
                {/* Categories */}
                <Categories />

                {/* Featured Rows */}
                <FeaturedRow
                    id={1}
                    title="Featured"
                    description="Paid placements from our partners!"
                />
                {/* Tasty Discount */}
                <FeaturedRow
                    id={2}
                    title="Tasty Discounts"
                    description="Everyone's been enjoying these juicy discounts!"
                />
                {/* Offers near you */}
                <FeaturedRow
                    id={3}
                    title="Offers near you"
                    description="Why not support your local resturant tonight!"
                />
            </ScrollView>
        </SafeAreaView>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop:Platform.OS == "android"? SatusBar.currentHeight:0,
//     }
// })
export default HomeScreen;
