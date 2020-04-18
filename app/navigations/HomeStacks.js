import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/Home";

const homeScreenStacks = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: "Inicio",
    }),
  },
});

export default homeScreenStacks;
