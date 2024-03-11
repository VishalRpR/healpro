import { Box, Button, Card, CardActions, CardContent, Divider, MenuItem, Stack, TextField, Typography } from '@mui/material'
import { blue, red, yellow } from '@mui/material/colors'
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from 'react'

const marray = [
    {
      value: 'Married',
      label: 'Married',
    },
    {
      value: 'UnMarried',
      label: 'UnMarried',
    },

  ];

  const gender = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },
    {
        value: 'Chakka',
        label: 'Chakka',
      },

  ];

  const state = [
    {
      value: 'Mumbai',
      label: 'Mumbai',
    },
    {
      value: 'Mumbai',
      label: 'Mumbai',
    },
    {
        value: 'Mumbai',
        label: 'Mumbai',
      },

  ];

const Form = () => {
  return (
    <Box flex={4.5} bgcolor={'#f4f8fe'}>
    <Card sx={{margin:"45px 35px",padding:"20px 20px",height:"100vh"}} >
      <CardContent>
        <Typography sx={{fontSize:30,fontWeight:500}}     >
          Preliminary Data
        </Typography>
        <Divider orientation="horizontal" variant="full"/>
        <Box margin={4}>
            <Stack direction="column">

        <Box mb={1}>
        <Typography variant="p" component="div">
          First Name
        </Typography>
        <TextField id="outlined-basic" size='small' margin="dense"  label="first name" variant="outlined" />
        </Box>

        <Box mb={1}>
        <Typography variant="p" component="div">
          Last Name
        </Typography>
        <TextField id="outlined-basic" size='small' margin="dense" label="last name" variant="outlined" />
        </Box>


        </Stack>

        <Stack direction="row" spacing={4}>
            <Stack direction="column">
        <Stack direction="row" mb={2} spacing={2} bgcolor={""} flex={1}>

        <Stack flex={1}>
        <Typography variant="p" component="div">
          State
        </Typography>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="Mumbai"
          helperText="state"
          size='small'
          margin="dense" 
        >
          {state.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Stack>
        <Stack flex={1}>
        <Typography variant="p" component="div">
           Pincode 
        </Typography>
        <TextField id="outlined-basic" size='small' margin="dense" label="pin no." variant="outlined" />
        </Stack>
        </Stack>

        <Stack mb={2}>
        <Typography variant="p" component="div">
          Gender
        </Typography>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="Male"
          helperText="gender"Pi
          size='small'
          margin="dense" 
        >
          {gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Stack>

        <Stack mb={2}>
        <Typography variant="p" component="div">
          Marital Status
        </Typography>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="Married"
          helperText="Married status"
          size='small'
          margin="dense" 
        >
          {marray.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Stack>

        <Stack mb={2}>
        <Typography variant="p" component="div">
          Religion
        </Typography>
        <TextField id="outlined-basic" size='small' margin="dense" label="Text" variant="outlined" />
        </Stack>

        <Stack mb={2}>
        <Typography variant="p" component="div">
          Ref.By
        </Typography>
        <TextField id="outlined-basic" size='small' margin="dense" label="Text" variant="outlined" />
        </Stack>
        </Stack>
        
      <Stack direction="column" flex={1}>
      <Stack mb={2}>
        <Typography variant="p" component="div">
          Road/Street Name
        </Typography>
        <TextField id="outlined-basic" size='small' margin="dense" label="adress" variant="outlined" />
        </Stack>

        <Stack direction="row" spacing={2} mb={1} bgcolor={''}>

        <Stack mb={2}>
        <Typography variant="p" component="div" >
          Patient's DOB
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']} >
        <DatePicker  label="date of birth"  />
      </DemoContainer>
    </LocalizationProvider>
        </Stack>

        

        

        
        </Stack>

        <Stack mb={2}>
        <Typography variant="p" component="div">
          Telephone
        </Typography>
        <TextField id="outlined-basic" size='small' margin="dense" label="Outlined" variant="outlined" />
        </Stack>

        <Stack mb={2}>
        <Typography variant="p" component="div">
          Occupation
        </Typography>
        <TextField id="outlined-basic" size='small' margin="dense" label="Outlined" variant="outlined" />
        </Stack>

        <Stack mb={2}>
        <Typography variant="p" component="div">
          Other
        </Typography>
        <TextField id="outlined-basic" size='small' margin="dense" label="Outlined" variant="outlined" />
        </Stack>

        </Stack>
        </Stack>
        </Box>

        
       
    
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    </Box>
  )}


export default Form