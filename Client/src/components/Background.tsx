import React, { memo } from 'react';
import { StyleSheet, ImageBackground, KeyboardAvoidingView } from "react-native"

type Props = {
    children: React.ReactNode;
};

const Background = ({ children }: Props) => (  //React Components use "()" instead of "{}" in order to use memo
    <ImageBackground
        source={require("../../assets/electricar3_fixed.jpg")}
        resizeMode="cover"
        style={styles.Background}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            {children}
        </KeyboardAvoidingView>
    </ImageBackground>
);

const styles = StyleSheet.create({
    Background: {
        flex: 1,
        width: "100%",
    },
    container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default memo(Background);