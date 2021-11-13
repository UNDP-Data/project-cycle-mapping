import React, { useState } from 'react';
import './App.css';
import { ProjectCycle } from './ProjectCycle';
import { ListView } from './ListView';
import { Key } from './Key'
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

const ToggleEl = styled.div`
  display: flex;
  border-radius: 20px;
  background-color: var(--bg-blue);
`;

interface ButtonProps {
  selected: boolean;
}

const Toggle= styled.div<ButtonProps>`
  font-size: 16px;
  font-weight: medium;
  background-color: ${props => props.selected ? 'rgba(6, 127, 128, 1)' : 'rgba(6, 127, 128, 0)'};
  color: ${props => props.selected ? '#FFF' : '#383838'};
  padding: 11px 25px;
  border-radius: 20px;
  cursor: pointer;
`;

const Button = styled.div<ButtonProps>`
  background-color: ${props => props.selected ? 'rgba(204, 62, 39, 0.4)' : '#E1E1E1'};
  border: ${props => props.selected ? '1px solid rgba(204, 62, 39, 1)' : '1px solid #CCCCCC'};
  border-radius: 25px;
  width: 40px;
  height: 20px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 21px;
`;

const ToggleCircle = styled.div<ButtonProps>`
  background-color: ${props => props.selected ? 'rgba(204, 62, 39, 1)' : '#CCCCCC'};
  border-radius: 25px;
  width: 18px;
  height: 18px;
  margin-top: 1px;
  margin-left: ${props => props.selected ? '21px' : '1px'};
  cursor: pointer;
  font-weight: bold;
`;

const OptionHead = styled.div`
  font-size: 14px;
  color: #383838;
  margin-bottom: 10px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: left;
`;

const FilterEl = styled.div`
  margin: 10px 25px;
  justify-content: flex-start;
`;

const Legend = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(255,255,255,0.7);
  padding: 10px;
  font-family: "Proxima Nova";
  font-size: 12px;
  color: #383838;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`

const LegendTitle = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 15px;
  text-align: left;
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
const systemOptions = [
  {
    value: "Atlas ERP"
  },
  {
    value: "SharePoint"
  },
  {
    value: "Public Website"
  },
]

function App() {
  const [online, setOnline] = useState(false)
  const [view, setView] = useState('map')
  const [selectedRoles, setSelectedRoles] = useState<string[]>([])
  const [selectedSystem, setSelectedSystem] = useState<string[]>([])
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <HeaderDiv>
          <FilterEl>
            <OptionHead>Highlight Assets Not Available Organization Wide</OptionHead>
            <Button selected={online} onClick={() => {setOnline(!online)}}>
              <ToggleCircle selected={online} />
            </Button>
          </FilterEl>
          <FilterEl>
            <OptionHead>Filter by Systems</OptionHead>
            <Select
              options={systemOptions}
              className='dropdownMulti'
              onChange={(el) => { setSelectedSystem(el.map((d: { value: string; }) => d.value)); }}
              values={selectedSystem.map((d) => ({
                value: d,
              }))}
              labelField="value"
              valueField="value"
              dropdownHeight='250px'
              dropdownPosition='auto'
              searchable={true}
              placeholder="Filter by systems..."
              multi
              dropdownGap={2}
            />
          </FilterEl>
          <FilterEl>
            <OptionHead>Filter by Roles</OptionHead>
            <Select
              options={options}
              className='dropdownMulti'
              onChange={(el) => { setSelectedRoles(el.map((d: { value: string; }) => d.value)); }}
              values={selectedRoles.map((d) => ({
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
          <FilterEl>
            <OptionHead>Select View</OptionHead>
            <ToggleEl>
              <Toggle selected={view === 'map' ? true : false} onClick={() => { setView('map') }}>Map View</Toggle>
              <Toggle selected={view === 'list' ? true : false} onClick={() => { setView('list') }}>List View</Toggle>
            </ToggleEl>
          </FilterEl>
        </HeaderDiv>
        {
          view === 'map' ?
          <ProjectCycle
            sharePoint={selectedSystem.indexOf('SharePoint') !== -1}
            atlas={selectedSystem.indexOf('Atlas ERP') !== -1}
            website={selectedSystem.indexOf('Public Website') !== -1}
            online={online}
            roles={selectedRoles}
            all={selectedSystem.length === 0}
          /> :
          <ListView
            sharePoint={selectedSystem.indexOf('SharePoint') !== -1}
            atlas={selectedSystem.indexOf('Atlas ERP') !== -1}
            website={selectedSystem.indexOf('Public Website') !== -1}
            online={online}
            roles={selectedRoles}
            all={selectedSystem.length === 0}
          />
        }
        {
          view === 'map' ?
            <Legend>
              <LegendTitle>Assets Availability</LegendTitle>
              <Key />
            </Legend> : 
            null
        }
      </div>
    </>
  );
}

export default App;
