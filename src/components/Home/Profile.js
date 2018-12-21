import React, { Component } from 'react';
import {StyleSheet,Text, View,Image,ScrollView,BackHandler} from 'react-native';
import { Content,Body, Header,Left,Title,Right,Button,Icon,Container,Card, CardItem,Item, Input} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CIcon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {
	constructor(props) {
		super(props);
	this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
	}
	componentWillMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
	}

	handleBackButtonClick() {
		this.props.navigation.navigate("Search");
		return true;
	}
	render() {
		return(
			<Container style={{backgroundColor: '#fff'}}>
			 <Header
		          androidStatusBarColor="#fff"
		          style={{ backgroundColor: "#fff" }}
		        >
					<Left>
						<Button transparent>
							<Icon name="menu" style={{color: '#EE3C26'}}/>
						</Button>
					</Left>
		          	<Body>
		          		<Title style={{color: '#EE3C26'}}>Doctor's Profile</Title>
		          	</Body>
					<Right>						
						<Button iconRight transparent onPress={() => this.props.navigation.navigate("Search")}>
							<Icon name="arrow-back" style={{color: '#EE3C26'}}/>
						</Button>
					</Right>
		        </Header>
				<Content >
					<View style={{marginRight: 15,marginLeft: 22}}>
						<View style={{flex: 1,flexDirection: 'row',marginBottom: 15,marginTop: 20}}>
							<Col size={45}>
								<View style={styles.square}>
									<Text style={{marginLeft: 5}}><MIcon name='star' style={{color: "#ffff80", fontSize: 13}}/> <Text style={{fontSize: 9,color:'#fff'}}>4.5/5.0</Text></Text>
								</View>
							</Col>
							<Col size={30} >
								<Text style={{fontSize: 12,color: '#000',fontWeight: 'bold'}}>Dr.John Doe</Text>
								<Text style={{fontSize: 10,color: '#333'}}>Dentist</Text>
								<Text style={{fontSize: 9,color: '#000'}}>BDS, MBBS</Text>
								<Text style={{fontSize: 9,color: '#000'}}>5 Years of experience</Text>
						        <Text style={{fontSize: 9,color: '#000',marginBottom: 3}}>120 Consulations</Text>
								<Text style={{fontSize: 11,color:'#00A368'}}>XYZ Hospital</Text>
								<Text style={{fontSize: 9,color: '#000',marginBottom: 3}}>Vasant Vihar, Delhi</Text>
								<Text style={{fontSize: 10,color: '#000'}}><CIcon name="calendar" size={12} color="#00A368" /> 28/10/2018</Text>
								<Text style={{fontSize: 9,color: '#000'}}><Text style={{color: '#00A368',fontSize: 13}} >{"\u20B9"}</Text>  700</Text>
							</Col>
							<Col size={30}></Col>
						</View>
						<View style={{marginTop: 10}}>
							<View>
								<Text style={{color: '#EE3C26',fontSize: 13,marginBottom: 4}}>About the hospital</Text>
								<Text style={{color: '#333',fontSize: 11}}>Loreum ipsum dolor sit amet,consecutor adipiscing elit,sed</Text>
								<Text style={{color: '#333',fontSize: 11}}>do eiusmod tempor incididunt ut labore et doloremagna</Text>
								<Text style={{color: '#333',fontSize: 11}}>aliqua.Ut enim ad minim veniam,quis nostrud exercitation</Text>
								<Text style={{color: '#333',fontSize: 11}}>ullamco laboris nisi ut aliquip ex ea commondo consequant.</Text>
							</View>
						</View>
						<View style={{marginTop: 15}}>
							<View>
								<Text style={{color: '#EE3C26',fontSize: 13,marginBottom: 6}}>XYZ Hospital</Text>
								<ScrollView horizontal={true} >
								 <View style={styles.squares} />
								 <View style={styles.squares}/>
								 <View style={styles.squares}/>
								 <View style={styles.squares}/>
								 <View style={styles.squares}/>
								</ScrollView>
							</View>
						</View>
						<View style={{marginTop: 15}}>
								<View>
									<Text style={{color: '#EE3C26',fontSize: 13}}>Reviews</Text>
									<View style={{flex: 1,flexDirection: 'row'}}>
										<View style={styles.circle} />
										<Text style={{fontSize: 13,color: '#000',marginTop: 30}}>XYZ Person</Text>
									</View>
									<View style={{marginTop: 10}}>
									<View>
										<Text style={{color: '#333',fontSize: 11}}>Loreum ipsum dolor sit amet,consecutor adipiscing elit,sed</Text>
										<Text style={{color: '#333',fontSize: 11}}>do eiusmod tempor incididunt ut labore et doloremagna</Text>
										<Text style={{color: '#333',fontSize: 11}}>aliqua.Ut enim ad minim veniam,quis nostrud exercitation</Text>
										<Text style={{color: '#333',fontSize: 11}}>ullamco laboris nisi ut aliquip ex ea commondo consequant.</Text>
									</View>
								</View>
							</View>
						</View>
						<View style={{marginTop: 15}}>
							<View style={{flex: 1,flexDirection: 'row',marginBottom: 30}}> 
								<Col size={50}>
									<Button small rounded style={{backgroundColor: '#EE3C26'}}>
										<Text style={{fontSize: 9,color: '#fff',textAlign: 'center',padding: 12,width: 250}}>Book Online Consulation</Text>
									  </Button>
								</Col>
								<Col size={10}></Col>
								<Col size={50} style={{marginLeft: 10}}>
									<Button small rounded style={{backgroundColor: '#EE3C26'}}>
										<Text style={{fontSize: 9,color: '#fff',textAlign: 'center',padding: 12,width: 250}}>Book Direct Visit</Text>
									  </Button>
								</Col>
							</View>
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
  square: {
    width: 128,
    height: 128,
    backgroundColor: '#EE3C26',
	borderRadius: 4
},
squares: {
    width: 52,
    height: 52,
    backgroundColor: '#EE3C26',
	borderRadius: 4,
	marginRight: 20
},
 circle: {
    width: 50,
    height: 50,
    borderRadius: 100/2,
    backgroundColor: '#EE3C26',
	marginRight: 10,marginTop: 15,marginBottom: 10
}
});