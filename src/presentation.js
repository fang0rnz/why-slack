// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck, Heading, Slide, Text, Notes, Appear, Image } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            APRESENTAÇÃO
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            PRA CONVENCER
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            QUE CENTRALIZAR A COMUNICAÇÃO NO SLACK NÃO É UMA IDEIA TERRÍVEL
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>POR QUÊ?</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            🤔
          </Heading>
          <Appear>
            <li>O hangouts é limitado e será descontinuado em breve</li>
          </Appear>
          <Appear>
            <li style={{ paddingTop: 50 }}>
              Whatsapp é ruim, não é a ferramenta ideal para comunicação de um
              time de tecnologia de alta performance
            </li>
          </Appear>
          <Appear>
            <li style={{ paddingTop: 50 }}>
              Atualmente não existe uma ferramenta de colaboração do time de
              tecnologia
            </li>
          </Appear>
          <Appear>
            <li style={{ paddingTop: 50 }}>
              A comunicação está espalhada por vários meios
            </li>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Image width="75%" src="slack.png" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Image width="75%" src="slack1.png" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Image width="75%" src="slack2.png" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Image width="100%" src="slack4.png" />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>Hands on!</Heading>
        </Slide>
      </Deck>
    );
  }
}
