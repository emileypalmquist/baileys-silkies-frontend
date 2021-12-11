// import { Segment, Container, Grid, Header, List } from "semantic-ui-react";
import styled from "styled-components";
export default function Footer() {
  return (
    <Container>Footer</Container>
    // <Segment
    //   inverted
    //   style={{
    //     padding: "5em 0em",
    //   }}
    // >
    //   <Container>
    //     <Grid divided inverted stackable>
    //       <Grid.Row>
    //         <Grid.Column width={3}>
    //           <Header inverted as="h4" content="About" />
    //           <List link inverted>
    //             <List.Item as="a">Sitemap</List.Item>
    //             <List.Item as="a">Contact Us</List.Item>
    //           </List>
    //         </Grid.Column>
    //         <Grid.Column width={3}>
    //           <Header inverted as="h4" content="Services" />
    //           <List link inverted>
    //             <List.Item as="a">Banana Pre-Order</List.Item>
    //             <List.Item as="a">DNA FAQ</List.Item>
    //           </List>
    //         </Grid.Column>
    //         <Grid.Column width={7}>
    //           <Header as="h4" inverted>
    //             Footer Header
    //           </Header>
    //           <p>
    //             Extra space for a call to action inside the footer that could
    //             help re-engage users.
    //           </p>
    //         </Grid.Column>
    //       </Grid.Row>
    //     </Grid>
    //   </Container>
    // </Segment>
  );
}

const Container = styled.footer`
  height: 10vh;
  width: 100vw;
  background-color: black;
  color: white;
  bottom: 0;
`;
