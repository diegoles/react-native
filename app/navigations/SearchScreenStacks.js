import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../screens/Search";

const searchScreenStacks = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: () => ({
      title: "Buscar",
    }),
  },
});

export default searchScreenStacks;
