import React from 'react';
import
{
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';

import
{
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

const backgroundImage = require('../logindesign/photo-1540449078594-94d6173856c0.jpg');
const logoimg = require('../logindesign/logo.png');
const { width, height } = Dimensions.get("window");
const App = (props) =>
{
  return (

    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{
        flex: 1
      }}>
        <View style={{ position: 'absolute', zIndex: 1, width: width, height: height, }}></View>
        <ImageBackground source={backgroundImage} style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
          height: height,
        }} >
          <Image source={logoimg}
            style={{ width: 100, height: 100, marginLeft: 150, marginRight: 150, marginTop: -80 }} />
          <View>

            <Input style={{}}
              placeholder='Username'
              leftIcon={
                <Icon
                  name='user'
                  size={24}
                  color='black'
                />
              }
            />
            <Input style={{}}
              placeholder='Password'
              leftIcon={
                <Icon
                  name='password'
                  size={24}
                  color='black'
                />
              }
            />
            <Button style={{}}
              title="Forgot Password"
              type="clear"
            />
            <Button
              title="Sign In"
            />
            <Text style={{ textAlign: 'center', paddingTop: 10 }}>Don't have an account? Sign Up</Text>
          </View>
        </ImageBackground>

      </ScrollView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({


});

export default App;
