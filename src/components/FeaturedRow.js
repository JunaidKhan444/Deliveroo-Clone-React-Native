import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCards from "./RestaurantCards";
import customData from "./Restaurants.json";

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = React.useState();

    const d = customData.filter(obj => obj.id == id);

    React.useEffect(() => {
        p = d[0]['featured'];
        setRestaurants(p);
    }, []);

    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text className=" text-xs text-gray-500 px-4">{description}</Text>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 15,
                    paddingTop: 10,
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {/* Resturant Cards */}
                {restaurants?.map((obj, i) => (
                    <RestaurantCards
                        key={i}
                        id={obj.id}
                        imgUrl={obj.imgUrl}
                        title={obj.title}
                        rating={obj.rating}
                        genre={obj.genre}
                        address={obj.address}
                        short_description={obj.short_description}
                        dishes={obj.dishes}
                        long={obj.long}
                        lat={obj.lat}
                    />
                ))}


            </ScrollView>
        </View>
    );
};

export default FeaturedRow;

