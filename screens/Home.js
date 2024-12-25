import { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ActivityIndicator, Animated, ScrollView, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontIcon from "react-native-vector-icons/FontAwesome";
import { WebView } from "react-native-webview";

const Home = ({ navigation }) => {
    const [view, setView] = useState(false);
    const [search, setSearch] = useState("")


    const viewRef = useRef(null);
    const fonAnimation = useRef(new Animated.Value(1)).current
    const translateInput = useRef(new Animated.Value(0)).current


    const hanldeSearchAnimation = () => {
        Animated.timing(fonAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()
        Animated.timing(translateInput, {
            toValue: -30,
            duration: 300,
            useNativeDriver: true
        }).start()
    }

    const hanldeSearchAnimationStop = () => {
        console.log("outsize the textinput")
        Animated.timing(fonAnimation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start()
        Animated.timing(translateInput, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()
    }

    const hanldeSearch = (title) => {
        if (search === "") {
            return
        } else {
            setSearch(title.url)
        }
    }

    console.log(search)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {view ? (
                <View style={{ position: "relative", width: "100%", height: "100%" }}>
                    <View style={{
                        flexDirection: "row",
                        marginVertical: 10
                    }}>
                        <TouchableOpacity onPress={() => {
                            viewRef.current?.goBack();
                        }}>
                            <Text style={{ color: "blue" }}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            viewRef.current?.reload()
                        }} style={{
                            marginLeft: 20,
                        }}>
                            <Text style={{ color: "blue" }}>Reload</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 20, }} onPress={() => {
                            setView(false)
                        }}>
                            <Text style={{ color: "blue" }}>Home</Text>
                        </TouchableOpacity>
                    </View>
                    <WebView
                        source={{ uri: search }}
                        style={{ width: "100%", height: "70%" }}
                        onNavigationStateChange={(state) => hanldeSearch(state)}
                        ref={viewRef}
                        startInLoadingState={true}
                        renderLoading={() => (
                            <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                                <ActivityIndicator size={"large"} color={"#003566"} />
                            </View>
                        )}
                    />
                    <View
                        style={{
                            position: "absolute",
                            padding: 20,
                            backgroundColor: "#000",
                            borderRadius: "50%",
                            bottom: 1,
                            right: 20,
                            zIndex: 999
                        }}>
                        <TouchableOpacity>
                            <Icon name="download" size={30} color={"red"} />
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View style={{
                    marginHorizontal: 10,
                }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 10 }}>
                        <View>
                            <Icon name="add" size={30} onPress={() => navigation.openDrawer()} />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <FontIcon name="question" size={15} style={{ backgroundColor: "black", width: 20, color: "#fff", borderRadius: 10, textAlign: "center", textAlignVertical: "center" }} />
                            <Icon name="settings" size={20} style={{ marginHorizontal: 10 }} />
                        </View>
                    </View>
                    <Animated.View style={{
                        marginTop: 50,
                        marginBottom: 10,
                        borderWidth: 2,
                        paddingHorizontal: 10,
                        borderColor: "#457b9d",
                        borderStyle: "solid", flexDirection: "row",
                        alignItems: "center",
                        justifyContent: 'space-between',
                        borderRadius: 15,
                        transform: [
                            { translateY: translateInput, }
                        ]
                    }}>
                        <TextInput
                            numberOfLines={1}
                            placeholder="Enter your url"
                            style={{ width: "90%" }}
                            onFocus={hanldeSearchAnimation}
                            onBlur={hanldeSearchAnimationStop}
                            onChangeText={(title) => setSearch(title)}
                        />
                        <Icon name="search" size={25} color={"#000"} onPress={() => setView(!view)} />
                    </Animated.View>


                    <Animated.View style={{
                        opacity: fonAnimation
                    }}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{
                                marginVertical: 10,
                            }}>
                            <View
                                style={{
                                    width: 100, height: 60, marginRight: 5, alignItems: "center", justifyContent: "center"
                                }}>
                                <FontIcon name="youtube-play" size={40} color={"red"} onPress={() => {
                                    setSearch("https://youtube.com")
                                    setView(true)
                                }} />
                                <Text>Youtube</Text>
                            </View>
                            <View
                                style={{
                                    width: 100, height: 60, marginRight: 5, alignItems: "center", justifyContent: "center"
                                }}>
                                <FontIcon name="facebook-square" size={40} color="blue" onPress={() => {
                                    setSearch("https://facebook.com")
                                    setView(true)
                                }} />
                                <Text>Facebook</Text>
                            </View>
                            <View
                                style={{
                                    width: 100, height: 60, marginRight: 5, alignItems: "center", justifyContent: "center"
                                }}>
                                <FontIcon name="instagram" size={40} color="purple" onPress={() => {
                                    setSearch("https://instagram.com")
                                    setView(true)
                                }} />
                                <Text>Instagram</Text>
                            </View>
                            <View
                                style={{
                                    width: 100, height: 60, marginRight: 5, alignItems: "center", justifyContent: "center"
                                }}>
                                <Icon name="tiktok" size={40} color={"#000"} onPress={() => {
                                    setSearch("https://tiktok.com")
                                    setView(true)
                                }} />
                                <Text>TikTok</Text>
                            </View>
                        </ScrollView>
                        <TouchableOpacity style={{ backgroundColor: "#1C83FD", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10, marginVertical: 20 }}>
                            <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>
                                Qanday videolarni yuklab olish mumkin ?
                            </Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 100 }}>
                            <Image source={{ uri: "https://pnghq.com/wp-content/uploads/missile-png-no-watermark.png" }} width={150} height={150} style={{
                                objectFit: "contain",
                            }} />
                            <Text style={{ marginLeft: 10, color: '#FC3B3D', fontSize: 50, fontWeight: "bold", }}>100 M/S</Text>
                        </View>
                    </Animated.View>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    homeInput: {

    }
});

export default Home;