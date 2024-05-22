import React, { useState } from 'react';
import { TextInput, View, type ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { IconButton } from 'react-native-paper';
import { Todo } from '@/app/(tabs)/explore';

export type TodoFormProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  placeholder?: string;
  handleAddTodo: () => void;
  handleUpdateTodo: () => void;
  setTodo: (todo: string) => void;
  todo: string;
  editedTodo?: Todo | null;
};

export function TodoForm({
  style,
  lightColor,
  darkColor,
  placeholder,
  handleAddTodo,
  handleUpdateTodo,
  editedTodo,
  setTodo,
  todo,
  ...otherProps
}: TodoFormProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'borderColor');
    const color = useThemeColor({ light: darkColor, dark: lightColor }, 'text');

    return (
        <View style={[{  borderColor }, style, {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        }]} {...otherProps}>
            <TextInput 
                style={{
                    color,
                flex: 1,
                paddingVertical: 8,
                paddingHorizontal: 10,
                }}
                placeholder={placeholder}
                placeholderTextColor={color}
                value={todo}
                onChangeText={(userText) => setTodo(userText)}
            />
            {editedTodo ? (
                <IconButton 
                style={{ borderRadius: 10, backgroundColor }}
                icon="update" 
                iconColor="#FFFFFF"
                onPress={() => handleUpdateTodo()}
                />
            ) : (
                <IconButton 
                style={{ borderRadius: 10, backgroundColor }}
                icon="plus" 
                iconColor="#FFFFFF"
                onPress={() => handleAddTodo()}
                />
            )}
        </View>
    );
}
