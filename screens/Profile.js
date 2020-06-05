import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Profile() {
    return (
        <View style={styles.root}>
            <LinearGradient colors={["#0033ff", "#6bc1ff"]} style={{ height: "20%" }} />
            <View style={{ alignItems: "center" }}>
                <Image style={{ width: 100, height: 100, borderRadius: 50, marginTop: -50 }} source={{ uri: "https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    }
});
