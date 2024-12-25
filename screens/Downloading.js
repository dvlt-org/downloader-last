import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Font from "expo-font"
import Video from "../components/Video"

const Downloading = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    // Fontlarni faqat bir marta yuklash
    useEffect(() => {
        const loadFont = async () => {
            try {
                await Font.loadAsync({
                    "inter-bold": require("../font/Inter_24pt-Bold.ttf"),
                    "inter-medium": require("../font/Inter_24pt-Medium.ttf")
                });
                setFontsLoaded(true);
            } catch (error) {
                console.log("Font loading error: ", error);
                setFontsLoaded(true); // Agar fontlar yuklanmasa, keyingi renderni davom ettirish
            }
        };

        loadFont();
    }, []);

    if (!fontsLoaded) {
        return <View><Text>Loading...</Text></View>; // Fontlar yuklanayotganini ko'rsatish
    }
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