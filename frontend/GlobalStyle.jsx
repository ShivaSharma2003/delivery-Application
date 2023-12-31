import { StyleSheet, Platform, StatusBar   } from "react-native";

export default StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom : Platform.OS === "android" ? 0 : 0
  },
});
