import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text,
  Dimensions, Platform,
  TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');
  
/**
 * Toolbar Component
 */
class Toolbar extends Component {

  static propTypes = {
    theme: PropTypes.string,
    navIcon: PropTypes.element,
    primary: PropTypes.string,
    navIconName: PropTypes.string,
    onIconClicked: PropTypes.func,
    title: PropTypes.string,
    titleColor: PropTypes.string,
    iconNameColor:PropTypes.string,
    actions: PropTypes.array
  };
  state = {};

  render () {
    const that = this;
    var {
      title,
      bgColor,
      titleColor,
      navIconName,
      onIconClicked,
      actions,
      iconNameColor
    } = this.props;

    var themeStyle = {
      backgroundColor: bgColor || '#fff',
      color: titleColor || 'rgba(0,0,0,.87)',
      iconColor: 'rgba(0,0,0,.54)',
      nameColor:iconNameColor || 'rgba(0,0,0,.87)',
    };

    // alert(this.props.navIcon)

    return (
      <LinearGradient style={[styles.toolbar, {backgroundColor: themeStyle.backgroundColor}, this.props.style]} colors={['#096eab', '#039FFC']} start={{x: 0.0, y: 0.5}} end={{x: 1, y: 0.5}}>
        <View style={[styles.title]}>
          <Text style={[styles.title__text, {color: themeStyle.color}]}>{title}</Text>
        </View>
        <TouchableWithoutFeedback onPress={onIconClicked} >
          <View style={styles.navBtn}>
            <View style={styles.navBtn__icon}>{that.props.navIcon}</View>
            <Text style={[styles.navBtn__name, {color: themeStyle.nameColor}]}>{navIconName}</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={{position: 'absolute', top: 20, right: 0, flexDirection: "row", alignItems: 'flex-end'}}>
          {
            actions && actions.map((action, index) => (
              <TouchableWithoutFeedback
                key={index}
                style={styles.actionBtn}
                onPress={action.onPress}>
                <View style={styles.actionBtn__icon}>{action.navIcon}</View>
              </TouchableWithoutFeedback>
            ))
          }
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: Platform.OS == 'ios'?64:54,
    paddingTop: Platform.OS == 'ios'?20:0,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title__text: {
    fontSize: 17,
    backgroundColor:'transparent'
  },
  navBtn: {flexDirection:'row',position: 'absolute', top: 20, left: 0},
  navBtn__icon: {
    width: 44,
    height: 44,
    paddingHorizontal: (44-24)/2,
    paddingTop: Platform.OS == 'ios'?(44-24)/2:-14
  },
  navBtn__name:{
    marginTop: Platform.OS == 'ios'?(44-24)/2+3:-14,
    marginLeft:-4,
  },
  actionBtn: {
    height: 44
  },
  actionBtn__icon: {
    height: 44,
    paddingHorizontal: (44-24)/2,
    paddingTop: Platform.OS == 'ios'?(44-24)/2:-14
  }
});


export default Toolbar
