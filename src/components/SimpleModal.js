import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";


// const WIDTH = Dimensions.get("window").width;
// const HEIGHT_MODAL = 100;

const SimpleModal = () => {
    return (
        <TouchableOpacity
            disabled={true}
            className="flex-1 items-center justify-center">
            <View className="h-1/4 w-10/12 bg-white rounded-lg border border-slate-300">
                <View className="flex-coulmn items-center justify-center pt-4">
                    <Text className="text-[20] font-bold">Sample Modal Header</Text>
                    <Text className="text-lg font-bold"> Modal Description</Text>
                </View>
                <View className=" w-screen flex-row">
                    <TouchableOpacity className="flex-1 py-10 items-center ">
                        <Text className="text-blue-lg font-bold">Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 py-10 items-center ">
                        <Text className="text-blue-lg font-bold">Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </TouchableOpacity >

    )
}

export default SimpleModal;
