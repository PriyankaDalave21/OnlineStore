import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';

const Carousel = () => {
    const images = [
        "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6470.jpg",
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_320,c_fill/lhnwo9ezxo7mpkpvtdcy",
        "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
    ];

    return (
        <View>
            <SliderBox
                images={images}
                autoPlay
                circleLoop
                dotcolor="#13274F"
                inactiveDotColor="#90A4AE"
                ImageComponentstyle={{
                    borderRadius: 6,
                    width: "94%",
                }}
            />
        </View>
    );
}

export default Carousel;

const styles = StyleSheet.create({

});