import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper'


export default function Home() {
    return (
        <Card style={styles.myCard}>
            <Text style={{ fontSize: 22 }}>
                Welcome Home
            </Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    myCard: {
        margin: 5,
        padding: 5,
    },
});