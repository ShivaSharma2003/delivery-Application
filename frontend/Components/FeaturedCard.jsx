import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRight } from "@nandorojo/heroicons/24/outline";
import FeaturedRestaurantCard from "./FeaturedRestaurantCard";
import FoodPic from "../assets/Food-1.jpg";
import { useSelector } from "react-redux";

export default function FeaturedCard({ title, description, id }) {
  const { laoding, error, restuarant, success } = useSelector(
    (state) => state.Restaurants
  );

  return (
    <View className="mb-4 py-2 px-4  border border-1 border-gray-300 rounded-2xl ">
      <View className="flex-col">
        <Text className="text-xl font-bold text-gray-500">{title}</Text>
        <View className="flex-row space-x-2">
          <Text className="text-sm text-gray-500">{description}</Text>
          <ArrowRight color={"orange"} />
        </View>
      </View>
      <ScrollView horizontal className="my-2 px-2">
        <FeaturedRestaurantCard
          title={"Rajasthan Food Bhandar"}
          id={2353344}
          url={FoodPic}
        />
      </ScrollView>
    </View>
  );
}
