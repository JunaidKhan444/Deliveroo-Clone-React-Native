import { View, Text, ScrollView, Switch, Image } from "react-native";
import pic from "../../assets/userpic.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import {
    ChevronRightIcon,
    UserCircleIcon,
    IdentificationIcon,
    EllipsisHorizontalIcon,
    BellAlertIcon,
    ArrowRightOnRectangleIcon
}
    from "react-native-heroicons/outline";

const Setting = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
            // headerTitle: "Settings",
        });
    }, []);
    return (
        <SafeAreaView className="bg-white pt-5">
            <View className="flex-column justify-center items-center pt-3 pb-3 bg-white">
                <Image
                    source={pic}
                    className=" w-50 h-50 rounded-full"
                />
                <Text className="text-xl">@Junii</Text>
            </View>
            <ScrollView className="bg-white" contentContainerStyle={{ paddingTop: 5, paddingBottom: 20, }}>
                <View className="flex-column bg-white">
                    <View className="pt-3">
                        <View className="flex-column divide-y-2 divide-[#E5EEFA]">
                            <View className="mt-4 flex-row items-center justify-between px-4 bg-white pt-2 pb-2">
                                <UserCircleIcon color="#053574" />
                                <Text className="flex-1 text-[#073675] text-lg pl-2 divide-y-2">Edit Profile</Text>
                                <ChevronRightIcon color="#053574" />
                            </View>
                            <View className="mt-0.5 flex-row items-center justify-between px-4 bg-white pt-2 pb-2">
                                <IdentificationIcon color="#053574" />
                                <Text className="flex-1 text-[#073675] text-lg pl-2 divide-y-2">Account Information</Text>
                                <ChevronRightIcon color="#053574" />
                            </View>
                            <View className="mt-0.5 flex-row items-center justify-between px-4 bg-white pt-2 pb-2">
                                <EllipsisHorizontalIcon color="#053574" />
                                <Text className="flex-1 text-[#073675] text-lg pl-2 divide-y-2">Password reset</Text>
                                <ChevronRightIcon color="#053574" />
                            </View>
                            <View className="mt-0.5 flex-row items-center justify-between px-4 bg-white pt-2 pb-2 h-11">
                                <BellAlertIcon color="#053574" />
                                <Text className="flex-1 text-[#073675] text-lg pl-2 divide-y-2">Notification</Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "#709ae0" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                            <View className="mt-0.5 flex-row items-center justify-between px-4 bg-white pt-2 pb-2">
                                <ArrowRightOnRectangleIcon color="#053574" />
                                <Text className="flex-1 text-[#073675] text-lg pl-2 divide-y-2">Log out</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Setting;
