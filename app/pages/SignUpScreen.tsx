import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import BackComponent from '../components/backComponent';
import LogoComponent from '../components/logoComponent';
import ButtonComponent from '../components/buttonComponent';
import { stylesGlobal } from '@/const/styles';
import { colors } from '@/const/color';

export default function SignUpScreen() {
    return (
        <View style={stylesGlobal.container}>
            <BackComponent />
            <LogoComponent />

            <View style={stylesGlobal.form}>
                <Text style={stylesGlobal.h2}>Registrate</Text>
                <TextInput placeholder='Nombre' style={stl.input} />
                <TextInput placeholder='Apellido' style={stl.input} />
                <TextInput placeholder='Correo electrónico' style={stl.input} />
                <TextInput placeholder='Contraseña' style={stl.input} secureTextEntry />
                <TextInput placeholder='Confirmar contraseña' style={stl.input} secureTextEntry />
                <ButtonComponent label='Continuar' route='/pages/PreferencesScreen' />
                {/* link iniciar sesion */}
            </View>

        </View>
    )
}


const stl = StyleSheet.create({
    
    input: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        fontFamily: 'Inter',
        color: colors.textoSecundario,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 10,
    },    
})