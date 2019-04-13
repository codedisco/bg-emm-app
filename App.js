import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class AnatomyExample extends Component {
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
          <Grid>
            <Col style={{ backgroundColor: '#635DB7', height: 600 }}>
              <Content>
                <Text>Option one</Text>
              </Content>
            </Col>
            <Col style={{ backgroundColor: '#00CE9F', color: '#fff', height: 600 }}>
              <Content>
                <Text>Option Two</Text>
              </Content>
            </Col>
          </Grid>
      </Container>
    );
  }
}
