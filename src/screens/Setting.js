import { View, Text, ScrollView, Switch, Image, TouchableOpacity, Modal, StyleSheet } from "react-native";
import pic from "../../assets/userpic.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import {
    ChevronRightIcon,
    UserCircleIcon,
    IdentificationIcon,
    EllipsisHorizontalIcon,
    BellAlertIcon,
    ArrowRightOnRectangleIcon,
}
    from "react-native-heroicons/outline";
import SimpleModal from "../components/SimpleModal";


const Setting = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            // headerShown: false,
            headerTitle: "Settings",
            headerTitleStyle: { color: "#073675" },
            headerTitleAlign: 'center'
        });
    }, []);

    return (
        <SafeAreaView className="bg-white pt-5 divide-y-2 divide-[#E5EEFA]">
            <View className="flex-column justify-center items-center pt-3 pb-10 bg-white">
                <Image
                    source={pic}
                    className=" w-40 h-40 rounded-full"
                />
                <Text className="text-xl">@Junii</Text>
            </View>
            <ScrollView className="bg-white">
                <View className="flex-column bg-white">
                    <View className="pt-1">
                        <View className="flex-column divide-y-2 divide-[#E5EEFA]">
                            <TouchableOpacity>
                                <View className="mt-0.5 flex-row items-center justify-between px-4 bg-white pt-2 pb-2">
                                    <UserCircleIcon color="#053574" />
                                    <Text className="flex-1 text-[#073675] text-lg pl-2 divide-y-2">Edit Profile</Text>
                                    <ChevronRightIcon color="#053574" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View className="mt-0.5 flex-row items-center justify-between px-4 bg-white pt-2 pb-2">
                                    <IdentificationIcon color="#053574" />
                                    <Text className="flex-1 text-[#073675] text-lg pl-2 divide-y-2">Account Information</Text>
                                    <ChevronRightIcon color="#053574" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View className="mt-0.5 flex-row items-center justify-between px-4 bg-white pt-2 pb-2">
                                    <EllipsisHorizontalIcon color="#053574" />
                                    <Text className="flex-1 text-[#073675] text-lg pl-2 divide-y-2">Password reset</Text>
                                    <ChevronRightIcon color="#053574" />
                                </View>
                            </TouchableOpacity>
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
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <View className="mt-0.5 flex-row items-center justify-between px-4 bg-white pt-2 pb-2">
                                    <ArrowRightOnRectangleIcon color="#053574" />
                                    <Text className="flex-1 text-[#073675] text-lg pl-2 divide-y-2">Log out</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View className="pt-32">
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <SimpleModal />
                </Modal>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "40",
        alignItems: "flex-end",
        justifyContent: "center"
    }
});

export default Setting;
