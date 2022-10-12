import { jsx } from '@emotion/react'
import zIndex from '@mui/material/styles/zIndex'
import { height, width } from '@mui/system'
import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material'

function SidebarBottom() {
  return (

    <SidebarBottomContainer>
      <p>MANUFACTURES</p>
    <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked  sx={{
                      color: "white",
                      '&.Mui-checked': {
                      color: "white",
                       },

                       "& .MuiSvgIcon-root": {
                        fontSize: '1.1rem'
                      }
                     }} />} label={<Typography style={{fontSize:13}}>Aero Percision (2)</Typography>} />
    <FormControlLabel control={<Checkbox defaultChecked   sx={{
                      color: "white",
                      '&.Mui-checked': {
                      color: "white",
                       },
                       
                       "& .MuiSvgIcon-root": {
                        fontSize: '1.1rem'
                      }
                     }} />}  label={<Typography style={{fontSize:13}}>Aimpoint (6)</Typography>} />
    <FormControlLabel control={<Checkbox defaultChecked  sx={{
                      color: "white",
                      '&.Mui-checked': {
                      color: "white",
                       },
                       
                       "& .MuiSvgIcon-root": {
                        fontSize: '1.1rem'
                      }
                     }}/>}label={<Typography style={{fontSize:13}}>Arsenal (9)</Typography>}  />
    <FormControlLabel control={<Checkbox defaultChecked sx={{
                      color: "white",
                      '&.Mui-checked': {
                      color: "white",
                       },
                       
                       "& .MuiSvgIcon-root": {
                        fontSize: '1.1rem'
                      }
                     }}/>} label={<Typography style={{fontSize:13}}>Ammo inc (6)</Typography>} />
    <FormControlLabel control={<Checkbox defaultChecked  sx={{
                      color: "white",
                      '&.Mui-checked': {
                      color: "white",
                       },
                       
                       "& .MuiSvgIcon-root": {
                        fontSize: '1.1rem'
                      }
                     }}/>}label={<Typography style={{fontSize:13}}>Auto Ordnance (8)</Typography>}  />
    <FormControlLabel control={<Checkbox defaultChecked sx={{
                      color: "white",
                      '&.Mui-checked': {
                      color: "white",
                       },
                       
                       "& .MuiSvgIcon-root": {
                        fontSize: '1.1rem'
                      }
                     }}/>} label={<Typography style={{fontSize:13}}>Barrett (1)</Typography>} />
    <FormControlLabel control={<Checkbox defaultChecked sx={{
                      color: "white",
                      '&.Mui-checked': {
                      color: "white",
                       },
                       
                       "& .MuiSvgIcon-root": {
                        fontSize: '1.1rem'
                      }
                     }}/>} label={<Typography style={{fontSize:13}}>Beretta (2)</Typography>} />
    <FormControlLabel control={<Checkbox defaultChecked sx={{
                      color: "white",
                      '&.Mui-checked': {
                      color: "white",
                       },
                       
                       "& .MuiSvgIcon-root": {
                        fontSize: '1.1rem'
                      },
                       size:'small',
                     }}/>}label={<Typography style={{fontSize:13}}>Black Rain Ordnance (5)</Typography>}  />
    <FormControlLabel disabled control={<Checkbox />} label="Disabled (6)" />
  </FormGroup>
  </SidebarBottomContainer>
  )
}

export default SidebarBottom;


const SidebarBottomContainer =styled.div`
  padding:10px;
 

  >p{
    margin-bottom:5px;   
    color:gray;
    font-size:13px;
   }
`;