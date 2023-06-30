import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function FeaturedRestaurantCard({
  title,
  id,
  description,
  url,
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="pr-2 shrink flex w-[100px] space-y-1"
      onPress={() => navigation.navigate("Restaurant")}
    >
      <Image source={url} className="h-20 w-20 rounded-3xl " />
      <Text className="text-sm font-bold  text-gray-700">{title}</Text>
      <Text className="text-xs font-bold text-gray-500 ">30-50 min</Text>
    </TouchableOpacity>
  );
}
