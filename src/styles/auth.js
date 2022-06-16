import {StyleSheet} from 'react-native';

const color = {
  primary: '#5F2EEA',
};

module.exports = StyleSheet.create({
  bgMain: {
    backgroundColor: color.primary,
    color: 'white',
  },
  textMain: {
    color: color.primary,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
  },
  title: {
    color: color.primary,
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 15,
    marginBottom: 30,
  },
  input: {
    borderColor: 'hsla(0, 0%, 87%, 0.6)',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'hsla(210, 50%, 99%, 1)',
    padding: 15,
    marginTop: 5,
  },
  button: {
    color: 'white',
    backgroundColor: color.primary,
  },
});
