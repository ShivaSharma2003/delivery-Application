import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GlobalStyle from "../GlobalStyle";
import {
  ArrowLeft,
  ChevronDown,
  Minus,
  Plus,
  PlusCircle,
} from "@nandorojo/heroicons/24/outline";
import { UserGroup } from "@nandorojo/heroicons/20/solid";

export default function CheckOutScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <SafeAreaView style={GlobalStyle.androidSafeArea}>
      <ScrollView className="p-4">
        {/* CheckOut Header */}
        <View className="bg-white/20 space-y-1">
          <View className="flex-row space-x-4 border-b-2 border-gray-200 py-2 items-center">
            <ArrowLeft color={"gray"} />
            <Text className="font-bold text-lg text-black ">
              DMB Sweets Pvt Ltd
            </Text>
          </View>
          <View>
            <View className="flex-col justify-center space-x-2 border-2 border-gray-200 rounded-lg px-4 py-2 shadow-sm ">
              <View className="flex-row border-r-1 border-gray-300 space-x-2 items-center ">
                <UserGroup color={"orange"} />
                <View>
                  <Text className="font-bold text-black text-base ">
                    44 min to Shiva Sharma
                  </Text>
                  <Text className="truncate font-bold text-gray-500 ">
                    G1 d334 kardhani scheme jaipur jhotwara
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/*  */}
          <View className="border-2 border-gray-300 rounded-xl px-4 py-2 shadow-sm flex-row justify-center items-center">
            <View className="shrink ">
              <Text className="font-bold text-black text-sm">
                You are ordering for shiva sharma
              </Text>
              <Text className="text-gray-600 text-xs ">
                We will share order tracking and delivery communication on
                8739925438
              </Text>
            </View>
            <View>
              <Text className="text-yellow-700 font-bold text-base">Edit</Text>
            </View>
          </View>

          {/* Order details */}

          <View className="border-2 border-gray-300 rounded-xl px-4 py-2 shadow-sm">
            <View className="border-b-2 border-dotted border-gray-600 flex-row py-2 items-center">
              <View className="flex-1 space-y-1">
                <Text className="font-bold text-black text-base ">Paneer</Text>
                <Text className="text-sm text-black">[500 Gm]</Text>
                <View className="flex-row">
                  <Text className="text-sm font-bold ">Customize</Text>
                  <ChevronDown color={"gray"} />
                </View>
              </View>

              <View className="flex-row space-x-6 justify-center items-center">
                <View className="flex-row border-2 border-gray-400 rounded-md space-x-2 py-1 px-2 items-center justify-center">
                  <Minus color={"green"} height={15} width={15} />
                  <Text className="font-bold text-green-700">1</Text>
                  <Plus color={"green"} height={15} width={15} />
                </View>
                <View>
                  <Text className="font-bold text-black text-base">
                    200 Rs.
                  </Text>
                </View>
              </View>
            </View>

            <View className="flex-row border-b-2 border-gray-600 border-dotted py-4 ">
              <Text className="flex-1 font-bold text-black text-base ">
                Add More Items
              </Text>
              <PlusCircle color={"black"} />
            </View>

            <View className="flex-row py-4 ">
              <Text className="flex-1 font-bold text-black text-base ">
                Add Cooking Request
              </Text>
              <PlusCircle color={"black"} />
            </View>
          </View>

          {/* Bill Details */}
          <View className="border-2 border-gray-300 rounded-xl px-4 py-2 shadow-sm">
            <View className="flex-row justify-center items-center py-4 border-b-2 border-gray-300 ">
              <Text className="font-bold text-gray-800 text-base flex-1 ">
                Items Total
              </Text>
              <Text className="font-bold text-base text-gray-800">210 Rs</Text>
            </View>
            <View className="flex-row justify-center items-center py-4 border-b-2 border-gray-300 ">
              <Text className="font-bold text-gray-800 text-base flex-1 ">
                Delivery Fees
              </Text>
              <Text className="font-bold text-base text-gray-800">
                34.00 Rs
              </Text>
            </View>
            <View className="space-y-1 my-2 border-b-2 border-gray-300 py-4 ">
              <View className="flex-row">
                <Text className="font-bold text-gray-600 text-base flex-1">
                  Delivery Tip
                </Text>
                <Text className="font-bold text-yellow-800 text-base ">
                  Add Tip
                </Text>
              </View>
              <View className="flex-row">
                <Text className="font-bold text-gray-600 text-base flex-1">
                  Platform Fee
                </Text>
                <Text className="font-bold text-gray-600 text-base ">
                  30.00 Rs
                </Text>
              </View>
              <View className="flex-row">
                <Text className="font-bold text-gray-600 text-base flex-1">
                  GST and Restaurant Charges
                </Text>
                <Text className="font-bold text-gray-600 text-base ">
                  25.30 Rs
                </Text>
              </View>
            </View>

            <View className="flex-row py-4 ">
              <Text className="font-bold text-gray-950 text-base flex-1">
                To Pay
              </Text>
              <Text className="font-bold text-gray-950 text-base ">249 Rs</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="flex-row border-2 border-gray-300 rounded-xl px-4 py-2 shadow-sm justify-center items-center m-2">
        <View className="flex-row py-4 flex-1">
          <Text className="font-bold text-gray-950 text-lg flex-1">
            confirm Order
          </Text>
        </View>
        <View className="bg-green-800 px-8 py-4 rounded-lg">
          <Text className="text-white font-bold text-base">Pay 249 Rs</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
