
import { createStackNavigator } from "react-navigation-stack";
import TopFiveScreen from "../screens/TopFive";

const topFiveScreenStacks = createStackNavigator({
    TopFive: {
      screen: TopFiveScreen,
      navigationOptions: () => ({
        title: "Top 5 Restaurantes",
      }),
    },
  });

  export default topFiveScreenStacks;