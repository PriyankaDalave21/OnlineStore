import { View, Text, TextInput, SafeAreaView, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from './Carousel';
import FoodTypes from './FoodTypes';
import QuickFood from './QuickFood';

const HomeScreen = () => {
    return (
        <ScrollView style={{ marginTop: 14, }}>
           
            {/* Search bar */}
            <View style={styles.container}>
                <TextInput placeholder='Search, Order, Enjoy, Repeat!' />
                <Icon name="search" size={24} color="#E52B50" />
            </View>

            {/* Image slider component */}
            <Carousel />

            {/* Food Types Components */}
            <FoodTypes />
            <QuickFood />
            {/* Filter Buttons */}
            {/* <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                <Pressable
                    style={{
                        marginHorizontal: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "#D0D0D0",
                        padding: 10,
                        borderRadius: 20,
                        width: 120,
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ marginRight: 6 }}>Filter</Text>
                    <Icon name="filter" size={20} color="black" />
                </Pressable>

                <Pressable
                    style={{
                        marginHorizontal: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "#D0D0D0",
                        padding: 10,
                        borderRadius: 20,
                        justifyContent: "center",
                        width: 120
                    }}
                >
                    <Text>Sort By Rating</Text>

                </Pressable>

                <Pressable
                    style={{
                        marginHorizontal: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "#D0D0D0",
                        padding: 10,
                        borderRadius: 20,
                        justifyContent: "center",
                    }}
                >
                    <Text>Sort By Price</Text>

                </Pressable>
            </View> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: '#C0C0C0',
        borderRadius: 7,
        margin: 10,
        padding: 10
    },
    TextInput: {
        fontSize: 17
    }
})
export default HomeScreen;