// components/ButonComponent.tsx
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '@/const/color';
import { useRouter } from 'expo-router';

interface Props {
  label: string;
  route: string;
}

export default function ButtonComponent({ label, route }: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity style={stl.div} onPress={() => router.push(route as any)}>
      <Text style={stl.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const stl = StyleSheet.create({
  div: {
    backgroundColor: colors.verdeOscuro,
    paddingVertical: 15,
    borderRadius: 10,
  },
  text: {
    color: colors.blanco,
    textAlign: 'center',
    fontFamily: 'InterBold',
    fontSize: 16,
  },
});
