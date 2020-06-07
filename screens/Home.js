import React from 'react';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper'


export default function Home(props) {
    const data = [
        { id: "1", name: "one", email: "abc@abc.com", salary: "1000", phone: "123456", picture: "https://images.unsplash.com/photo-1580045235733-0bc45cd279ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=429&q=80", position: "web dev" },
        { id: "2", name: "two", email: "xyz@abc.com", salary: "2000", phone: "098765", picture: "https://images.unsplash.com/photo-1580045235733-0bc45cd279ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=429&q=80", position: "back-end dev" },
        { id: "3", name: "three", email: "jim@abc.com", salary: "3000", phone: "123098", picture: "https://images.unsplash.com/photo-1580045235733-0bc45cd279ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=429&q=80", position: "devOps dev" },
        { id: "4", name: "four", email: "jack@abc.com", salary: "4000", phone: "654321", picture: "https://images.unsplash.com/photo-1580045235733-0bc45cd279ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=429&q=80", position: "front-end dev" },
    ]
    const renderList = ((item) => {
        return (
            <Card style={styles.myCard} key={item.id} onPress={() => props.navigation.navigate("Profile", { item })}>
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
        <View style={styles.root}>
            <FlatList data={data} renderItem={({ item }) => { return renderList(item) }} keyExtractor={(item) => item.id} />
            <FAB
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{ colors: { accent: "#006aff" } }}
                onPress={() => props.navigation.navigate("CreateEmployee")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
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