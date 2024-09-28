import { StyleSheet, View, Text } from "react-native";
import { AppBarProps } from "./types";


export default function AppBar({ title }: AppBarProps) {
    return (
        <View style={styles.appBar}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        appBar: {
            height: 75,
            width: '100%',
            backgroundColor: "#03fc98",
            position: 'absolute',
            top: 0,
            left: 0
        },
        title: {
            fontSize: 24,
            color: 'white',
            marginLeft: 15,
            marginTop: 30,
        }
    }
);