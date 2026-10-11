import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
type Props = {
    label: string;
    onPress: () => void;
    disabled?: boolean;
};
export function AppButton({ label, onPress, disabled = false }: Props) {
    return (
        <Pressable
            accessibilityRole="button"
            onPress={onPress}
            disabled={disabled}
            style={({ pressed }) => [
            styles.button,
            (pressed || disabled) && styles.muted,
            ]}>
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#21618C',
        alignItems: 'center',
    },
    muted: { opacity: 0.65 },
    label: { color: '#FFFFFF', fontWeight: '700' },
});