import React, {Component} from 'react';
import styled from 'styled-components';
import MdCode from 'react-icons/lib/md/code';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/styles';

import {Card, Row, Column, Padded, Panel} from 'substance-ui';
import {Heading, Paragraph} from 'substance-ui/lib/components/Typography';
import theme from '../theme';
import Container from '../components/container';

import Dot from '../components/Dot';


const CodeBlock = styled.div`
  position: absolute;
  left:0;
  top:0;
  width:100%;
  height: 100%;
  overflow: auto;
  display: ${props => props.visible ? 'block' : 'none' };
  border-radius: 6px;

  &>pre {
    position: absolute;
    left:0;
    top:0;
    margin:0;
    width:100%;
    height:100%;
  }
`;

const IconButton = styled.div`
  position: absolute;
  right:15px;
  top:15px;
  opacity: 0.6;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Close = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  display: block;
  z-index: 1;
  border-radius: 3px;

  span {
    display: block;
    position: relative;
    width:100%;
    height:100%;
  }
  span:after {
    height:2px;
    background:white;
    content: '';
    display:block;
    width:90%;
    top:50%;
    left:5%;
    position: absolute;
    transform: rotate(-45deg);
  }
  span:before {
    height:2px;
    background:white;
    content: '';
    display:block;
    top:50%;
    left:5%;
    width:90%;
    position: absolute;
    transform: rotate(45deg);
  }
`;

const codeBlock2 = `

    import {Heading, Paragraph} from 'substance-ui/lib/components/Typography';

    <Heading type="h1">
      H1 - Heading
    </Heading>
    <Heading type="h2">
      H2 - Heading
    </Heading>
    <Heading type="h3">
      H3 - Heading
    </Heading>
    <Heading type="h4">
      H4 - Heading
    </Heading>
    <Heading type="h5">
      H5 - Heading
    </Heading>
    <Heading type="h6">
      H6 - Heading
    </Heading>

    <Paragraph size="x-small">
      Paragraph - x-small
    </Paragraph>
    <Paragraph size="small">
      Paragraph - small
    </Paragraph>
    <Paragraph>
      Paragraph - default
    </Paragraph>
    <Paragraph size="medium">
      Paragraph - medium
    </Paragraph>
    <Paragraph size="large">
      aragraph - large
    </Paragraph>
    <code>
      A piece of computer code
    </code>

`

class Theme extends Component {

  constructor(props) {
    super(props);
    this.state = {
      block2: false
    }
  }

  render() {
    return (
      <Container>
        <Padded padding="70px 0px 50px 0px">
          <Heading type="h2" weight={800} margin={0}>Theme</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</Paragraph>
        </Padded>

        <Row gutter={40} columnsCount={2}>
          <Column matchHeight>
            <Card>
              <Padded padding="30px">
                <Padded padding="0 0 50px 0">
                  <Heading type="h5">Theme</Heading>
                </Padded>
                <Dot color={theme.colors.primary}>Primary</Dot>
                <Dot color={theme.colors.secondary}>Secondary</Dot>
                <br/>
                <Dot color={theme.colors.success} size={76}>Success</Dot>
                <Dot color={theme.colors.warning} size={76}>Warning</Dot>
                <Dot color={theme.colors.error} size={76}>Error</Dot>
              </Padded>
            </Card>
          </Column>
          <Column matchHeight>
            <Card>
              <IconButton onClick={() => this.setState({ block2: true })}>
                <MdCode size={24}/>
              </IconButton>
              <CodeBlock visible={this.state.block2}>
                <Close onClick={() => this.setState({ block2: false })}><span></span></Close>
                <SyntaxHighlighter wrapLines={true} language='html, jsx, javascript' style={ocean}>
                  {codeBlock2}
                </SyntaxHighlighter>
              </CodeBlock>
              <Padded padding="30px">
                <Padded padding="0 0 30px 0">
                  <Heading type="h5">Typography</Heading>
                </Padded>
                <Panel childSpacing={14} padding="0 0 30px 0">
                  <Heading type="h1">H1 - Heading</Heading>
                  <Heading type="h2">H2 - Heading</Heading>
                  <Heading type="h3">H3 - Heading</Heading>
                  <Heading type="h4">H4 - Heading</Heading>
                  <Heading type="h5">H5 - Heading</Heading>
                  <Heading type="h6">H6 - Heading</Heading>
                  <Paragraph size="x-small">Paragraph - x-small Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laborum</Paragraph>
                  <Paragraph size="small">Paragraph - small Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laborum</Paragraph>
                  <Paragraph>Paragraph - default Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</Paragraph>
                  <Paragraph size="medium">Paragraph - medium Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laborum</Paragraph>
                  <Paragraph size="large">Paragraph - default Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laborum</Paragraph>
                  <code>A piece of computer code</code>
                </Panel>

              </Padded>
            </Card>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default Theme;
