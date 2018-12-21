import React, { Component } from 'react';
import {StyleSheet,Text, View,Image,BackHandler,TouchableOpacity} from 'react-native';
import { Content,Body, Header,Left,Title,Right,Button,Icon,Container,Card, CardItem,Item, Input} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import CIcon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state={
			from:this.props.navigation.getParam("from","")
		}
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
	}
	componentWillMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
	}

	handleBackButtonClick() {
		this.props.navigation.navigate("Home");
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
		          		<Title style={{color: '#EE3C26'}}>Search</Title>
		          	</Body>
					<Right>
						<Button iconRight transparent onPress={() => this.props.navigation.navigate("Home")}>
							<Icon name="arrow-back" style={{color: '#EE3C26'}}/>
						</Button>
						<Button iconRight transparent onPress={() => this.props.navigation.navigate("Profile")}>
							<Icon name="arrow-forward" style={{color: '#EE3C26'}}/>
						</Button>
					</Right>
		        </Header>
				<Content >
					<View style={{marginRight: 15,marginLeft: 15}}>
						<View style={{flex: 1,flexDirection: 'row',marginBottom: 15,marginTop: 20}}>
							<Col size={39}>
								<Text style={{fontSize: 10,color: '#000',textAlign:'center'}}> Sort By Starts</Text>
							</Col>
							<Col size={30}>
								<Button style={{height: 20,backgroundColor:'#00A368'}}><Text style={{fontSize: 9,color: '#fff',padding: 15,textAlign:'center'}}> Ascending </Text></Button>
							</Col>
							<Col size={30}>
								<Button bordered style={{height: 20,borderColor: '#00A368'}}><Text style={{fontSize: 9,padding: 15,textAlign:'center',color:'#00A368'}}> Descending </Text></Button>
							</Col>
						</View>
						<View style={{flex: 1,flexDirection: 'row'}}>
							<Col size={39}>
								<Text style={{fontSize: 10,color: '#000',textAlign:'center'}}> Sort By Experience</Text>
							</Col>
							<Col size={30}>
								<Button style={{height: 20,backgroundColor:'#00A368'}}><Text style={{fontSize: 9,color: '#fff',padding: 15,textAlign:'center'}}> Ascending </Text></Button>
							</Col>
							<Col size={30}>
								<Button bordered style={{height: 20,borderColor: '#00A368'}}><Text style={{fontSize: 9,padding: 15,textAlign:'center',color:'#00A368'}}> Descending </Text></Button>
							</Col>
						</View>
						<View style={{marginTop: 15}}>
							<TouchableOpacity onPress={() => this.props.navigation.navigate("Profile")}>
							<Card style={{marginRight: 15,marginLeft: 15}} >
								<View style={{flex: 1,flexDirection: 'row'}}> 
									<Col size={30} style={{marginLeft: 10,marginRight: 10,marginTop: 15,marginBottom: 10}}>
										<View style={styles.circle} />
									</Col>
									<Col size={30} style={{marginTop:15,marginLeft: -50}}>
										<Text style={{fontSize: 11,color: '#000'}}>Dr.John Doe</Text>
										<Text style={{fontSize: 10,color: '#000'}}>Dentist(5 Years)</Text>
										<Text style={{fontSize: 9,color: '#000'}}>MBBS,BDS</Text>
										<Text></Text>
										<Text style={{fontSize: 11,color:'#00A368'}}>XYZ Hospital</Text>
										<Text style={{fontSize: 9,color: '#000'}}>Vasant Vihar, Delhi</Text>
									</Col>
									<Col size={30} style={{marginTop:15}}>
										<Text style={{fontSize: 9,color: '#000'}}>First Available Date</Text>
										<Text style={{fontSize: 10,color: '#000'}}><CIcon name="calendar" size={12} color="#00A368" /> 28/10/2018</Text>
										<Text></Text>
										<Text style={{fontSize: 9,color: '#000'}}><Text style={{color: '#00A368',fontSize: 13}} >{"\u20B9"}</Text>  700</Text>
									</Col>
								</View>
								<View style={{marginTop: 20,marginBottom: 10,marginRight: 10}}>
									<View style={{flex: 1,flexDirection: 'row'}}> 
										<Col size={50} style={{marginLeft: 10}}>
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
							</Card>
							</TouchableOpacity >
						</View>
						<View style={{marginTop: 5}}>
							<TouchableOpacity onPress={() => this.props.navigation.navigate("Profile")}>
							<Card style={{marginRight: 15,marginLeft: 15}}>
								<View style={{flex: 1,flexDirection: 'row'}}> 
									<Col size={30} style={{marginLeft: 10,marginRight: 10,marginTop: 15,marginBottom: 10}}>
										<View style={styles.circle} />
									</Col>
									<Col size={30} style={{marginTop:15,marginLeft: -50}}>
										<Text style={{fontSize: 11,color: '#000'}}>Dr.John Doe</Text>
										<Text style={{fontSize: 10,color: '#000'}}>Dentist(5 Years)</Text>
										<Text style={{fontSize: 9,color: '#000'}}>MBBS,BDS</Text>
										<Text></Text>
										<Text style={{fontSize: 11,color:'#00A368'}}>XYZ Hospital</Text>
										<Text style={{fontSize: 9,color: '#000'}}>Vasant Vihar, Delhi</Text>
									</Col>
									<Col size={30} style={{marginTop:15}}>
										<Text style={{fontSize: 9,color: '#000'}}>First Available Date</Text>
										<Text style={{fontSize: 10,color: '#000'}}><CIcon name="calendar" size={12} color="#00A368" /> 28/10/2018</Text>
										<Text></Text>
										<Text style={{fontSize: 9,color: '#000'}}><Text style={{color: '#00A368',fontSize: 13}} >{"\u20B9"}</Text>  700</Text>
									</Col>
								</View>
								<View style={{marginTop: 20,marginBottom: 10,marginRight: 10}}>
									<View style={{flex: 1,flexDirection: 'row'}}> 
										<Col size={50} style={{marginLeft: 10}}>
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
							</Card>
							</TouchableOpacity >
						</View>
						<View style={{marginTop: 5}}>
						  <TouchableOpacity onPress={() => this.props.navigation.navigate("Profile")}>
							<Card style={{marginRight: 15,marginLeft: 15}}>
								<View style={{flex: 1,flexDirection: 'row'}}> 
									<Col size={30} style={{marginLeft: 10,marginRight: 10,marginTop: 15,marginBottom: 10}}>
										<View style={styles.circle} />
									</Col>
									<Col size={30} style={{marginTop:15,marginLeft: -50}}>
										<Text style={{fontSize: 11,color: '#000'}}>Dr.John Doe</Text>
										<Text style={{fontSize: 10,color: '#000'}}>Dentist(5 Years)</Text>
										<Text style={{fontSize: 9,color: '#000'}}>MBBS,BDS</Text>
										<Text></Text>
										<Text style={{fontSize: 11,color:'#00A368'}}>XYZ Hospital</Text>
										<Text style={{fontSize: 9,color: '#000'}}>Vasant Vihar, Delhi</Text>
									</Col>
									<Col size={30} style={{marginTop:15}}>
										<Text style={{fontSize: 9,color: '#000'}}>First Available Date</Text>
										<Text style={{fontSize: 10,color: '#000'}}><CIcon name="calendar" size={12} color="#00A368" /> 28/10/2018</Text>
										<Text></Text>
										<Text style={{fontSize: 9,color: '#000'}}><Text style={{color: '#00A368',fontSize: 13}} >{"\u20B9"}</Text>  700</Text>
									</Col>
								</View>
								<View style={{marginTop: 20,marginBottom: 10,marginRight: 10}}>
									<View style={{flex: 1,flexDirection: 'row'}}> 
										<Col size={50} style={{marginLeft: 10}}>
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
							</Card>
							</TouchableOpacity >
						</View>
						<View style={{marginTop: 5}}>
							<TouchableOpacity onPress={() => this.props.navigation.navigate("Profile")}>
							<Card style={{marginRight: 15,marginLeft: 15}}>
								<View style={{flex: 1,flexDirection: 'row'}}> 
									<Col size={30} style={{marginLeft: 10,marginRight: 10,marginTop: 15,marginBottom: 10}}>
										<View style={styles.circle} />
									</Col>
									<Col size={30} style={{marginTop:15,marginLeft: -50}}>
										<Text style={{fontSize: 11,color: '#000'}}>Dr.John Doe</Text>
										<Text style={{fontSize: 10,color: '#000'}}>Dentist(5 Years)</Text>
										<Text style={{fontSize: 9,color: '#000'}}>MBBS,BDS</Text>
										<Text></Text>
										<Text style={{fontSize: 11,color:'#00A368'}}>XYZ Hospital</Text>
										<Text style={{fontSize: 9,color: '#000'}}>Vasant Vihar, Delhi</Text>
									</Col>
									<Col size={30} style={{marginTop:15}}>
										<Text style={{fontSize: 9,color: '#000'}}>First Available Date</Text>
										<Text style={{fontSize: 10,color: '#000'}}><CIcon name="calendar" size={12} color="#00A368" /> 28/10/2018</Text>
										<Text></Text>
										<Text style={{fontSize: 9,color: '#000'}}><Text style={{color: '#00A368',fontSize: 13}} >{"\u20B9"}</Text>  700</Text>
									</Col>
								</View>
								<View style={{marginTop: 20,marginBottom: 10,marginRight: 10}}>
									<View style={{flex: 1,flexDirection: 'row'}}> 
										<Col size={50} style={{marginLeft: 10}}>
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
							</Card>
							</TouchableOpacity >
						</View>
						<View style={{marginTop: 5}}>
					      <TouchableOpacity onPress={() => this.props.navigation.navigate("Profile")}>
							<Card style={{marginRight: 15,marginLeft: 15}}>
								<View style={{flex: 1,flexDirection: 'row'}}> 
									<Col size={30} style={{marginLeft: 10,marginRight: 10,marginTop: 15,marginBottom: 10}}>
										<View style={styles.circle} />
									</Col>
									<Col size={30} style={{marginTop:15,marginLeft: -50}}>
										<Text style={{fontSize: 11,color: '#000'}}>Dr.John Doe</Text>
										<Text style={{fontSize: 10,color: '#000'}}>Dentist(5 Years)</Text>
										<Text style={{fontSize: 9,color: '#000'}}>MBBS,BDS</Text>
										<Text></Text>
										<Text style={{fontSize: 11,color:'#00A368'}}>XYZ Hospital</Text>
										<Text style={{fontSize: 9,color: '#000'}}>Vasant Vihar, Delhi</Text>
									</Col>
									<Col size={30} style={{marginTop:15}}>
										<Text style={{fontSize: 9,color: '#000'}}>First Available Date</Text>
										<Text style={{fontSize: 10,color: '#000'}}><CIcon name="calendar" size={12} color="#00A368" /> 28/10/2018</Text>
										<Text></Text>
										<Text style={{fontSize: 9,color: '#000'}}><Text style={{color: '#00A368',fontSize: 13}} >{"\u20B9"}</Text>  700</Text>
									</Col>
								</View>
								<View style={{marginTop: 20,marginBottom: 10,marginRight: 10}}>
									<View style={{flex: 1,flexDirection: 'row'}}> 
										<Col size={50} style={{marginLeft: 10}}>
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
							</Card>
							</TouchableOpacity >
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderRadius: 100/2,
    backgroundColor: '#EE3C26'
}
});