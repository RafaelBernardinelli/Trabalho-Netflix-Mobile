import { Text, TouchableOpacity, View } from 'react-native';

const CustomButton = ({
  title,
  onPress,
  width = 120,
  height = 40,
  disabled,
  backgroundColor,
  color,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        backgroundColor: backgroundColor,
        width,
        height,
        borderRadius: 5,
        margin: 10,
        borderColor: '#111',
        borderWidth: 1
      }}
      disabled={disabled}
    >
      <View
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: color }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
