import React from "react";
import { Avatar, Text } from "react-native-elements";
import { Col, Row } from "react-native-easy-grid";
import {
  Button,
  View,
  Label,
  Container,
  Content,
  Card,
  CardItem,
  Body,
} from "native-base";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import globalStyle from "../styles";
import styles from "./styles";

// Redux
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

const Profile = ({ user, logout, navigation }) => {
  const fullName = `${user?.first_name} ${user?.last_name}`;
  return (

    <Container>
      <Content padder>
        <View padder style={globalStyle.container}>
          <Avatar
            avatarStyle={{
              borderWidth: 2,
              borderColor: "#7D583D",
              borderStyle: "solid",
            }}
            rounded
            size="xlarge"
            source={{
              uri:
                "https://cdn.discordapp.com/attachments/772347432763523097/775650331115388958/oiloncanvasofalittlegirl.jpg",
            }}
          />
          <Text h2 style={styles.margins}>
            {" "}
            Hi, {user?.first_name}
          </Text>
        </View>
        <View padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Row>
                  <Col>
                    <Button
                      vertical
                      transparent
                      onPress={() => navigation.navigate("OrderList")}
                    >
                      <FontAwesome name="reorder" size={24} color="black" />
                      <Text>My orders</Text>
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      vertical
                      transparent
                      onPress={() => navigation.navigate("AddressList")}
                    >
                      <Entypo name="address" size={24} color="black" />
                      <Text>Address Book</Text>
                    </Button>
                  </Col>
                  <Col>
                    <Button vertical transparent onPress={logout}>
                      <AntDesign name="logout" size={24} color="black" />
                      <Text>Logout</Text>
                    </Button>
                  </Col>
                </Row>
              </Body>
            </CardItem>
          </Card>
        </View>
        <View padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Label style={globalStyle.label}>Full Name</Label>
                <Button
                  full
                  rounded
                  bordered
                  style={{ borderColor: "#7D583D" }}
                >
                  <Text style={globalStyle.text}>{fullName}</Text>
                </Button>
                <Label style={globalStyle.label}>Username</Label>
                <Button
                  full
                  rounded
                  bordered
                  style={{ borderColor: "#7D583D" }}
                >
                  <Text style={globalStyle.text}>{user?.username}</Text>
                </Button>
                <Label style={globalStyle.label}>Email</Label>
                <Button
                  full
                  rounded
                  bordered
                  style={{ borderColor: "#7D583D" }}
                >
                  <Text style={globalStyle.text}>{user?.email}</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </View>
      </Content>
    </Container>

  
  );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
