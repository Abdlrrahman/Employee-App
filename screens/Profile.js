import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons';


export default function Profile() {
    return (
        <View style={styles.root}>
            <LinearGradient colors={["#0033ff", "#6bc1ff"]} style={{ height: "20%" }} />
            <View style={styles.center}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80' }} style={{ width: 100, height: 100, borderRadius: 50, marginTop: -50 }} />
            </View>
            <View style={styles.center}>
                <Title>Nick Cage</Title>
                <Text style={{ fontSize: 15 }}>web dev</Text>
            </View>
            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="email" size={32} color="skyblue" />
                    <Text style={styles.myText}>Abc@abc.com</Text>
                </View>
            </Card>
            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <Entypo name="phone" size={32} color="skyblue" />
                    <Text style={styles.myText}>Abc@abc.com</Text>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    center: {
        alignItems: "center",
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
