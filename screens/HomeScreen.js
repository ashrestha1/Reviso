import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import QuestionSet from '../components/QuestionSet';
const { width } = Dimensions.get('screen');

export default ({ navigation }) => {
  return (
    <ImageBackground style={{ width: '100%', height: '100%' }}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          alignItems: 'center',
          paddingHorizontal: 40,
        }}
      >
        <Icon name="menu" size={30} color="#a2a2db" style={{ width: 20 }} />
        <Icon
          name="account-circle"
          size={33}
          color="#a2a2db"
          style={{ marginLeft: 230 }}
        />
      </View>

      <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
        <Text
          style={{
            fontSize: 40,
            color: '#522289',
            fontWeight: '400',
          }}
        >
          Hello User
        </Text>

        <Text
          style={{
            fontSize: 15,
            paddingVertical: 10,
            paddingRight: 80,
            lineHeight: 22,
            fontWeight: '400',
            color: '#a2a2db',
          }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipscing elit.
        </Text>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#FFF',
            borderRadius: 40,
            alignItems: 'center',
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Image
            source={require('../assets/images-dash/search.png')}
            style={{ height: 14, width: 14 }}
          />
          <TextInput
            placeholder="Lorem ipsum"
            style={{ paddingHorizontal: 20, fontSize: 15, color: '#ccccef' }}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 10,
            marginHorizontal: '-13%',
            paddingHorizontal: '4%',
            paddingVertical: '5%',
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              // backgroundColor: '#5facdb',
            }}
          >
            <Image
              source={require('../assets/images-dash/p.png')}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 24,
                width: 24,
              }}
            />
          </TouchableOpacity>
        </ScrollView>

        <Text
          style={{
            color: 'black',
            fontWeight: '400',
            marginTop: 5,
            fontSize: 17,
          }}
        >
          Recommended
        </Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.products}
        >
          <Block flex>
            <QuestionSet
              product={{ title: '1' }}
              navigation={navigation}
              horizontal
            />
            <Block flex row>
              <QuestionSet
                product={{ title: '1' }}
                navigation={navigation}
                style={{ marginRight: theme.SIZES.BASE }}
              />
              <QuestionSet product={{ title: '1' }} navigation={navigation} />
            </Block>
            <QuestionSet
              product={{ title: '1' }}
              navigation={navigation}
              horizontal
            />
            <QuestionSet
              product={{ title: '1' }}
              navigation={navigation}
              full
            />
          </Block>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  home: {
    width: width,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.5,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300',
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    paddingVertical: theme.SIZES.BASE / 2,
  },
});
