import React from 'react';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper'


export default function Home() {
    const data = [
        { id: 1, name: "one", position: "web dev" },
        { id: 2, name: "two", position: "back-end dev" },
        { id: 3, name: "three", position: "devOps dev" },
        { id: 4, name: "four", position: "front-end dev" },
        { id: 5, name: "one", position: "web dev" },
        { id: 6, name: "two", position: "back-end dev" },
        { id: 7, name: "three", position: "devOps dev" },
        { id: 8, name: "four", position: "front-end dev" },
    ]
    const renderList = ((item) => {
        return (
            <Card style={styles.myCard} key={item.id}>
                <View style={styles.cardView}>
                    <Image style={{ width: 60, height: 60, borderLeftWidth: 30 }}
                        source={{ uri: "https://images.unsplash.com/photo-1580045235733-0bc45cd279ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=429&q=80" }}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.text}>
                            {item.name}
                        </Text>
                        <Text style={styles.text}>
                            {item.position}
                        </Text>
                    </View>
                </View>
            </Card>
        )
    })
    return (
        <View>
            <FlatList data={data} renderItem={({ item }) => { return renderList(item) }} keyExtractor={(item) => `${item.id}`} />
            <FAB
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{ colors: { accent: "#006aff" } }}
                onPress={() => console.log('Pressed')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    myCard: {
        margin: 5,
    },
    cardView: {
        flexDirection: "row",
        padding: 6,
    },
    text: {
        fontSize: 20,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});