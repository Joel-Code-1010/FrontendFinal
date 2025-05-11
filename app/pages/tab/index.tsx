import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { stylesGlobal } from '@/const/styles';
import { useRouter } from 'expo-router';

export default function TabIndex() {
    const router = useRouter();
    return(
        <View style={stylesGlobal.container}>
            <Text>Inicio</Text>
            <TouchableOpacity onPress={() => router.push('/')}>
                <Text>Salir</Text>
            </TouchableOpacity>
        </View>
    )
}