import React, { useState } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper'


export default function CreateEmployee() {
    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("")
    const [Email, setEmail] = useState("")
    const [Salary, setSalary] = useState("")
    const [Picture, setPicture] = useState("")
    const [modal, setModal] = useState(false)

    return (
        <View style={styles.root}>
            <TextInput style={styles.inputStyle} label='Name' value={Name} mode="outlined" theme={theme} onChangeText={text => setName(text)} />
            <TextInput style={styles.inputStyle} label='Phone' value={Phone} mode="outlined" theme={theme} keyboardType="number-pad" onChangeText={text => setPhone(text)} />
            <TextInput style={styles.inputStyle} label='Email' value={Email} mode="outlined" theme={theme} onChangeText={text => setEmail(text)} />
            <TextInput style={styles.inputStyle} label='Salary' value={Salary} mode="outlined" theme={theme} onChangeText={text => setSalary(text)} />
            <Button style={styles.inputStyle} icon="upload" mode="contained" theme={theme} onPress={() => setModal(true)}>
                Upload Image
            </Button>
            <Button icon="content-save" theme={theme} onPress={() => console.log("Saved")}>
                Save
            </Button>
            <Modal animationType="slide" transparent={true} visible={modal}>
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                        <Button icon="image-area" mode="contained" theme={theme} onPress={() => setModal(false)}>
                            gallery
                        </Button>
                        <Button icon="camera" mode="contained" onPress={() => setModal(false)}>
                            camera
                        </Button>
                    </View>
                    <Button icon="camera" theme={theme} onPress={() => setModal(false)}>
                        Cancel
                    </Button>
                </View>
            </Modal>
        </View>
    )
}

const theme = {
    colors: {
        primary: "#006aff"
    }
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    inputStyle: {
        margin: 5,
    },
    modalButtonView: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
    modalView: {
        position: "absolute",
        bottom: 2,
        width: "100%",
        backgroundColor: "white"
    }
});