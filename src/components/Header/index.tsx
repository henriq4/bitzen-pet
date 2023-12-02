import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import { ArrowLeftIcon } from "../Icons/ArrowLeftIcon";
import { router } from "expo-router";

type IHeaderProps = {
  title: string;
};

export function Header({ title }: IHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <ArrowLeftIcon />
        </TouchableOpacity>
        <Text marginLeft="16px" fontSize="22px" color="#262626">
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: 84,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: 16,
  },
  content: {
    width: "100%",
    paddingHorizontal: 20,
    ddisplay: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
