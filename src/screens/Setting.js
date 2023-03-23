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
    return (
        <SafeAreaView className="bg-gray-100" >
            <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingTop: 10, }}>
                <View className="flex-column justify-center items-center">
                    <Image
                        source={pic}
                        className=" w-50 h-50 rounded-full"
                    />
                    <Text>Username</Text>
                </View>
                <View className="flex-column">
                    <View className="pt-3">
                        <Text className="text-l text-[#B3C1D4] px-4">Account Settings</Text>
                        <View className="flex-column ">
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
                        </View>
                    </View>
                </View>
                <View className="flex-column">
                    <View className="pt-3">
                        <Text className="text-l text-[#B3C1D4] px-4">Security Settings</Text>
                        <View className="flex-column ">
                            <View className="mt-4 flex-row items-center justify-between px-4 bg-white pt-2 pb-2">
                                <EllipsisHorizontalIcon color="#053574" />
                                <Text className="flex-1 text-[#073675] text-lg pl-2 divide-y-2">Password reset</Text>
                                <ChevronRightIcon color="#053574" />
                            </View>

                        </View>
                    </View>
                </View>
                <View className="flex-column">
                    <View className="pt-3">
                        <Text className="text-l text-[#B3C1D4] px-4">App Settings</Text>
                        <View className="flex-column ">
                            <View className="mt-4 flex-row items-center justify-between px-4 bg-white pt-2 pb-2">
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
                        </View>
                    </View>
                </View>
                <View className="flex-column">
                    <View className="pt-3">
                        <Text className="text-l text-[#B3C1D4] px-4">Login</Text>
                        <View className="flex-column ">
                            <View className="mt-4 flex-row items-center justify-between px-4 bg-white pt-2 pb-2">
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
