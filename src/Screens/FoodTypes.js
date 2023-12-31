import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

const FoodTypes = () => {
    const types = [
        {
            id: "0",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/rwnkrdtnusqdkyjssahq",
            name: "Biriyani",
        },
        {
            id: "1",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/qwrkgxefwzjergtzowsc",
            name: "Dessert"
        },
        {
            id: "2",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/uckbx3rr87jhakb81mbs",
            name: "Burger"
        },
        {
            id: "3",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/z9xmu9pb65lcbt3wepud",
            name: "Salad",
        },
        {
            id: "4",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/m7osxfhdon2opecztidb",
            name: "Sandwiches"
        }
    ];

    return (
        <View>
            <ScrollView horizontal>
                {types.map((item, index) => (
                    <View key={item.id} style={{ alignItems: 'center', margin: 10 }}>
                        <Image
                            source={{ uri: item.image }}
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 30
                            }}
                        />
                        <Text>{item.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

export default FoodTypes;

const styles = StyleSheet.create({});
