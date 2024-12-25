import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DownloadingScreen from "./screens/Downloading.js";
import UploadedScreen from "./screens/Uploaded.js";
import Drawer from "./screens/Drawer.js";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRef } from "react";
import "./constants/gesture-handler.js"
import { Animated, TouchableWithoutFeedback } from "react-native";

const bottomTab = createBottomTabNavigator();

const CustomBottom = ({ children, onPress }) => {
  const animationValue = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.timing(animationValue, {
      toValue: -20,
      duration: 300,
      useNativeDriver: true,
    }).start();
    onPress();
  };

  const handlePressOut = () => {
    Animated.timing(animationValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View
        style={{
          transform: [
            {
              translateY: animationValue,
            },
          ],
        }}
      >
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <bottomTab.Navigator
        initialRouteName="Tabs"
        screenOptions={({ route }) => {
          return {
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              if (route.name === "Tabs") {
                iconName = "tablet";
              } else if (route.name === "Downloading") {
                iconName = "download";
              } else {
                iconName = "upload";
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarShowLabel: true,
            tabBarActiveTintColor: "#6A92BB",
            tabBarStyle: {
              height: 60,
              elevation: 0,
              borderTopWidth: 0,
              backgroundColor: "#f8f8f8", // Orqa fon rangi
            },
            tabBarItemStyle: {
              width: 100, // Icon va labelni markazlashtirish
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            },
            tabBarLabelStyle: {
              fontSize: 12, // Labelning o‘lchami
              fontWeight: "bold", // Label qalinligi
              marginTop: 5, // Ikon va label orasidagi masofa
              color: "#808080", // Labelning rangini belgilash
            },
            tabBarIconStyle: {
              marginBottom: 0, // Ikon va label o'rtasidagi masofani boshqarish
            },
          };
        }}
      >
        <bottomTab.Screen
          name="Tabs"
          component={Drawer}
          options={() => {
            return {
              tabBarButton: (props) => <CustomBottom {...props} />,

            };
          }}
        />
        <bottomTab.Screen
          name="Downloading"
          component={DownloadingScreen}
          options={() => {
            return {
              tabBarButton: (props) => <CustomBottom {...props} />,
            };
          }}
        />
        <bottomTab.Screen
          name="Uploaded"
          component={UploadedScreen}
          options={() => {
            return {
              tabBarButton: (props) => <CustomBottom {...props} />,
            };
          }}
        />
      </bottomTab.Navigator>
    </NavigationContainer>
  );
}