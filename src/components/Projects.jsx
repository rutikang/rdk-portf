import { GitHub, Info, Launch, Send } from '@mui/icons-material';
import { Alert, Box, Button, Divider, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import React, { useState } from 'react'

import friendly from '../images/friendly.png'
import school from '../images/schoolsys.png'

import goal from '../images/goalApp.png'
import feedback from '../images/feddback.png'
import business from '../images/business.png'

import calc from '../images/calc.png'

import ehr from '../images/ehr.png'
import { Link } from 'react-router-dom';


export const Projects = () => {

  const [ishovered, setIshovered] = useState(null)

    const itemData = [
        {
          img: friendly,
          title: 'Friendly',
          author: 'Social media platform design',
           link: 'https://rutikang.github.io/react-trial/'
       
        },
        {
          img: school,
          title: 'School Management System',
          author: 'React, Nodejs+Express, MySQL',
          link: 'https://rutikang.github.io/School-system/#/'

        },
        {
          img: 'https://i.pinimg.com/1200x/0e/85/f0/0e85f08884f68a1e515366cc45a9c92e.jpg',
          title: 'Simple React apps',
          author: 'Simple apps created with react',
        },
        // {
        //   img: 'https://i.pinimg.com/1200x/56/ae/76/56ae76f7bc1b3e0edc962cea1af7035f.jpg',
        //   title: 'Anomaly detector',
        //   author: 'Platform monitoring',
        // },
        // {
        //   img: 'https://i.pinimg.com/1200x/0e/85/f0/0e85f08884f68a1e515366cc45a9c92e.jpg',
        //   title: 'Simple React apps',
        //   author: 'Simple apps created with react',
        // },
        // {
        //   img: 'https://i.pinimg.com/1200x/56/ae/76/56ae76f7bc1b3e0edc962cea1af7035f.jpg',
        //   title: 'Anomaly detector',
        //   author: 'Platform monitoring',
        // },
        // {
        //   img: 'https://i.pinimg.com/1200x/0e/85/f0/0e85f08884f68a1e515366cc45a9c92e.jpg',
        //   title: 'Simple React apps',
        //   author: 'Simple apps created with react',
        // },
        // {
        //   img: 'https://i.pinimg.com/1200x/56/ae/76/56ae76f7bc1b3e0edc962cea1af7035f.jpg',
        //   title: 'Anomaly detector',
        //   author: 'Platform monitoring',
        // },
        // {
        //   img: 'https://i.pinimg.com/1200x/0e/85/f0/0e85f08884f68a1e515366cc45a9c92e.jpg',
        //   title: 'Simple React apps',
        //   author: 'Simple apps created with react',
        // },
    //    https://images.pexels.com/photos/4021262/pexels-photo-4021262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
        
    ];

    const SimpleData = [
      {
        img: goal,
        title: 'Goals App',
        author: 'Simple goal planner',
         link: 'https://rutikang.github.io/Simple-projects/'
     
      },
      {
        img: feedback,
        title: 'Fedbaack form',
        author: 'Basic feedback form',
        // link: 'https://rutikang.github.io/School-system/#/'

      },
       {
          img: calc,
          title: 'Simple Calculatorr',
          author: 'Basic Calculator',
        },
      
  ];
// -------------------------------------------------------------------------------------------------------

  return (
    <Box sx={{
        // border: '1px solid gray',
        width:"100%",
        height:'95vh',
        // bgcolor:'#f0f9ff',
        // borderRadius:2,
        // overflowY: 'auto',
       
        
        
        
    }}>
        <Box sx={{
            p:4,
            color:'gray',
            overflowX:'hidden'
            
        }}>
        <Typography>Sample Personal Projects</Typography>
        <Divider sx={{bgcolor:'gray', mb:5}}/>
        <Typography> These projects showcase my design skills and creativity, reflecting my personal approach to problem-solving and innovation.</Typography>

       

{/* ------------------------------------------------------------------- */}
        
    {/* <ImageList sx={{ width:"100%", height:'auto', gap:1}}>
      <ImageListItem key="Subheader" cols={3} sx={{mt:3}} >
        
      </ImageListItem>
      {itemData.map((item, k) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}` }
            alt={item.title}
            loading="lazy"
            style={{
                width:"320px",
                height:'300px',
                borderRadius:5,
                boxShadow: ishovered === item.img ? "0px 4px 15px rgba(25, 255, 250, 1)" : "none", // Box shadow around the image
                filter: ishovered === item.img ? 'grayscale(0%)' : 'grayscale(60%)',
                transform: ishovered === item.img ? "scale(1.1)" : "scale(1)", // Zoom effect on hover
                transition: "transform 0.3s ease, height 0.3s ease, box-shadow 0.3s ease", // Smooth transition
                // zindex: ishovered === item.img ? 10:0,
                // position: ishovered === item.img ? "absolute" : "relative", // Position image only when hovered



            }}

            onMouseEnter = {()=> setIshovered(item.img)}
            onMouseLeave={()=> setIshovered(null)}

            
          />
                    <ImageListItemBar
            sx={{bgcolor: 'rgba(8 ,47, 73 ,0.8 )',width:"320px", boxShadow:10 }}
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <a href={item.link} target="_blank" rel="noopener noreferrer">
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <Launch />
              </IconButton>
              </a>
              
            }
          />
        
        </ImageListItem>
      ))}
    </ImageList> */}

    

       

<Box sx={{width:'100%', mt:5, display:'flex', flexWrap:'wrap', gap:3}}>

<a href='https://ehr-hazel.vercel.app/login'>
<Box sx={{width:'300px', height:'300px', border:'5px solid ', borderRadius:5, boxShadow:20,overflow:'hidden', position:'relative'}}>
  <img src={ehr}
          style={{
            // width: '100%', // Ensures the image scales to the width of the Box
            height: '100%', // Ensures the image scales to the height of the Box
            objectFit: 'contain', // Makes the image fit within the Box without cropping
          }}
          />
           <Box sx={{bgcolor:'rgba(61, 69, 134, 0.8)', width:'100%', height:'60px', position:'absolute', bottom:0, p:2}}>
              <Typography sx={{color:'#fcfcf0'}}> Personal Health Records Project</Typography>
              <Divider/>
              <Typography sx={{color:'#fcfcf0'}}  style={{fontSize:12}}>React, Node, MySQL</Typography>
              <Typography sx={{color:'#fcfcf0'}} style={{fontSize:12}}>Render, AWS, vercel</Typography>

           </Box>
           <Box sx={{bgcolor:'rgb(138, 135, 4)', width:'100px', height:'70px', position:'absolute', top:0, right:0, p:1}}>
           <Typography sx={{color:'#fcfcf0'}} style={{fontSize:12}}>Test logins :</Typography>
           <Typography sx={{color:'#fcfcf0'}} style={{fontSize:12}}>email: dan@gmail.com</Typography>
           <Typography sx={{color:'#fcfcf0'}} style={{fontSize:12}}>password:dan</Typography>



           </Box>
  </Box>
  </a>
  <a href='https://school-system-sooty.vercel.app/'>
  <Box sx={{width:'300px', height:'300px', border:'5px solid ', borderRadius:5, boxShadow:20, overflow:'hidden', position:'relative'}}>
          <img src={school}
          style={{
            // width: '100%', // Ensures the image scales to the width of the Box
            height: '100%', // Ensures the image scales to the height of the Box
            objectFit: 'contain', // Makes the image fit within the Box without cropping
          }}
          />

<Box sx={{bgcolor:'rgba(61, 69, 134, 0.8)', width:'100%', height:'60px', position:'absolute', bottom:0, p:2}}>
              <Typography sx={{color:'#fcfcf0'}}> School Management System</Typography>
              <Divider/>
              {/* <Typography sx={{color:'#fcfcf0'}}  style={{fontSize:12}}>React, Node, MySQL</Typography>
              <Typography sx={{color:'#fcfcf0'}} style={{fontSize:12}}>Render, AWS, vercel</Typography> */}

           </Box>  
           
          
           
           
           </Box>
           </a>
 
 <a href='https://business-hub-v1-git-main-daniels-projects-ee8cea4f.vercel.app/'>
  <Box sx={{width:'300px', height:'300px', border:'5px solid ', borderRadius:5, boxShadow:20,overflow:'hidden', position:'relative'}}>
  <img src={business}
          style={{
            // width: '100%', // Ensures the image scales to the width of the Box
            height: '100%', // Ensures the image scales to the height of the Box
            objectFit: 'contain', // Makes the image fit within the Box without cropping
          }}
          />
<Box sx={{bgcolor:'rgba(61, 69, 134, 0.8)', width:'100%', height:'60px', position:'absolute', bottom:0, p:2}}>
              <Typography sx={{color:'#fcfcf0'}}> Business Repo Project</Typography>
              <Divider/>
              <Typography sx={{color:'#fcfcf0'}}  style={{fontSize:12}}>Maps integration</Typography>
              {/* <Typography sx={{color:'#fcfcf0'}} style={{fontSize:12}}>Render, AWS, vercel</Typography> */}

           </Box>
  </Box>
  </a>


  <a href='https://rutikang.github.io/react-trial/'>
  <Box sx={{width:'300px', height:'300px', border:'5px solid ', borderRadius:5, boxShadow:20,overflow:'hidden', position:'relative'}}>
  <img src={friendly}
          style={{
            // width: '100%', // Ensures the image scales to the width of the Box
            height: '100%', // Ensures the image scales to the height of the Box
            objectFit: 'contain', // Makes the image fit within the Box without cropping
          }}
          />

<Box sx={{bgcolor:'rgba(61, 69, 134, 0.8)', width:'100%', height:'60px', position:'absolute', bottom:0, p:2}}>
              <Typography sx={{color:'#fcfcf0'}}>Friendly (social media) Project</Typography>
              <Divider/>
              {/* <Typography sx={{color:'#fcfcf0'}}  style={{fontSize:12}}>React, Node, MySQL</Typography> */}
              {/* <Typography sx={{color:'#fcfcf0'}} style={{fontSize:12}}>Render, AWS, vercel</Typography> */}

           </Box>  </Box>
           </a>

</Box>


<Alert variant="outlined" severity="info" sx={{mt:5,mb:3, color:'#58a0e8'}}>
        For more projects please visit my github repo .  
        <Button  endIcon={<GitHub/>} sx=
        {{variant:'outlined',
           bgcolor:'#003c78',
            ml:2, 
            color:'white'}} href="https://github.com/rutikang"
            target="_blank"
            rel="noopener noreferrer">Github</Button>
      </Alert>
          {/* ----------------------------------------------- */}

          <Typography>Simple & Basic applications</Typography>
        <Divider sx={{bgcolor:'gray'}}/>




<Box sx={{mt:5}}>

        <Box sx={{width:'300px', height:'300px', border:'5px solid ', borderRadius:5, boxShadow:20,overflow:'hidden'}}>
        <a href='https://rutikang.github.io/Simple-projects/'>
  <img src={goal}
          style={{
            // width: '100%', // Ensures the image scales to the width of the Box
            height: '100%', // Ensures the image scales to the height of the Box
            objectFit: 'contain', // Makes the image fit within the Box without cropping
          }}
          />
            </a>

  </Box>

  </Box>





{/* ------------------------------------------------------------------- */}
        
    {/* <ImageList sx={{ width:"100%", height:'auto', gap:1}}>
      <ImageListItem key="Subheader" cols={3} sx={{mt:2}} >
        
      </ImageListItem>
      {SimpleData.map((item, k) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}` }
            alt={item.title}
            loading="lazy"
            style={{
                width:"320px",
                height:"300px",
                borderRadius:5,
                boxShadow:5,
                boxShadow: ishovered === item.img ? "0px 4px 15px rgba(2, 255, 250, 1)" : "none", // Box shadow around the image
                filter: ishovered === item.img ? 'grayscale(0%)' : 'grayscale(50%)',
                transform: ishovered === item.img ? "scale(1.1)" : "scale(1)", // Zoom effect on hover
                transition: "transform 0.3s ease, height 0.3s ease, box-shadow 0.3s ease", // Smooth transition

            }}

            onMouseEnter = {()=> setIshovered(item.img)}
            onMouseLeave={()=> setIshovered(null)}
            
          />
                    <ImageListItemBar
            sx={{bgcolor: 'rgba(8 ,47, 73 ,0.8 )',width:"320px", boxShadow:10 }}
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <a href={item.link} target="_blank" rel="noopener noreferrer">
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <Launch />
              </IconButton>
              </a>
              
            }
          />
        
        </ImageListItem>
      ))}
    </ImageList> */}



        </Box>
    </Box>
  )
}
