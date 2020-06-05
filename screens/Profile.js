import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Profile() {
    return (
        <View style={styles.root}>
            <LinearGradient colors={["#0033ff", "#6bc1ff"]} style={{ height: "20%" }} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    }
});
