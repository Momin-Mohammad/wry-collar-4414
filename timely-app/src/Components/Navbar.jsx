import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";
import ExpNav from './ExpNav';
import CompNav from './CompNav';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Navbar(){

  const initNav = window.innerWidth > 1090 ? <ExpNav /> : <CompNav/>

  const[nav,setNav] = useState(initNav);

  useEffect(()=>{

    if(window.innerWidth < 990){
      setNav(<CompNav/>);
    }
    else{
      setNav(<ExpNav/>)
    }
    
  },[window.innerWidth])

    return(

        <Flex paddingLeft='10%' paddingRight='10%' paddingBottom='1%' alignItems='center' gap='2'>

        <Box p='2'>  
      <Link  className={styles.logo} to="/">
        <Box>
        <img alt="logo" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39952e0d8af72b_Variant3.svg" />
        </Box>
        <Box className={styles.logo_part}>
          <img alt="ukr_flag" src="https://thumbs.dreamstime.com/b/ukraine-flag-heart-country-vector-ukraine-flag-heart-107165239.jpg" />
        </Box>
        </Link>
        </Box>

        <Spacer />
         {
            nav
         }
         {/* <ExpNav/> */}
      </Flex>
    )
}