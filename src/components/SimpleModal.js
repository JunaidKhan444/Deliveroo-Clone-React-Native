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
                <View className="flex-1 items-center justify-center">
                    <Text className="text-lg font-bold">Sample Modal Header</Text>
                    <Text className="text-lg font-bold"> Modal Description</Text>
                </View>

            </View>

        </TouchableOpacity >

    )
}

export default SimpleModal;
