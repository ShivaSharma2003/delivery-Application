import { View, Text } from "react-native";
import React from "react";
import { ArrowLeft } from "@nandorojo/heroicons/24/outline";
import { useNavigation } from "@react-navigation/native";

export default function AccountScreenHeader() {
  const navigation = useNavigation();
  return (
    <View className="bg-red-950 py-4 pt-10 px-2 space-y-1">
      <View>
        <ArrowLeft color={"white"} onPress={() => navigation.goBack()} />
      </View>
      {/* Account Details */}
      <View className="flex-row space-y-1 ">
        <View className="flex-1">
          <Text className="font-bold text-lg uppercase text-white ">
            Shiva Sharma
          </Text>
          <View className="flex-row  space-x-4 ">
            <Text className="font-normal text-gray-300 ">8739925438</Text>
            <Text className="font-normal text-gray-300 ">
              shivasharmajpr2003@gmail.com
            </Text>
          </View>
        </View>
        <View className="px-2">
          <Text className="text-white text-normal uppercase ">Edit</Text>
        </View>
      </View>
    </View>
  );
}
