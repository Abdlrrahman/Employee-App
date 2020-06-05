import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper'


export default function CreateEmployee() {
    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("")
    const [Email, setEmail] = useState("")
    const [Salary, setSalary] = useState("")
    const [Picture, setPicture] = useState("")
    const [Model, setModel] = useState(false)

    return (
        <View style={styles.root}>
            <TextInput style={styles.inputStyle} label='Name' value={Name} mode="outlined" theme={theme} onChangeText={text => setName(text)} />
            <TextInput style={styles.inputStyle} label='Phone' value={Phone} mode="outlined" theme={theme} keyboardType="number-pad" onChangeText={text => setPhone(text)} />
        </View>
    )
}

const theme = {
    colors: {
        primary: "red"
    }
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    inputStyle: {
        margin: 5,
    }
});