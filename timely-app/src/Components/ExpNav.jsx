import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import {ChevronDownIcon } from "@chakra-ui/icons";
//import {FaStarHalf} from "react-icons/fa"
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';
import GetStartedButton from './Button';

const menuStyle2={
    background:"transparent"
  }

const submenu2={
  _hover:"#9b72da",
  background:"transparent"
}

export default function ExpNav(){

  // const openInNewTab = url => {
  //   window.open(url, '_blank', 'noopener,noreferrer');
  // };

  return(
    <Box className={styles.navbar_content} >
        
        <Menu>
      <MenuButton style={menuStyle2} as={Button} rightIcon={<ChevronDownIcon />}>
       <Box className={styles.menuStyle} > Features </Box>
      </MenuButton>
      <MenuList>
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="/features/time-tracking">
        <Box> Track time</Box>
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box> Track projects</Box>
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box> Track teams</Box>
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2}  to="*">
        <Box>Track plans  
        <span className={styles.new_feature} >New</span>
        </Box> 
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Integration</Box>
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Our privacy promise</Box>
        </Link>
        </MenuItem>
      </MenuList>
    </Menu>
    
    <Menu>
      <MenuButton style={menuStyle2} as={Button} rightIcon={<ChevronDownIcon />}>
       <Box  className={styles.menuStyle}>Solutions</Box>
      </MenuButton>
      <MenuList display="flex" >
        <Box>
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Consulting firms</Box>
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Software companies</Box>
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Agencies</Box>
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Designers & creatives</Box>   
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Lawyers</Box>
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Accountants</Box>
        </Link>
        </MenuItem>
        </Box>
    
      <Box>
      <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Teams</Box>
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Freelancers</Box>
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Employees</Box>
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Project managers</Box>
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Remote workers</Box>
        </Link>
        </MenuItem>
      </Box>
    
      </MenuList>
    </Menu>
    
    <Link className={styles.menuStyle} to="/pricing">Pricing Page</Link>
    
     <Menu>
      <MenuButton style={menuStyle2} as={Button} rightIcon={<ChevronDownIcon />}>
        <Box className={styles.menuStyle} >Resources</Box>
      </MenuButton>
      <MenuList >
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Blog</Box>
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Case studies</Box>
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Podcast</Box>
        </Link>
        </MenuItem>
    
        <MenuItem >
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Books</Box>   
        <Box>New</Box>
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Webinars</Box>
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Time tracking guide</Box>
        </Link>
        </MenuItem>
    
      <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
        <Box>Support</Box>
        </Link>
        </MenuItem>
        </MenuList>
    </Menu>
    
    <Link className={styles.menuStyle} to="*">Talk to sales</Link>
    
       <Link  className={styles.menuStyle} to="/login" target="_blank" rel="noopener norefferer">
          Login
          </Link>
    
          <GetStartedButton />
    
          <Link to="*">
            <img alt="memory_logo" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a399529fb8af72e_made-by-dark2.svg" />
          </Link> 

        </Box>
  )
}