import { StyleSheet, NativeModules, Platform } from 'react-native';

const { StatusBarManager } = NativeModules;

const backgroundApp = '#e5e5e5';
const backgroundCard = '#f5fdff';
const gray = '#8a8c8d';
const green = '#00b074';

const styles = StyleSheet.create({
  bold: {
    fontWeight: '500',
  },
  cardContainer: {
    backgroundColor: backgroundCard,
    borderRadius: 10,
    flex: 1,
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  container: {
    backgroundColor: backgroundApp,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
  },
  gray: {
    color: gray,
  },
  icon: {
    backgroundColor: green,
    borderRadius: 15,
    padding: 5,
  },
  iconText: {
    columnGap: 10,
    flexDirection: 'row',
  },
  img: {
    borderRadius: 10,
    height: 100,
    width: 110,
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
  },
  infoContainer: {
    columnGap: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listContainer: {
    flex: 1,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowReverse:{
    flexDirection: 'row-reverse'
  },
  text: {
    fontSize: 14,
  },
  title: {
    fontSize: 20,
  },
});

export default styles;
