import React from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Video from "../components/Video.js"

const Uploaded = () => {
    return (
        <SafeAreaView >
            <View style={{
                marginHorizontal: 10,
            }}>
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
                        }}>YUKLAB BO'LINDI
                    </Text>

                </View>
                <Video type="downloaded" />
                <Video type="downloaded" />
                <Video type="downloaded" />
                <Video type="downloaded" />
                <Video type="downloaded" />
                <Video type="downloaded" />
            </View>
        </SafeAreaView>
    )
}

export default Uploaded;