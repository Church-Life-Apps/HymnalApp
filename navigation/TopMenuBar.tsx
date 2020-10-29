import { Text, Avatar, Icon, MenuItem, OverflowMenu, Toggle, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import Constants from "expo-constants";
import React from "react";
import { View, StyleSheet } from "react-native";



export default () => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const MenuIcon = (props) => (
    <Icon {...props} name='more-vertical'/>
  );
  
  const SettingsIcon = (props) => (
    <Icon {...props} name='settings'/>
  );

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu}/>
  );

  const renderOverflowMenuAction = () => (
    <React.Fragment>
      <Toggle>lyrics</Toggle>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>
        <MenuItem accessoryLeft={SettingsIcon} title='Settings'/>
      </OverflowMenu>
    </React.Fragment>
  );

  const renderTitle = (props) => (
    <View style={styles.titleContainer}>
      <Avatar
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
      <Text category="h1" {...props}>Hymnal App</Text>
    </View>
  );

  return (
    <TopNavigation
      title={renderTitle}
      accessoryRight={renderOverflowMenuAction}
      style={Constants.statusBarHeight >= 16 ? { paddingTop: Constants.statusBarHeight } : { width: "100%" }}
    />
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    paddingHorizontal: 20, fontSize: 15, color: '#ccccef',
    paddingVertical: 10
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: 16,
  },
  searchBar: {
  }
});