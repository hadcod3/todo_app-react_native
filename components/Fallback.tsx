import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useThemeColor } from '@/hooks/useThemeColor';

export type TodoFormProps = {
    lightColor?: string;
    darkColor?: string;
  };

const Fallback = ({
    lightColor,
    darkColor} : TodoFormProps) => {
    
    const color = useThemeColor({ light: darkColor, dark: lightColor }, 'text');
    return (
        <View style={{flex: 1, alignItems: 'center', opacity: 0.5}}>
            <Ionicons size={210} name="thunderstorm-outline" color={color}/>
            <Text style={{color, fontSize: 24, fontWeight: 600}}>NO GOALS</Text>
        </View>
    )
}

export default Fallback