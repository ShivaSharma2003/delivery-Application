import { View, Text } from "react-native";
import React from "react";
import PastOrderCard from "./PastOrderCard";

export default function PastOrders() {
  return (
    <>
      <View className="bg-black/20 p-4 ">
        <Text className="font-bold text-gray-600 ">Past Orders</Text>
      </View>
      
      <PastOrderCard />
      <PastOrderCard />
      <PastOrderCard />
      <PastOrderCard />
      <PastOrderCard />
    </>
  );
}
