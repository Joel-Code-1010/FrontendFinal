import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors } from '@/const/color';
import { stylesGlobal } from '@/const/styles';
import LogoComponent from '../components/logoComponent';
import BackComponent from '../components/backComponent';
import ButtonComponent from '../components/buttonComponent';
import { MaterialIcons } from '@expo/vector-icons';


export default function LoginScreen() {
  return (
    <View style={stylesGlobal.container}>
      <BackComponent />
      <LogoComponent />
      <View style={stylesGlobal.form}>
        <Text style={stylesGlobal.h2}>Iniciar sesión</Text>

        {/* Input de correo */}
        <View style={stl.inputGroup}>
          <TextInput
            placeholder="Correo electrónico"
            style={stl.input}
            placeholderTextColor={colors.textoSecundario}
            keyboardType="email-address"
          />
          <MaterialIcons name="email" size={22} color={colors.textoSecundario} style={{marginRight : 10}} />
        </View>

        {/* Input de contraseña */}
        <View style={stl.inputGroup}>
          <TextInput
            placeholder="Contraseña"
            secureTextEntry
            style={stl.input}
            placeholderTextColor={colors.textoSecundario}
          />
          <MaterialIcons name="lock" size={22} color={colors.textoSecundario} style={{marginRight : 10}} />
        </View>

        <ButtonComponent label="Ingresar" route="/pages/tab/" />
      </View>
    </View>
  );
}

const stl = StyleSheet.create({
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,    
    justifyContent: 'space-between',
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontFamily: 'Inter',
    color: colors.textoSecundario,
    fontSize: 18,
  },
});
