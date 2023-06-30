import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GlobalStyle from "../GlobalStyle";
import FoodPic from "../assets/Food-1.jpg";
import {
  Star,
  MagnifyingGlass,
  ArrowLeft,
  Share,
  Heart,
  InformationCircle,
  MapPin,
} from "@nandorojo/heroicons/24/outline";
import FoodItems from "../Components/FoodItems";

export default function RestaurantScreen({
  title,
  description,
  address,
  time,
  latitude,
  longitude,
  url,
  ratings,
  vegetarian,
}) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      {/* Restaurant Inforamtion */}
      <ScrollView className="space-y-2">
        <View className="bg-gray-300 rounded-b-3xl px-4 py-4 pt-10 space-y-4">
          <View>
            <ArrowLeft color="black" onPress={() => navigation.goBack()} />
          </View>
          <View className="flex-row border-1 border-gray-500 rounded-2xl p-4 bg-white shadow-lg ">
            <View className="flex flex-1 ">
              <View className="flex-col shrink space-y-1 ">
                <View className="border-b-2 border-gray-300 pb-2 space-y-1">
                  <View className="flex-row justify-center items-center space-x-4 shrink ">
                    <Text className="font-bold text-2xl ">
                      Ranjasthan Food Bhandar
                    </Text>
                    <Share color="gray" />
                    <Heart color="gray" />
                  </View>
                  <View className="flex-row space-x-2 items-center ">
                    <Star color={"green"} className="font-bold " />
                    <Text className="font-bold text-gray-500 ">4.5</Text>
                    <Text className="font-bold text-gray-500 ">
                      (500+ ratings)
                    </Text>
                    <InformationCircle color={"gray"} />
                  </View>
                  <Text className="font-bold text-gray-800 ">
                    Sweets, North Indian
                  </Text>
                </View>
                <View className="space-y-2 py-2 my-2 border-b-2 border-gray-300 ">
                  <View className="flex-row space-x-2 px-4 ">
                    <Text className="font-bold text-black ">Outlet</Text>
                    <Text className="font-bold text-gray-700">
                      Vaishali Nagar
                    </Text>
                  </View>

                  <View className="flex-row space-x-2 px-4 ">
                    <Text className="font-bold text-black ">49min</Text>
                    <Text className="font-bold text-gray-700">
                      Delivery to Shiva Sharma
                    </Text>
                  </View>
                </View>
                <View className="flex-row space-x-2">
                  <View className="flex-row border-r-2 border-gray-500 px-2 justify-center items-center space-x-1">
                    <MapPin color={"gray"} />
                    <Text className="font-bold ">7.8 km</Text>
                  </View>
                  <View className="flex-row space-x-2 items-center justify-center ">
                    <Text className="font-bold ">Free Delivery with offer</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Search Bar */}
        <SafeAreaView style={GlobalStyle.androidSafeArea}>
          <View>
            <View className="flex-row items-center justify-center ">
              <Text className="font-semibold text-2xl text-gray-800 italic ">
                Menu
              </Text>
            </View>
            <View className="px-2 pb-4 mb-4 border-b-2 border-gray-300 ">
              <View className="px-4 py-2 border-2 border-gray-500 shadow-md bg-gray-200 rounded-xl flex-row justify-center items-center space-x-2">
                <TextInput
                  placeholder="Search for dishes"
                  className="font-bold text-base flex-1 "
                />
                <MagnifyingGlass color={"gray"} />
              </View>
            </View>
            {/* Items */}
            <FoodItems />
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}
