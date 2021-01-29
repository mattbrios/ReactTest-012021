import styled from 'styled-components'
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
// import Footer from '../src/components/Footer';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return( 
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            Seja muito bem vindx!
          </Widget.Header>
          <Widget.Content>
            Entre em contato comigo, terei prazer em atender você!
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            Ainda não conhece meu trabalho? Dá uma olhadinha nesses links...
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/mattbrios" />
    </QuizBackground>
  );
}
