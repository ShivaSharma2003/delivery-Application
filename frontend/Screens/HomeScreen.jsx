import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import GlobalStyle from "../GlobalStyle.jsx";
import { useNavigation } from "@react-navigation/native";
import Header from "../Components/Header.jsx";
import Categories from "../Components/Categories.jsx";
import Featured from "../Components/Featured.jsx";

const HomeScreen = ({ navigation }) => {
  const Navigation = useNavigation();
  useLayoutEffect(() => {
    Navigation.setOptions({
      headerShown: false,
    });
  }, []);

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
