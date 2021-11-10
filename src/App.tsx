import React, { useState } from 'react';
import './App.css';
import { ProjectCycle } from './ProjectCycle';
import styled, { createGlobalStyle } from 'styled-components';
import Select from 'react-dropdown-select';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-blue: #0969FA;
    --white: #ffffff;
    --light-gray:#FAFAFA;
    --bg-blue:  #E7F1FF;
    --text-color:#110848;
    --black: #110848;
    --navy: #110848;
    --medium-grey: #CCCCCC;
    --grey: #919399;
    --grey-c3: #B5BFCC;
    --dark-grey: #383838;
    --dropdown-bg: #E9ECF6;
    --yellow: #E9CE2C;
  }

  .dropdownMain {
    border: 2px solid #f2f7ff !important;
    width: 276px !important;
    border-radius: 3opx !important;
    background-color: var(--dropdown-bg);
    padding: 0;

    .react-dropdown-select-content {
      padding: 5px 10px;
      font-weight: 600;
      font-size: 14px;
      text-overflow: ellipsis !important;
      white-space: nowrap !important;
      overflow: hidden;
      height: 36px !important;
    }
    
    .react-dropdown-select-input{
      display: none;
    }
  }

  .dropdownMulti {
    border: 2px solid #f2f7ff !important;
    width: auto !important;
    min-width: 276px !important;
    border-radius: 30px !important;
    background-color: var(--dropdown-bg);
    padding: 0;

    .react-dropdown-select-type-multi{
      padding: 0 !important;
    }

    .react-dropdown-select-content {
      padding: 5px 10px;
      font-weight: 600;
      font-size: 14px;
      min-height: 36px !important;
      height: auto !important;
    }
    .react-dropdown-select-option{
      border-radius: 30px !important;
      background-color: var(--grey-c3) !important;
      color: var(--black) !important;
      padding:2px 10px;
      &:first-of-type{
        margin-left: 0 !important;
      }
    }
  }

  
  .countrySelect {
    border: 2px solid #f2f7ff !important;
    width: auto !important;
    border-radius: 30px !important;
    background-color: var(--dropdown-bg);
    padding: 0;

    .react-dropdown-select-type-multi{
      padding: 0 !important;
    }

    .react-dropdown-select-content {
      height: auto !important;
    }

    .react-dropdown-select-option{
      border-radius: 30px !important;
      background-color: var(--grey-c3) !important;
      color: var(--black) !important;
      &:nth-of-type(n + 3) {
        display: inline !important;
      }
      &:first-of-type{
        margin-left: 0 !important;
      }
    }
  }

  .dropdownMain:hover, .dropdownMain:focus {
    border: 2px solid #919399 !important;
  }

  .react-dropdown-select-dropdown-handle svg  {
    width: 18px !important;
    height: 18px !important;
    margin: -4px 15px !important; 
    padding-top: -2px !important;
    fill: var(--gray) !important;
  }


  .react-dropdown-select-dropdown{
    font-size: 12px !important;
    box-shadow: 0px 10px 20px 0px rgb(9 105 250 / 15%) !important;
    border: 0 !important;
  }

  .react-dropdown-select-item{
    text-align: left !important;
  }
  .react-dropdown-select-item:hover, .react-dropdown-select-item:hover:focus{
    text-align: left !important;
    background-color: var(--bg-blue) !important;
  }

  .react-dropdown-select-item-selected {
    background-color: var(--grey-c3) !important;
    color: var(--black) !important;
    font-weight: bold !important;
    text-align: left !important;
  }


  .react-dropdowm-multi:hover, .react-dropdowm-multi:focus {
    border: 2px solid #919399 !important;
  }
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0 0 0;
  flex-wrap: wrap;
`;

interface ButtonProps {
  selected: boolean;
}

const Button = styled.div<ButtonProps>`
  background-color: ${props => props.selected ? 'rgba(15, 139, 121, 0.4)' : '#E1E1E1'};
  border: ${props => props.selected ? '1px solid rgba(15, 139, 121, 1)' : '1px solid #CCCCCC'};
  border-radius: 25px;
  width: 40px;
  height: 20px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 21px;
`;

const ToggleCircle = styled.div<ButtonProps>`
  background-color: ${props => props.selected ? 'rgba(15, 139, 121, 1)' : '#CCCCCC'};
  border-radius: 25px;
  width: 18px;
  height: 18px;
  margin-top: 1px;
  margin-left: ${props => props.selected ? '21px' : '1px'};
  cursor: pointer;
  font-weight: bold;
`;

const CheckBoxEl = styled.div`
  display: flex;
  margin: 0 10px;
  align-items: center;
  cursor: pointer;
  color: #f1f1f1;
`;

const OptionHead = styled.div`
  font-size: 14px;
  color: #f1f1f1;
  margin-bottom: 10px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: left;
`;

const FilterEl = styled.div`
  margin: 0 25px;
  justify-content: flex-start;
`;
interface CheckBoxProps {
  selected: boolean;
}

const Checkbox = styled.div<CheckBoxProps>`
  width: 14px;
  height: 14px;
  margin-right: 5px;
  border: 1px solid #f1f1f1;
  background-color: ${props => props.selected ? '#f1f1f1' : 'rgba(0,0,0,0'};
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
`;

const CheckboxContainer = styled.div`
  display: flex;
  margin-top: 21px;
`;

const options = [
  {
    value: "Programme Officer"
  },
  {
    value: "Project Developer"
  },
  {
    value: "Quality Assessor"
  },
  {
    value: "Project Manager"
  },
  {
    value: "RR"
  },
  {
    value: "Programme Manager"
  },
  {
    value: "Programme Officer OAI"
  },
  {
    value: "M&E Officer"
  },
  {
    value: "Project Board"
  }
]

function App() {
  const [online, setOnline] = useState(true)
  const [sharePoint, setsharePoint] = useState(true)
  const [atlas, setAtlas] = useState(true)
  const [website, setWebsite] = useState(true)
  const [selectedRole, setSelectedRoles] = useState<string[]>([])
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <HeaderDiv>
          <FilterEl>
            <OptionHead>Highlight Offline Assets</OptionHead>
            <Button selected={!online} onClick={() => {setOnline(!online)}}>
              <ToggleCircle selected={!online} />
            </Button>
          </FilterEl>
          <FilterEl>
            <OptionHead>Filter by System</OptionHead>
            <CheckboxContainer>
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
            </CheckboxContainer>
          </FilterEl>
          <FilterEl>
            <OptionHead>Filter by Roles</OptionHead>
            <Select
              options={options}
              className='dropdownMulti'
              onChange={(el) => { setSelectedRoles(el.map((d: { value: string; }) => d.value)); }}
              values={selectedRole.map((d) => ({
                value: d,
              }))}
              labelField="value"
              valueField="value"
              dropdownHeight='250px'
              dropdownPosition='auto'
              searchable={true}
              placeholder="Filter by roles..."
              multi
              dropdownGap={2}
            />
          </FilterEl>
        </HeaderDiv>
        <ProjectCycle
          sharePoint={sharePoint}
          atlas={atlas}
          website={website}
          online={online}
          roles={selectedRole}
        />
      </div>
    </>
  );
}

export default App;
