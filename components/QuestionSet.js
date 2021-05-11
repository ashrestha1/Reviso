import React from 'react';

import { StyleSheet, Dimensions, Image } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width } = Dimensions.get('screen');

class QuestionSet extends React.Component {
  render() {
    const {
      product,
      horizontal,
      full,
      style,
      priceColor,
      imageStyle,
    } = this.props;
    const imageStyles = [
      styles.image,
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle,
    ];

    const navigation = this.props.navigation;

    return (
      <Block
        row={horizontal}
        card
        flex
        style={[styles.product, styles.shadow, style]}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Question')}>
          <Block flex style={[styles.imageContainer, styles.shadow]}>
            <Image source={{ uri: product.image }} style={imageStyles} />
          </Block>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Question')}>
          <Block flex space="between" style={styles.productDescription}>
            <Text size={14} style={styles.productTitle}>
              {product.title}
            </Text>
            <Text size={12} muted={!priceColor} color={priceColor}>
              ${product.price}
            </Text>
          </Block>
        </TouchableOpacity>
      </Block>
    );
  }
}

export default QuestionSet;

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
  },
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
  },
  horizontalImage: {
    width: 'auto',
  },
  fullImage: {
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});
