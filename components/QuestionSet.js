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
    const destination = this.props.destination;
    const questionData = this.props.question;
    const size = 12;
    const padding = 1.5;

    var questionSetReplacedTitle = questionData.title.replace('math', '');
    questionSetReplacedTitle = questionSetReplacedTitle.replace('computer', '');
    questionSetReplacedTitle = questionSetReplacedTitle.replace('physics', '');

    return (
      <Block card flex style={[styles.product, styles.shadow, style]}>
        <TouchableOpacity
          onPress={() => navigation.navigate(destination)}
          style={{ height: '100%' }}
        >
          <Block
            style={[
              styles.productDescription,
              { padding: theme.SIZES.BASE / padding },
            ]}
            row
            space="between"
          >
            <Text size={size} style={styles.productTitle}>
              {questionSetReplacedTitle}
            </Text>
            <Text size={size} muted={!priceColor} color={priceColor}>
              {questionData.graded ? questionData.deadline : 'Ungraded'}
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
    paddingBottom: 6,
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
