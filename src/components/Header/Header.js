import React from "react";
import { View, Image } from "react-native";

import Styles from "./Styles";

const Header = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.containerTopo}>
        <Image
          style={Styles.image}
          source={require("../../assets/img/Login/logo.png")}
        />
      </View>
    </View>
  );
};

export default Header;
