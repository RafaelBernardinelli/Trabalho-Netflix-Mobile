import { Text, TouchableOpacity, View } from 'react-native';

const CustomButton = ({ title, onPress, width = 120, height = 40 }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{ backgroundColor: '#111', width, height }}
    >
      <View
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: '#fff' }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
