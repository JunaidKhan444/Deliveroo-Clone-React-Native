import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

// const WIDTH = Dimensions.get("window").width;
// const HEIGHT_MODAL = 100;

const SimpleModal = (props) => {
    closeModal = (bool) => {
        props.changeModalVisible(bool);
    }
    return (
        <TouchableOpacity
            disabled={true}
            className="flex-1 items-center justify-center">
            <View className="h-1/8 w-10/12 bg-white rounded-lg border border-slate-300 pt-2 divide-y-2 divide-[#E5EEFA]">
                <View className="flex-coulmn items-center justify-center pt-2 pb-3">
                    <Text className="text-lg font-bold">Are sure you want to logout?</Text>
                </View>
                <View className="flex-row divide-x-2 divide-[#E5EEFA]">
                    <TouchableOpacity className="flex-1 py-8 items-center"
                        onPress={() => closeModal(false, 'cancel')}
                    >
                        <Text className="text-color-blue font-bold">Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 py-8 items-center"
                        onPress={() => closeModal(false, 'logout')}
                    >
                        <Text className="text-blue-lg font-bold">Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity >

    );
};

export default SimpleModal;

