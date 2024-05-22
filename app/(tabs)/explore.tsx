import { StyleSheet, Image, Platform, View, TextInput, TouchableOpacity, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton } from 'react-native-paper';
import { useState } from 'react';
import Fallback from '@/components/Fallback';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { GoalsCard } from '@/components/GoalsCard';
import { TodoForm } from '@/components/TodoForm';

export type Todo = {
  id: string;
  title: string;
};

export default function TabTwoScreen() {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [editedTodo, setEditedTodo] = useState<Todo | null>(null);
    
    // Add Todo
    const handleAddTodo = () => {
        if (todo === "") {
          return; // early return
        }
    
        setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
        setTodo("");
    };

    
    // Handle Delete
    const handleDeleteTodo = (id: any) => {
        const updatedTodoList = todoList.filter((todo) => todo.id !== id);

        setTodoList(updatedTodoList);
    };

    // Handle Edit todo
  
    const handleEditTodo = (todo: any) => {
      setEditedTodo(todo);
      setTodo(todo.title);
    };
  

    // Handle Update
    const handleUpdateTodo = () => {
        const updatedTodos = todoList.map((item) => {
        if (item.id === editedTodo?.id) {
            return { ...item, title: todo };
        }

        return item;
        });
        setTodoList(updatedTodos);
        setEditedTodo(null);
        setTodo("");
    };

    return (

        <ParallaxScrollView
        headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
        headerImage={<Ionicons size={310} name="planet-outline" style={styles.headerImage} />}
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Set Your Goals!</ThemedText>
            </ThemedView>

            <TodoForm 
            lightColor='#A1CEDC' 
            darkColor='#1D3D47' 
            handleAddTodo={handleAddTodo} 
            handleUpdateTodo={handleUpdateTodo}
            placeholder='Set Goals'
            setTodo={setTodo}
            todo={todo}
            editedTodo={editedTodo}
            />

            {/* Render Items */}
            <View>
                {todoList.length <= 0 ? (
                    <Fallback />
                ) : (
                    todoList.map((item) => (
                        <GoalsCard 
                            key={item.id}
                            lightColor='#A1CEDC'
                            darkColor='#1D3D47'
                            item={item}
                            handleEditTodo={handleEditTodo} 
                            handleDeleteTodo={handleDeleteTodo} 
                        />
                    ))
                )}
            </View>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});
