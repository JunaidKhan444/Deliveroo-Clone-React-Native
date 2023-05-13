import React from "react";

import { View, StyleSheet, Modal } from "react-native";

const ModalPopUp = ({ visible, children }) => {
    const [modalVisible, setModalVisible] = React.useState(visible);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.modalBackGround}>
                <View style={styles.modalContainer}>
                    {children}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackGround: {
        flex: 1,
        backgruondColor: "rgb(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "80%",
        backgruondColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    header: {
        width: "100%",
        height: "40",
        alignItems: "flex-end",
        justifyContent: "center",
    }
});

export default ModalPopUp;

