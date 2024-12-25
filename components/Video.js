import React, { useEffect } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import Micon from "react-native-vector-icons/MaterialIcons"
import * as Font from "expo-font"


const Video = ({ type }) => {
    const [paused, setPaused] = React.useState(true)

    const [fontsLoaded, setFontsLoaded] = React.useState(false);

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
        <View style={{
            flexDirection: "row",
            marginVertical: 10,
        }}>
            <Image source={{
                uri: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_67661aa03f13fa34f1aec4bf_67661aa03f13fa34f1aec4c0/smart_crop_516x290"
            }} width={100} height={100} style={{
                objectFit: "cover",
                borderRadius: 10,
            }} />
            <View style={{
                marginLeft: 20,
                width: "100%",
            }}>
                <Text style={{
                    marginVertical: 5,
                    fontSize: 16,
                    fontWeight: "bold",
                    fontFamily: "inter-bold",
                }}>Video nomi.mp4</Text>
                {
                    type !== "downloaded" && (
                        <View style={{
                            width: "100%",
                            backgroundColor: "#cecfc7",
                            height: 10,
                            borderRadius: 5,
                            position: "relative",
                            zIndex: -1
                        }}>
                            <View style={{
                                position: "absolute",
                                left: 0,
                                width: "10%",
                                backgroundColor: "#0496ff",
                                height: "100%",
                                borderRadius: 5,
                            }}></View>
                        </View>
                    )
                }
                <View>
                    <View style={{
                        flexDirection: "row",
                        marginHorizontal: 0.001,
                        marginVertical: 5,
                    }}>
                        {
                            type !== "downloaded" && (
                                <>
                                    <Text style={{
                                        fontSize: 12,
                                        color: "#000",
                                        fontWeight: "bold",
                                    }}>42.12mb</Text>
                                    <Text style={{
                                        fontSize: 15,
                                        marginHorizontal: 5,

                                    }}>/</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        color: "#000",
                                        fontWeight: "bold",
                                    }}>21.02mb</Text>
                                </>
                            )
                        }
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        marginHorizontal: 0.001,
                        alignItems: "center",
                        marginTop: 5,
                    }}>
                    {
                        type !== "downloaded" ? (
                            <>
                                <Text

                                    style={{
                                        color: "#4361ee",
                                        fontWeight: "bold"
                                    }}>42 MB/s
                                </Text>
                                <TouchableOpacity
                                    style={{
                                        marginLeft: 20,
                                    }}
                                    onPress={() => setPaused(!paused)}
                                >
                                    <Icon name={paused ? "play" : "pause"} size={20} />
                                </TouchableOpacity>
                            </>
                        ) : (
                            <View style={{
                                flexDirection: "row",

                            }}>
                                <TouchableOpacity
                                    style={{
                                    }}
                                >
                                    <Micon name="delete" size={25} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        marginLeft: 10,
                                    }}
                                >
                                    <Micon name="play-circle-filled" size={25} />
                                </TouchableOpacity>
                            </View>
                        )
                    }

                </View>
            </View>
        </View>
    )
}

export default Video