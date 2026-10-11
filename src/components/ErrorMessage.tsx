import React from 'react';
import { Text, View } from 'react-native';
type Props = { message: string };
export function ErrorMessage({ message }: Props) {
    return (
    <View style={{ padding: 16 }}>
        <Text accessibilityRole="alert">{message}</Text>
    </View>
    );
}
