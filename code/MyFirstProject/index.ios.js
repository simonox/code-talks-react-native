/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

var Movie = React.createClass({
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image
						style={styles.poster}
						source={{uri: this.props.item.posters.thumbnail}}
					/>
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.title}>{this.props.item.title}</Text>
					<Text style={styles.info}>{this.props.item.year}</Text>
				</View>
			</View>
		);
	}
});

class MyFirstProject extends Component {
	render() {
		return (
			<Movie item={{
                   title: "Hello CodeTalks",
                   year: "2016",
                   posters: {
                     thumbnail: "https://developer.aboutyou.de/blog/wp-content/uploads/2014/10/code.talks13.jpg"
                   }
    }}></Movie>
		);
	}
}









const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	infoContainer: {
		flex: 1,
		flexDirection: 'column'
	},
	imageContainer: {
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	title: {
		fontSize: 20,
		textAlign: 'left',
		paddingLeft: 8
	},
	year: {
		textAlign: 'left',
		padding: 8
	},
	info: {
		textAlign: 'left',
		padding: 8
	},
	thumbnail: {
		width: 53,
		height: 81,
		borderRadius: 26,
	},
	actor: {
		textAlign: 'left',
		paddingLeft: 8,
		padding: 2,
	},
	poster: {
		width: 175,
		height: 175,
		borderRadius: 12,
	},
	listView: {
		paddingTop: 20,
		backgroundColor: '#F5FCFF',
	},
});

AppRegistry.registerComponent('MyFirstProject', () => MyFirstProject);
