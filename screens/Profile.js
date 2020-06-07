import React from 'react';
import { StyleSheet, View, Image, Text, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons';


export default function Profile(props) {

    const { id, name, email, picture, phone, salary, position } = props.route.params.item;

    const openDial = () => {
        if (Platform.OS === "android") {
            Linking.openURL("tel:" + phone)
        } else {
            Linking.openURL("telprompt:" + phone)
        }
    }
    return (
        <View style={styles.root}>
            <LinearGradient colors={["#006aff", "#e0e0e0"]} style={{ height: "20%" }} />
            <View style={{ ...styles.center, margin: 0 }}>
                <Image source={{ uri: picture }} style={{ width: 100, height: 100, borderRadius: 50, marginTop: -50 }} />
            </View>
            <View style={styles.center}>
                <Title>{name}</Title>
                <Text style={{ fontSize: 15 }}>{position}</Text>
            </View>
            <Card style={styles.myCard} onPress={() => { Linking.openURL("mailto:" + email) }}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="email" size={32} color="#006aff" />
                    <Text style={styles.myText}>{email}</Text>
                </View>
            </Card>
            <Card style={styles.myCard} onPress={() => { openDial(phone) }}>
                <View style={styles.cardContent}>
                    <Entypo name="phone" size={32} color="#006aff" />
                    <Text style={styles.myText}>{phone}</Text>
                </View>
            </Card>
            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="attach-money" size={32} color="#006aff" />
                    <Text style={styles.myText}>{salary}</Text>
                </View>
            </Card>
            <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 15 }}>
                <Button icon="account-edit" mode="contained" theme={theme} onPress={() => console.log('Pressed')}>
                    Edit
                </Button>
                <Button icon="delete" mode="contained" theme={theme} onPress={() => console.log('Pressed')}>
                    Fire Employee
                </Button>
            </View>
        </View>
    );
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
    center: {
        alignItems: "center",
        margin: 4,
    },
    myCard: {
        margin: 3,
    },
    cardContent: {
        flexDirection: "row",
    },
    myText: {
        fontSize: 18,
        marginTop: 3,
        marginLeft: 3,
    },
});
