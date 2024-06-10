// app/index.tsx (or HomeScreen.tsx if you named it differently)
import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './types';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const Separator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue à l'écran d'accueil</Text>
      <Button
        title="Lister tous les utilisateurs"
        onPress={() => navigation.navigate('UserListScreen')}
      />
      <Separator />
      <Button
        color="#f194ff"
        title="Ajout nouvel utilisateur"
        onPress={() => navigation.navigate('UserFormScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeScreen;
