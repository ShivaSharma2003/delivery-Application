import { View, Text } from "react-native";
import React from "react";
import { ChevronDown } from "@nandorojo/heroicons/24/outline";

export default function AccountCards({ title, description, link }) {
  return (
    <View className="p-4 pb-6 space-y-1 flex-row justify-center items-center border-b-2 border-gray-400 ">
      <View className="flex-1">
        <Text className="font-bold text-black text-lg ">{title}</Text>
        <Text className="font-semibold text-gray-700 ">{description}</Text>
      </View>
      <View>
        <ChevronDown color={"gray"} />
      </View>
    </View>
  );
}
