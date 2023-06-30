import { View, Text } from "react-native";
import React from "react";
import { CheckCircle } from "@nandorojo/heroicons/20/solid";

export default function PastOrderCard() {
  return (
    <View className="p-4 pb-6 border-b-2 border-black  ">
      <View>
        <View className="flex-row pb-6 border-b-2 border-gray-500 border-dotted">
          <View className="flex-1">
            <Text className="font-bold text-base text-gray-900 ">
              DMB Seets Pvt Ltd
            </Text>
            <Text className="text-gray-800 font-bold text-sm">Lal Kothi</Text>
            <Text className="text-gray-800 font-bold text-xs">111 Rs.</Text>
          </View>
          <View className="flex-row space-x-2">
            <Text className="font-bold">Delivered</Text>
            <CheckCircle color={"green"} />
          </View>
        </View>
        <View className="py-4">
          <Text className="text-gray-600 text-sm">
            Idli Sambher (1), Poha (1)
          </Text>
          <Text className="text-gray-600 text-xs">june 26, 10:32 AM</Text>
        </View>
      </View>
      <View className="flex-row space-x-10 justify-center items-center">
        <View className="text-black border-2 border-black bg-white uppercase px-10 py-2">
          <Text className="font-bold text-lg text-black">Reorder</Text>
        </View>
        <View className="border-2 border-yellow-700 bg-white uppercase px-10 py-2">
          <Text className="font-bold text-lg text-yellow-700">Rate Order</Text>
        </View>
      </View>
    </View>
  );
}
