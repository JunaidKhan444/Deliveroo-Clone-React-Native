import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import customData from "./MenuCategory.json";

const Categories = () => {
    const [menuCategory, setMenuCategory] = React.useState();

    React.useEffect(() => setMenuCategory(customData), []);

    return (
        <View>
            <ScrollView contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
                horizontal
                showsHorizontalScrollIndicator={false}>
                {/* CategoryCard */}
                {menuCategory?.map((menu, i) => (
                    <CategoryCard key={i} imgUrl={menu.imgUrl} title={menu.title} />
                ))}
                {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 1" />
                <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 2" />
                <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 3" />
                <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 1" />
                <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 2" />
                <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 3" /> */}
            </ScrollView>
        </View>
    )
}

export default Categories;
