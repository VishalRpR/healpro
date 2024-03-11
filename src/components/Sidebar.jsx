import { AppBar, Box, Card, CardMedia, Divider, List, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'

const Sidebar = () => {
  return (
    <Box flex={1} bgcolor={'#172331'} color={'white'}>
     {/* <Stack direction="column" > */}
{/*      
    <Toolbar sx={{alignItems:"center",display:"flex", px:"0px", mx:"0px"}}>
        <img src="https://s3-alpha-sig.figma.com/img/7edf/4581/87f5cc1f50c51dc305e0d0a8c0b906d6?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SpE4ruvpaKhVy0taw9eTl72h7TeFEUEGnaAyQLqic2~FtVArFe9Gu6m1PgCnSg0DrLB2lHFYecbViMq2fpXe2EpkxKWNTdfurthmzlfUEfG9ZhXGrCCtu8t04wWGvq7NlIqlbny~V7Ac41ppk9L0qRjaLznPYyPt1HBRmJvvX9JVoEn5vJTjtJJzy2GScqYf5Rfvyxdm6Nr~NDX5ncN8jn3iVi1EMD3P2bKqh5O5xOOx1~QY-k9B7MjJwvBZ0fq~pSW2eFSNs2NGS7HJeosB1v1jGTWQ5vxTerHIOW4Mn9cZb1tn62S6UCy8s-3rufDprv5vdCp36PniEO9UrhPiww__"  height="100" width="150" alt="logo"  />
        <Typography variant='h5' >Healing Clan</Typography>
      </Toolbar> */}

        <Stack direction="row" alignItems="center" px={0} mx={0} >
            <Stack flex={1}>
             <Card sx={{border:"none", boxShadow:"none",bgcolor:"transparent",}}>
             <CardMedia
        component="img"
        height="110"
        image="https://s3-alpha-sig.figma.com/img/7edf/4581/87f5cc1f50c51dc305e0d0a8c0b906d6?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SpE4ruvpaKhVy0taw9eTl72h7TeFEUEGnaAyQLqic2~FtVArFe9Gu6m1PgCnSg0DrLB2lHFYecbViMq2fpXe2EpkxKWNTdfurthmzlfUEfG9ZhXGrCCtu8t04wWGvq7NlIqlbny~V7Ac41ppk9L0qRjaLznPYyPt1HBRmJvvX9JVoEn5vJTjtJJzy2GScqYf5Rfvyxdm6Nr~NDX5ncN8jn3iVi1EMD3P2bKqh5O5xOOx1~QY-k9B7MjJwvBZ0fq~pSW2eFSNs2NGS7HJeosB1v1jGTWQ5vxTerHIOW4Mn9cZb1tn62S6UCy8s-3rufDprv5vdCp36PniEO9UrhPiww__"
        alt="Paella dish"
        
      />
             </Card>
            </Stack>
            <Stack flex={1} mr={2.5}  >
                   <Typography variant='p'fontWeight={900} fontSize={21}  >Healing Clan</Typography>
            </Stack> 
           
        </Stack> 

        <Divider sx={{bgcolor:"white"}} />
        <Stack sx={{px:"10px"}}>
          
       <List  >
      <ListItemButton  component="a" href='#PriliminaryData'>
  
        <ListItemText    
        primary="Priliminary Data"
         primaryTypographyProps={{ fontSize: 14 }} />
      </ListItemButton>

      <ListItemButton href='#home'>
        
        <ListItemText 
        primary="Cheif Complains"
        primaryTypographyProps={{ fontSize: 14 }} />
      </ListItemButton>

      <ListItemButton href='#home'>
      
        <ListItemText 
        primary="Associated Complains"
        primaryTypographyProps={{ fontSize: 14 }} />
      </ListItemButton>

      <ListItemButton href='#home'>
        
        <ListItemText 
        primary="Patient Profile" 
        primaryTypographyProps={{ fontSize: 14 }}/>
      </ListItemButton>

      <ListItemButton href='#home'>
        
        <ListItemText 
        primary="Gynocological History"
        primaryTypographyProps={{ fontSize: 14 }} />
      </ListItemButton>

      <ListItemButton href='#home'>
      
        <ListItemText 
        primary="Child Development"
        primaryTypographyProps={{ fontSize: 14 }} />
      </ListItemButton>

      <ListItemButton href='#home'>
       
        <ListItemText 
        primary="Mental Characteristics"
        primaryTypographyProps={{ fontSize: 14 }} />
      </ListItemButton>

      <ListItemButton href='#home'>
        
        <ListItemText 
        primary="Inventigation"
        primaryTypographyProps={{ fontSize: 14 }} />
      </ListItemButton>


      <ListItemButton href='#home'>
       
        <ListItemText 
        primary="Reactions and Modality"
        primaryTypographyProps={{ fontSize: 14 }}/>
      </ListItemButton>

      <ListItemButton href='#home'>
        
        <ListItemText 
        primary="Family and Past History"
        primaryTypographyProps={{ fontSize: 14 }}/>
      </ListItemButton>

      <ListItemButton href='#home'>
        
        <ListItemText 
        primary="General Examination"
        primaryTypographyProps={{ fontSize: 14 }}/>
      </ListItemButton>

      <ListItemButton href='#home'>
     
        <ListItemText 
        primary="Systemic Examination"
        primaryTypographyProps={{ fontSize: 14 }}/>
      </ListItemButton>

      <ListItemButton href='#home'>
      
        <ListItemText 
        primary="Provitional Diagnosis"
        primaryTypographyProps={{ fontSize: 14 }}/>
      </ListItemButton>

      <ListItemButton href='#home'>
     
        <ListItemText 
        primary="Totality"
        primaryTypographyProps={{ fontSize: 14 }}/>
      </ListItemButton>

      <ListItemButton href='#home'>
       
        <ListItemText 
        primary="Auxiliary Treatement"
        primaryTypographyProps={{ fontSize: 14 }}/>
      </ListItemButton>

      <ListItemButton href='#home'>
      
        <ListItemText 
        primary="Diet and Regimen"
        primaryTypographyProps={{ fontSize: 14 }}/>
      </ListItemButton>

      </List>
      </Stack>
      {/* </Stack> */}
    </Box>
  )
}

export default Sidebar