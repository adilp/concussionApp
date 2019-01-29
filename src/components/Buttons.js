import React from "react";
import { Button } from "react-native-elements";
import { View } from "react-native";

const Buttons = ({ onPress, title, customStyles }) => {
    const defaultStyles = {
      marginTop: 10,
      borderRadius: 5,
    };

    return (
      <Button
        title={title}
        onPress={onPress} 
        buttonStyle={[defaultStyles, customStyles]}
      />
  );
};

export default Buttons;
