import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import styles from './HomeScreenStyles';

export default ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View
          style={{
            marginTop: '5%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            style={{ width: '40%', height: '40%' }}
            source={require('../assets/LogoMakr.png')}
          />
          <Text
            style={[
              styles.text,
              {
                marginTop: '5%',
                fontSize: 22,
                fontWeight: '500',
              },
            ]}
          >
            Reviso
          </Text>
        </View>
        <View
          style={{
            marginTop: '-5%',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Image
                source={require('../assets/facebook.png')}
                style={styles.socialLogo}
              />
              <Text style={styles.text}>Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../assets/google.png')}
              style={styles.socialLogo}
            />
            <Text style={styles.text}>Google</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={[
            styles.text,
            {
              color: '#ABB4BD',
              fontSize: 15,
              textAlign: 'center',
              marginVertical: 20,
            },
          ]}
        >
          or
        </Text>

        <View style={styles.inputTitle}>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput style={styles.input} />
          <View
            style={{ borderBottomColor: '#D8D8D8', borderBottomWidth: 1 }}
          />
        </View>
        <View style={styles.inputTitle}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput secureTextEntry={true} style={styles.input} />
          <View
            style={{ borderBottomColor: '#D8D8D8', borderBottomWidth: 1 }}
          />
        </View>

        <Text style={[styles.text, styles.link, { textAlign: 'right' }]}>
          Forgot Password?
        </Text>

        <TouchableOpacity style={styles.submitContainer}>
          <Text
            style={[
              styles.text,
              {
                color: '#FFF',
                fontWeight: '600',
                fontSize: 16,
              },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>

        <Text
          style={[
            styles.text,
            {
              fontSize: 14,
              color: '#ABB4BD',
              textAlign: 'center',
              marginTop: 24,
            },
          ]}
        >
          Don't have an account?{' '}
          <Text style={[styles.text, styles.link]}>Register Now</Text>
        </Text>
      </View>
    </ScrollView>
  );
};
