import React from "react";
import IconFA from "@expo/vector-icons/FontAwesome5";
import IconFA5 from "@expo/vector-icons/FontAwesome5";
import IconMA from "@expo/vector-icons/MaterialCommunityIcons";
import IconFE from "@expo/vector-icons/Feather";
import IconSI from "@expo/vector-icons/SimpleLineIcons";

export default function Icon(props) {
  if (props.iconFamily == "FA") {
    return <IconFA {...props} style={props.style} color="brown" />;
  }
  if (props.iconFamily == "FA5") {
    return <IconFA5 {...props} style={props.style} size={20} />;
  }
  if (props.iconFamily == "MA") {
    return <IconMA size={28} {...props} style={props.style} />;
  }
  if (props.iconFamily == "FE") {
    return <IconFE size={28} {...props} style={props.style} color="brown" />;
  }
  if (props.iconFamily == "SI") {
    return <IconSI size={28} {...props} style={props.style} color="brown" />;
  }
}
