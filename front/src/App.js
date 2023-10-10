import styled from 'styled-components';
import './App.css';
import Header from './component/Util/Header';
import Sidebar from './component/Util/Sidebar';

const FullScreenDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex; /* Flexbox 사용 */
`;

const Hheader = styled.div`
  border: 1px solid black;
  height: 60px;
  width: 100%;
  margin: 5px;
`;

const Ssbar = styled.div`
  border: 1px solid black;
  height: 100%;
  width: 250px;
  margin: 5px;
`;

function App() {
  return (
    <FullScreenDiv>
      <Ssbar></Ssbar>
      <Hheader></Hheader>
    </FullScreenDiv>
  );
}

export default App;
