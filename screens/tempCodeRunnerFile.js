<TouchableOpacity
            onPress={() => this.props.navigation.navigate('Detail')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 66,
              width: 66,
              borderRadius: 50,
              backgroundColor: '#5facdb',
            }}
          >
            <Image
              source={require('../assets/images-dash/p.png')}
              style={{ height: 24, width: 24 }}
            />
          </TouchableOpacity>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 66,
              width: 66,
              borderRadius: 50,
              backgroundColor: '#ff5c83',
              marginHorizontal: 22,
            }}
          >
            <Icon name="office-building" color="white" size={32} />
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 66,
              width: 66,
              borderRadius: 50,
              backgroundColor: '#ffa06c',
            }}
          >
            <Icon name="bus" color="white" size={32} />
          </View>

          <View
            style={{
              alignItems: '