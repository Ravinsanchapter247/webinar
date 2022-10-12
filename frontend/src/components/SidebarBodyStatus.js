import React,{useState} from 'react'
import styled from 'styled-components'
import Select from 'react-select';
import { margin } from '@mui/system';



const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "black",
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    borderColor: state.isFocused ? "lightgray" : "gray",
    boxShadow: state.isFocused ? null : null,
    color:'white',
    "&:hover": {
      borderColor: state.isFocused ? "black" : "gray"
      
    }
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    marginTop: 0
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
    background:'black'
  }),

  singleValue: (provided) => ({
    ...provided,
    color: 'white',
    fontSize:'13px'

  }),

  option: provided => ({
    ...provided,
    color: 'white',
    background:'black',
    fontSize:'13px',

    "&:hover":{
        background:'gray'
    }
  }),
};

const options = [
    { value: 'Available webinars', label: 'Available webinars' },
    { value: 'upcomming webinars', label: 'upcomming webinars' },
    { value: 'products', label: 'products' },
  ];
function SidebarBodyStatus() {
    const [selectedOption, setSelectedOption] = useState(null);
  return (
    <SidebarBodyStatusContainer>
        <p>STATUS</p>
        <Select
    defaultValue={selectedOption}
    onChange={setSelectedOption}
    options={options}
    styles={customStyles}
        />
  </SidebarBodyStatusContainer>
  )
}

export default SidebarBodyStatus


const SidebarBodyStatusContainer = styled.div`

margin-top:20px;

>p{
 margin-bottom:5px;   
 color:gray;
 font-size:13px;
}
`
  
;