import React from 'react';
import {Text , View ,Image} from 'react-native';
import AppHeader from './header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

var image = require("./assets/hiclipart.com(3).png")


export default class Home extends React.Component{



	render(){
		return(
			<View style={{flex:1}}>
				<AppHeader   navigation={this.props.navigation}  />
				<View  style={{flex:1,alignItems:'center',justifyContent:'center'}}>
					<MaterialCommunityIcons style={{borderRadius:400/2,backgroundColor:"#17baa1",padding:40,}}
					size={200} name="home" color="#fff"/>	
				</View>
			</View>

			)
	}
}