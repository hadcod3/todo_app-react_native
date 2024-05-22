import { View, type ViewProps, Text } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { IconButton } from 'react-native-paper';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export type GoalsCardProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
    item: {
        id: string;
        title: string;
    };
    handleEditTodo: (item: { id: string; title: string }) => void;
    handleDeleteTodo: (id: string) => void;
};

export function GoalsCard({ style, lightColor, darkColor, item, handleEditTodo, handleDeleteTodo, ...otherProps }: GoalsCardProps) {
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'borderColor');
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return (
        <ThemedView 
            style={[{ borderColor, backgroundColor }, style, {
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 10,
                borderColor,
                borderWidth: 1,
                marginTop: 5,
                alignItems: "center",
                flexDirection: "row",
            }]}
            {...otherProps}
        >
            <View>
                <View style={{flex: 1, flexDirection: "row"}}>
                    <IconButton 
                        style={{borderWidth: 1, borderRadius: 10, borderColor: "white"}}
                        icon="pencil" 
                        iconColor="#FFFFFF" 
                        onPress={() => handleEditTodo(item)}
                    />
                    <IconButton
                        style={{borderWidth: 1, borderRadius: 10, borderColor: "white"}}
                        icon="trash-can"
                        iconColor="#FFFFFF" 
                        onPress={() => handleDeleteTodo(item.id)}
                    />
                </View>
                <ThemedText style={{ flex: 1, lineHeight: 18, paddingVertical: 5, paddingHorizontal: 5 }}>{item.title}</ThemedText>
            </View>
        </ThemedView>
    );
}
