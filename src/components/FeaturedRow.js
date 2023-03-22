import { View, Text, ScrollView } from "react-native";
import React from "react"
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCards from "./RestaurantCards";

const FeaturedRow = ({ id, title, description }) => {
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
                <ResturantCards
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Shushi"
                    rating={4.5}
                    genre="Japanese"
                    address="Bemina"
                    start_discription="Test Description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <ResturantCards
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Shushi"
                    rating={4.5}
                    genre="Japanese"
                    address="Bemina"
                    start_discription="Test Description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <ResturantCards
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Shushi"
                    rating={4.5}
                    genre="Japanese"
                    address="Bemina"
                    start_discription="Test Description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView>
        </View>
    )
}

export default FeaturedRow;
