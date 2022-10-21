import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function valuetext(value) {
  return `${value}°C`;
}


function SidebarBodyPriceRange() {

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <SidebarBodyPriceRangeContainer>
      <p>PRICE IN USD</p>
      <SidebarBodyPriceInputContaniner>
        <input type='number' value={10} />
        -
        <input type='number' value={50} />
        <button>OK</button >
      </SidebarBodyPriceInputContaniner>


      <SidebarPriceRangeSliderContainer>
        <Box sx={{ width: 200 }}>
          <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            // valueLabelDisplay="none"
            getAriaValueText={valuetext}
            size={'small'}
            style={{ color: 'gray', marginTop: '10px', height: '0.5px' }}
          />
        </Box>
      </SidebarPriceRangeSliderContainer>


    </SidebarBodyPriceRangeContainer>
  )
}

export default SidebarBodyPriceRange


const SidebarBodyPriceRangeContainer = styled.div`
margin-top: 10px;
>p{

  margin-bottom:10px;
  color:gray;
  font-size:12px;
  font-weight:200;
}
`;


const SidebarBodyPriceInputContaniner = styled.div`
    display:flex;

    >input{
      width:60px;
      height:20px;
      text-align:center;
      border:2px solid gray;
      border-radius:3px;
      font-weight:700;
      color:white;
      background-color:black;
    }
    >button{
      margin-left:10px;
      width:45px;
      border:2px solid gray;
      border-radius:3px;
      color:white;
      background-color:black;
    }
`;

const SidebarPriceRangeSliderContainer = styled.div`
.MuiSlider-thumb{
  height:12px;
  color:darkgrey;
  width:12px;
}
.MuiSlider-rail{
  color:gray;
}
.MuiSlider-track{
  color:gray;
  height:0.5px
}


`;