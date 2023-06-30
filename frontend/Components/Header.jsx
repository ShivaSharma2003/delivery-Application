import { View, Text, TextInput } from "react-native";
import React from "react";
import {
  MapPin,
  ChevronDown,
  UserCircle,
  MagnifyingGlass,
} from "@nandorojo/heroicons/24/outline";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View className="p-2 flex flex-col mb-2 border-b-2 border-gray-200 ">
      <View className="flex-row">
        <View className="flex-row flex-1 space-x-2">
          <MapPin color={"orange"} height={60} width={40} />
          <View className="flex-1 justify-center">
            <Text className="font-medium text-xs">Delivering to</Text>
            <View className="flex-row flex ">
              <Text className="font-bold text-md ">Shiva Sharma</Text>
              <ChevronDown color={"orange"} />
            </View>
          </View>
          <View className="items-center justify-center">
            <UserCircle
              color={"grey"}
              height={60}
              width={40}
              onPress={() => navigation.navigate('Account')}
            />
          </View>
        </View>
      </View>
      <View className="flex-row space-x-4">
        <View className="flex-row space-x-4 flex-1 border-2 border-gray-200 px-4 py-1 rounded-3xl  items-center">
          <TextInput
            placeholder="search restaurant and dishes"
            className="font-semibold flex-1 text-base"
          />
          <MagnifyingGlass color={"gray"} />
        </View>
      </View>
    </View>
  );
};

export default Header;
