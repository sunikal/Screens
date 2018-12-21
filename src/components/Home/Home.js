import React, { Component } from 'react';
import {StyleSheet,Text, View,Image,TouchableOpacity} from 'react-native';
import { Content,Body, Header,Left,Title,Right,Button,Icon,Container,Card, CardItem,Item, Input} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
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
							<Icon name="menu" style={{color: '#CF4019'}}/>
						</Button>
					</Left>
		          	<Body>
		          		<Title style={{color: '#CF4019'}}>Home</Title>
		          	</Body>
					<Right>
						<Button iconRight transparent onPress={() => this.props.navigation.navigate("Search")}>
						<Icon name='arrow-forward' style={{color: '#EE3C26'}}/>
					  </Button>
					</Right>
		        </Header>
				<Content>
					<View style={{marginRight: 10,marginLeft: 10,position: 'relative'}}>
						<View style={styles.chevronTriangle} />
							<Item rounded style={{width: 250,backgroundColor: '#fff',alignItems: 'center',position: 'absolute', justifyContent: 'center', top: 60, left: 38, paddingLeft:20,paddingRight:20}}>
								<Input placeholder='Search'/>
							  </Item>
						
					</View>
					
					<View style={{padding: 5,marginTop:30}}>
						<View style={styles.crView}>
							<Col size={50}>
								<TouchableOpacity onPress={() => this.props.navigation.navigate("Search",{"from":"opthamology"})}>
							    <Card style={styles.cards}>
									  <Text style={styles.text}>Opthamology</Text>
								</Card>
							</TouchableOpacity>
							</Col>
							<Col size={5}></Col>
							<Col size={50}>
								<TouchableOpacity onPress={() => this.props.navigation.navigate("Search")}>
								<Card style={styles.card}> 
									<Text style={styles.text}>Dental</Text>
								</Card>
							</TouchableOpacity>
							</Col>						
						</View>	
						<View style={styles.crView}>
							<Col size={50}>
								<TouchableOpacity onPress={() => this.props.navigation.navigate("Search")}>
									<Card style={styles.cards}>
										  <Text style={styles.text}>Cardiology</Text>
									</Card>
								</TouchableOpacity>
							</Col>
							<Col size={5}></Col>
							<Col size={50}>
								<TouchableOpacity onPress={() => this.props.navigation.navigate("Search")}>
								<Card style={styles.card}> 
									<Text style={styles.text}>Neurology</Text>
								</Card>
								</TouchableOpacity>
							</Col>							
						</View>
						<View style={styles.crView}>
							<Col size={50}>
								<TouchableOpacity onPress={() => this.props.navigation.navigate("Search")}>
									<Card style={styles.cards}>
										  <Text style={styles.text}>dermatalogy</Text>
									</Card>
								</TouchableOpacity>
							</Col>
							<Col size={5}></Col>
							<Col size={50}>
								<TouchableOpacity onPress={() => this.props.navigation.navigate("Search")}>
									<Card style={styles.card}> 
										<Text style={styles.text}>Pediatric</Text>
									</Card>
								</TouchableOpacity>
							</Col>							
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
  card: {
    flex:1, 
	flexDirection: 'row',
	padding: 15,justifyContent: 'center',alignItems: 'center'
  },
  text:{
    fontSize:13,color:'black',padding: 8
  },
	cardView:{
	padding:16
  },
  cards:{
    flex:1, flexDirection: 'row',padding: 15,marginRight:20,justifyContent: 'center',alignItems: 'center'
  },
	crView:{
	flexDirection: 'row',marginLeft:20,marginRight:20,marginBottom: 15
 },
chevronTriangle: {
    //backgroundColor: 'transparent',
	 // justifyContent: 'center',
	  //alignItems: 'center',
	 
	  //height: 100,
	  //width: '100%',
		borderTopWidth:150,
	  borderBottomWidth: 50,
			borderTopColor:'#CF4019',
	  borderBottomColor: '#CF4019',
		borderLeftWidth: 5,
		borderLeftColor : 'transparent',
		borderRightWidth: 5,
		borderRightColor : 'transparent',
		borderBottomLeftRadius: 80,
		borderBottomRightRadius:80
  }
});