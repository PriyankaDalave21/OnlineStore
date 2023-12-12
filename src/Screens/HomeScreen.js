import { View, Text, TextInput, SafeAreaView, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Carousel from './Carousel';
import FoodTypes from './FoodTypes';
import QuickFood from './QuickFood';
import hotels from '../data/hotels';
import MenuIteam from './MenuItem';

const HomeScreen = ( { navigation }) => {
    const data = hotels;
    return (
        <ScrollView style={{ marginTop: 14, }}>

            {/* Search bar */}
            <View style={styles.container}>
                <TextInput placeholder='Search, Order, Enjoy, Repeat!' />
                <MaterialIcons  style={{marginRight:5}} name="search" size={20} color="#E52B50" />
            </View>

            {/* Image slider component */}
            <Carousel />

            {/* Food Types Components */}
            <FoodTypes />
            <QuickFood />
            {/* Filter Buttons  */}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
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
                    <AntDesign name="filter" size={20} color="black" />
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
            </View>
            {data.map((item, index) => (
                <MenuIteam key={index} item={item} />
            ))}
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
        // padding: 10,
        height: 50
    },
    TextInput: {
        fontSize: 10
    }
})
export default HomeScreen;