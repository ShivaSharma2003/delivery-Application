import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import GlobalStyle from "../GlobalStyle.jsx";
import { useNavigation } from "@react-navigation/native";
import Header from "../Components/Header.jsx";
import Categories from "../Components/Categories.jsx";
import Featured from "../Components/Featured.jsx";
import { useDispatch } from "react-redux";
import { fetchRestaurantAction } from "../Redux/Actions/RestaurantAction.js";

const HomeScreen = () => {
  const Navigation = useNavigation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    Navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(fetchRestaurantAction());
  }, [dispatch]);

  return (
    <>
      <SafeAreaView style={GlobalStyle.androidSafeArea} />
      <View>
        <Header />
      </View>
      <ScrollView>
        <Categories />
        <Featured />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
