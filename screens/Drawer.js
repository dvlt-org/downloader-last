import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "./Home.js"
import { View, Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import * as Font from "expo-font"

const DrawerNavigator = createDrawerNavigator()

const drawerContext = () => {
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
        return <View style={styles.loadingContainer}><Text>Loading...</Text></View>; // Fontlar yuklanayotganini ko'rsatish
    }

    return (
        <View>
            <View
                style={{
                    marginTop: 30,
                    flexDirection: "row",
                    marginHorizontal: 10,
                    justifyContent: "space-between",
                    marginBottom: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontFamily: "robo-bold"
                    }}
                >
                    Qidiruv Tarixi
                </Text>
            </View>
            <View>
                <TouchableOpacity style={{
                    flexDirection: "row",
                    marginHorizontal: 10,
                    justifyContent: "space-between",
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: "#ebebeb",

                    marginBottom: 10
                }}>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: "robo-bold"
                    }}>https://yotuube.com</Text>
                    <Icon name="transit-enterexit" size={20} color={"#000"} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flexDirection: "row",
                    marginHorizontal: 10,
                    justifyContent: "space-between",
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: "#ebebeb",
                    marginBottom: 10
                }}>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: "robo-bold"
                    }}>https://yotuube.com</Text>
                    <Icon name="transit-enterexit" size={20} color={"#000"} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flexDirection: "row",
                    marginHorizontal: 10,
                    justifyContent: "space-between",
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: "#ebebeb",
                    marginBottom: 10
                }}>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: "robo-bold"
                    }}>https://yotuube.com</Text>
                    <Icon name="transit-enterexit" size={20} color={"#000"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default function Drawer() {
    return (
        <DrawerNavigator.Navigator
            initialRouteName="Home" s
            screenOptions={({ route }) => {
                return {
                    headerShown: false,

                }
            }}
            drawerContent={drawerContext}
        >
            <DrawerNavigator.Screen name="Home" component={Home} />
        </DrawerNavigator.Navigator>
    )
}