import { StyleSheet, View } from "react-native";
import { Text } from "native-base";
import { SearchIcon } from "../Icons/SearchIcon";

interface ISearchBarProps {
  placeholder: string;
}

export function SearchBar({ placeholder }: ISearchBarProps) {
  return (
    <View style={styles.container}>
      <SearchIcon />
      <Text marginLeft="12px" color="#B3B3B3">
        {placeholder}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    height: 48,
    borderColor: "#E6E6E6",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
