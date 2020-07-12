import {Alert, Linking, Platform} from 'react-native';
class utility {
  isPlatformAndroid = () => Platform.OS === 'android';
  isPlatformIOS = () => Platform.OS === 'ios';

  alerts = (title, description, onPress) => {
    Alert.alert(
      title,
      description,
      [
        {text: 'OK', onPress: onPress},
        {text: 'Cancel', onPress: () => {}},
      ],
      {
        cancelable: false,
      },
    );
  };
}

export default new utility();
