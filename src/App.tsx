import React, { useState } from 'react';
import './App.css';
import { ProjectCycle } from './ProjectCycle';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
`;

interface ButtonProps {
  selected: boolean;
}

const Button = styled.div<ButtonProps>`
  background-color: #F1F1F1;
  border-radius: 5px;
  margin: 0 10px;
  width: 200px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  &:hover{
    background-color: #EAEAEA;
  }
`;

const CheckBoxEl = styled.div`
  display: flex;
  margin: 0 10px;
  align-items: center;
  cursor: pointer;
`

interface CheckBoxProps {
  selected: boolean;
}

const Checkbox = styled.div<CheckBoxProps>`
  width: 14px;
  height: 14px;
  margin-right: 5px;
  border: 1px solid #383838;
  background-color: ${props => props.selected ? '#383838' : '#FFFFFF'};
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
`;

function App() {
  const [online, setOnline] = useState(true)
  const [sharePoint, setsharePoint] = useState(true)
  const [atlas, setAtlas] = useState(true)
  const [website, setWebsite] = useState(true)
  return (
    <div className="App">
      <HeaderDiv>
        <Button selected={!online} onClick={() => {setOnline(!online)}}>{online ? "Highlight Offline Assets" : "Show All Assets"}</Button>
        <CheckBoxEl onClick={() => {setAtlas(!atlas)}}>
          <Checkbox selected={atlas} />
          Atlas ERP
        </CheckBoxEl>
        <CheckBoxEl onClick={() => {setsharePoint(!sharePoint)}}>
          <Checkbox selected={sharePoint} />
          SharePoint
        </CheckBoxEl>
        <CheckBoxEl onClick={() => {setWebsite(!website)}}>
          <Checkbox selected={website} />
          Website
        </CheckBoxEl>
      </HeaderDiv>
      <ProjectCycle
        sharePoint={sharePoint}
        atlas={atlas}
        website={website}
        online={online}
      />
    </div>
  );
}

export default App;
