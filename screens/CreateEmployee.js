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
            <Button icon="upload" mode="contained" onPress={() => setModal(true)}>
                Upload Image
            </Button>
            <Modal animationType="slide" transparent={false} visible={modal}>
                <View>
                    <View style={styles.modalButtonView}>
                        <Button icon="camera" mode="contained" onPress={() => setModal(false)}>
                            Cancel
                    </Button>
                        <Button icon="camera" mode="contained" onPress={() => setModal(false)}>
                            Cancel
                    </Button>
                    </View>
                    <Button icon="camera" onPress={() => setModal(false)}>
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
    }
});