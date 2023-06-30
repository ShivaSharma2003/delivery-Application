import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import FoodPic from "../assets/Food-1.jpg";

export default function CategoriesCard({ url, description, title, id }) {
  return (
    <TouchableOpacity className="pr-2">
      <View className="relative">
        <Image source={FoodPic} className="h-40 w-40 rounded-xl" />
        <Text className="text-white font-bold absolute bottom-2 left-2 text-2xl">{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
