import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Start extends Component {

  componentDidMount() {
      StatusBar.setHidden(true);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
            </Button>
          </Left>
          <Body>
          </Body>
          <Right>
            <Title>Edge Motor Museum</Title>
          </Right>
        </Header>
          <Grid style={{ backgroundColor: '#635DB7'}}>
            <Col>
              <Content>
                <Text>Option one</Text>
              </Content>
            </Col>
            <Col>
              <Content>
                <Text>Option Two</Text>
              </Content>
            </Col>
          </Grid>
      </Container>
    );
  }
}
