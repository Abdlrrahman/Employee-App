import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Card } from 'react-native-paper'


export default function Home() {
    return (
        <Card style={styles.myCard}>
            <View style={styles.myCard}>
                <Image style={{ width: 60, height: 60, borderLeftWidth: 30 }}
                    source={{ uri: "https://images.unsplash.com/photo-1591121213541-c93b6e74c47a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80" }}
                />
                <Text>
                    Welcome Home
            </Text>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    myCard: {
        margin: 5,
    },
    cardView: {
        flexDirection: "row",
    }
});