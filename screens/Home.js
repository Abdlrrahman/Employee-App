import React, { useEffect } from 'react';
import { StyleSheet, Text, Image, Alert, View, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';
import env from "./variables";
import { useSelector, useDispatch } from 'react-redux';


export default function Home(props) {

    const dispatch = useDispatch()

    const { data, loading } = useSelector((state) => {
        return state
    })

    const fetchData = () => {
        fetch(env.apiUrl)
            .then(res => res.json())
            .then(data =>
                dispatch({ type: "ADD_DATA", payload: data }),
                dispatch({ type: "SET_LOADING", payload: false })
            ).catch(err =>
                Alert.alert('Error:', err.message)
            )
    }

    useEffect(() => {
        fetchData()
    }, [data])

    const renderList = ((item) => {
        return (
            <Card style={styles.myCard} onPress={() => props.navigation.navigate("Profile", { item })}>
                <View style={styles.cardView}>
                    <Image style={{ width: 60, height: 60, borderLeftWidth: 30 }}
                        source={{ uri: item.picture }}
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
            <FlatList data={data} renderItem={({ item }) => { return renderList(item) }} keyExtractor={(item) => item._id} onRefresh={() => fetchData()} refreshing={loading} />
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