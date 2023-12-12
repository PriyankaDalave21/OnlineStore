import { StyleSheet, Text, Saf, ScrollView ,Pressable} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View } from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FoodItem from './FoodItem';

const MenuScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <>
        <ScrollView>
            <View style={{
                height: 300,
                backgroundColor: "#B0C4DE",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
            }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        margin: 10,
                    }}
                >
                    <MaterialIcons
                        onPress={() => navigation.goBack()}
                        name="arrow-back"
                        size={24}
                        color="black"
                    />
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <AntDesign name="search1" size={22} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: "600", marginLeft: 7 }}>
                            Search
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: "white",
                        height: 210,
                        marginHorizontal: 20,
                        marginVertical: 5,
                        padding: 10,
                        borderRadius: 15,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={{ fontSize: 19, fontWeight: "bold" }}>
                            {route.params.name}
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <AntDesign
                                style={{ marginHorizontal: 7 }}
                                name="sharealt"
                                size={24}
                                color="black"
                            />
                            <AntDesign name="hearto" size={24} color="black" />
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 7,
                        }}
                    >
                        <MaterialIcons name="stars" size={24} color="green" />
                        <Text style={{ marginLeft: 3, fontSize: 17, fontWeight: "400" }}>
                            {route.params.rating}
                        </Text>
                        <Text style={{ marginLeft: 3 }}>•</Text>
                        <Text style={{ marginLeft: 3, fontSize: 17, fontWeight: "400" }}>
                            {route.params.time}mins
                        </Text>
                    </View>
                    <Text style={{ marginTop: 8, color: "gray", fontSize: 17 }}>
                        {route.params.cuisines}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 10,
                        }}
                    >
                        <Text>Outlet</Text>
                        <Text
                            style={{ marginLeft: 15, fontSize: 15, fontWeight: "bold" }}
                        >
                            {route.params.adress}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 10,
                        }}
                    >
                        <Text>22 mins</Text>
                        <Text
                            style={{ marginLeft: 15, fontSize: 14, fontWeight: "bold" }}
                        >
                            Home
                        </Text>
                    </View>

                    <Text
                        style={{
                            borderColor: "gray",
                            borderWidth: 0.6,
                            height: 1,
                            marginTop: 12,
                        }}
                    />

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 10,
                        }}
                    >
                        <FontAwesome5 name="bicycle" size={24} color="orange" />
                        <Text style={{ marginLeft: 7, color: "gray", fontSize: 16 }}>
                            0-3 Kms |
                        </Text>
                        <Text style={{ marginLeft: 7, color: "gray", fontSize: 16 }}>
                            35 Delivery Fee will Apply
                        </Text>
                    </View>
                </View>
            </View>
            <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            fontWeight: "500",
            marginTop: 10,
          }}
        >
          MENU
        </Text>
        <Text
          style={{
            borderColor: "gray",
            borderWidth: 0.6,
            height: 1,
            marginTop: 12,
          }}
        />

        {route.params.menu.map((item, index) => (
          <FoodItem item={item} key={index} />
        ))}

        </ScrollView>
<Pressable>
<MaterialIcons
          style={{ textAlign: "center" }}
          name="menu-book"
          size={24}
          color="white"
        />
</Pressable>

        </>
    )
}

export default MenuScreen;

const styles = StyleSheet.create({})