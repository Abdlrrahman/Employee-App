import React, { useState } from 'react';
import { StyleSheet, View, Modal, Alert, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import env from "./variables"


export default function CreateEmployee({ navigation }) {

    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("")
    const [Email, setEmail] = useState("")
    const [Salary, setSalary] = useState("")
    const [Picture, setPicture] = useState("")
    const [Position, setPosition] = useState("")
    const [modal, setModal] = useState(false)

    const pickFromGallery = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if (granted) {
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5,
            })
            if (!data.cancelled) {
                let newFile = {
                    uri: data.uri,
                    type: `test/${data.uri.split(".")[1]}`,
                    name: `test.${data.uri.split(".")[1]}`
                }
                handleUpload(newFile)
            }
        } else {
            Alert.alert("Permission needed")
        }
    }

    const pickFromCamera = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA)
        if (granted) {
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5,
            })
            if (!data.cancelled) {
                let newFile = {
                    uri: data.uri,
                    type: `test/${data.uri.split(".")[1]}`,
                    name: `test.${data.uri.split(".")[1]}`
                }
                handleUpload(newFile)
            }
        } else {
            Alert.alert("Permission needed")
        }
    }

    const handleUpload = async (image) => {
        try {
            const data = new FormData()
            data.append("file", image)
            data.append("upload_preset", env.UPLOAD_PRESET)
            data.append("cloud_name", env.CLOUD_NAME)
            console.log(data)

            let response = await fetch(env.API, {
                method: "POST",
                body: data,
            })
            response = await response.json()
            console.log(response)
            setPicture(response.secure_url)
            setModal(false)
        } catch (error) {
            console.log("handleUpload ", error)
            Alert.alert(error);
        }
    }

    const submitData = async () => {
        try {
            let response = await fetch(`${env.apiUrl}/send-data`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: Name,
                    email: Email,
                    phone: Phone,
                    picture: Picture,
                    salary: Salary,
                    position: Position
                })
            })
            response = await response.json()
            Alert.alert(`${response.name} is saved successfully`)
            navigation.navigate("Home")
        } catch (error) {
            console.log("submitData ", error)
            Alert.alert(error)
        }
    }

    return (
        <View style={styles.root}>
            <TextInput style={styles.inputStyle} label='Name' value={Name} mode="outlined" theme={theme} onChangeText={text => setName(text)} />
            <TextInput style={styles.inputStyle} label='Phone' value={Phone} mode="outlined" theme={theme} keyboardType="number-pad" onChangeText={text => setPhone(text)} />
            <TextInput style={styles.inputStyle} label='Email' value={Email} mode="outlined" theme={theme} onChangeText={text => setEmail(text)} />
            <TextInput style={styles.inputStyle} label='Salary' value={Salary} mode="outlined" theme={theme} onChangeText={text => setSalary(text)} />
            <TextInput style={styles.inputStyle} label='Position' value={Position} mode="outlined" theme={theme} onChangeText={text => setPosition(text)} />
            <Button style={styles.inputStyle} icon={Picture == "" ? "upload" : "check"} mode="contained" theme={theme} onPress={() => setModal(true)}>
                Upload Image
            </Button>
            <Button icon="content-save" theme={theme} onPress={() => submitData()}>
                Save
            </Button>
            <Modal animationType="slide" transparent={true} visible={modal}>
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                        <Button icon="image-area" mode="contained" theme={theme} onPress={() => pickFromGallery()}>
                            gallery
                        </Button>
                        <Button icon="camera" mode="contained" theme={theme} onPress={() => pickFromCamera()}>
                            camera
                        </Button>
                    </View>
                    <Button icon="camera" theme={theme} onPress={() => setModal(false)}>
                        Cancel
                    </Button>
                </View>
            </Modal>
        </View >
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