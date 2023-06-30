import { View, Text, SafeAreaView, ScrollView, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GlobalStyle from "../GlobalStyle";
import PastOrders from "../Components/PastOrders";
import AccountCards from "../Components/AccountCards";
import AccountScreenHeader from "../Components/AccountScreenHeader";

export default function AccountScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView className="space-y-2 ">
      {/* Header */}
      <AccountScreenHeader />
      <SafeAreaView style={GlobalStyle.androidSafeArea}>
        <View className=''>
          {/* Account Settings */}
          <AccountCards
            title={"My Account"}
            description={"Favourites, Hidden restaurants & Settings"}
            link={""}
          />
          <AccountCards
            title={"Addresses"}
            description={"Share, Edit & Add New Addresses"}
            link={""}
          />
          <AccountCards
            title={"Payments and Refunds"}
            description={"Refund Status & Payment Modes"}
            link={""}
          />
          <AccountCards title={"Help"} description={"Faqs & Links"} link={""} />
          <AccountCards
            title={"Subscription"}
            description={"Check Subscription Status"}
            link={""}
          />

          {/* Past Orders */}
          <PastOrders />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
