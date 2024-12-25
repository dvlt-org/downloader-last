import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Font from "expo-font"
import Video from "../components/Video"

const Downloading = () => {
    const loadFont = async () => {
        await Font.loadAsync({
            "inter-bold": require("../font/Inter_24pt-Bold.ttf"),
            "inter-medium": require("../font/Inter_24pt-Medium.ttf")
        })
    }
    loadFont()
    return (
        <SafeAreaView>
            <View style={{
                padding: 10,
                backgroundColor: "#f4d35e",
                marginVertical: 3,
                marginHorizontal: 3,
                borderRadius: 10,
            }}>
                <Text
                    style={{
                        fontFamily: "inter-medium",
                        fontSize: 20,
                    }}>DAVOM ETILMOQDA...</Text>
            </View>
            <ScrollView style={{
                marginHorizontal: 10,
            }}>
                <Video />
                <Video />
                <Video />
                <Video />
            </ScrollView>
        </SafeAreaView>
    );
};


export default Downloading;