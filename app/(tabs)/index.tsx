import { Image, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
    return (
        <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
            <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.reactLogo}
            />
        }>
        <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Do Something!</ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Step 1: Set Goal</ThemedText>
            <ThemedText>
            Improve your habits to see changes.
            Press{' '}
            <ThemedText type="defaultSemiBold">
                your mind
            </ThemedText>{' '}
                to unlock all milestones.
            </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Step 2: Do it!</ThemedText>
            <ThemedText>
            Do little by little to change your little habits. Adjust to your capacities.
            </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Step 3: Repeat Again</ThemedText>
            <ThemedText>
            When you have felt a slight change in yourself, do it again to feel a bigger impact.
            </ThemedText>
        </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
