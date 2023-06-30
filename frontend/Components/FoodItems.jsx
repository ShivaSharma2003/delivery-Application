import { View, Text, ScrollView } from "react-native";
import React from "react";
import FoodCard from "./FoodCard";
import { ChevronUp } from "@nandorojo/heroicons/24/outline";

export default function FoodItems() {
  return (
    <View className="px-4 mt-2 bg-white ">
      <View className="space-y-2 ">
        <View className="flex-row mb-4 items-center">
          <Text className="font-bold text-2xl text-black flex-1">
            Recommended (29)
          </Text>
          <ChevronUp color="gray" />
        </View>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </View>
    </View>
  );
}
