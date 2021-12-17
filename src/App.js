import styled from 'styled-components';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <AppContainer>
        <Todo />
      </AppContainer>
    </div>
  );
}

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  overflow: hidden;
  background-color: #ffc0cb;
`;
