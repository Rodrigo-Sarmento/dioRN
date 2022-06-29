import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const imageProfileGitHub =
  'https://avatars.githubusercontent.com/u/59851576?v=4';

const urlToMyGitHub = 'https://github.com/Rodrigo-Sarmento';

const App = () => {
  const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGitHub);
    if (res) {
      await Linking.openURL(urlToMyGitHub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={'#010409'} barStyle="ligth-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Logomarca das letras RS com fundo preto"
          style={style.avatar}
          source={{uri: imageProfileGitHub}}
        />
        <Text
          accessibilityLabel="Nome: Rodrigo Sarmento"
          style={[style.defaultText, style.name]}>
          Rodrigo Sarmento
        </Text>
        <Text
          accessibilityLabel="Nickname: Rodrigo-Sarmento"
          style={[style.defaultText, style.nickname]}>
          Rodrigo-Sarmento
        </Text>
        <Text style={[style.defaultText, style.description]}>🏴‍☠️</Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in GitHub
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#010409',
    flex: 1, //expandir para tela inteira
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: 'white',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  nickname: {
    fontSize: 18,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
