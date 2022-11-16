import { Box, Button, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import {ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';
import GetStartedButton from './Button';

const menuStyle2={
    _hover:"transparent",
    background:"transparent",
    fontWeight : 600,
    fontSize : '16px',
    marginLeft:"20px"
  }

  const submenu2={
    _hover:"transparent",
    background:"transparent",
  }

export default function CompNav(){

  return(
    <Box className={styles.navbar_content} >

<Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />

<MenuList w="100vw">
   <Menu> 
   <MenuItem>

        <Menu>
      <MenuButton className={styles.menuStyle} style={menuStyle2} bg="transparent" as={Button} rightIcon={<ChevronDownIcon />}>
        Features
      </MenuButton>
      <MenuList w="100vw">
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
        <Box>Track teams</Box>
        </Link>
        </MenuItem>
    
        <MenuItem>
        <Link className={styles.submenu} style={submenu2} to="*">
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
    </MenuItem>

    <MenuItem>
    <Menu>
      <MenuButton className={styles.menuStyle} style={menuStyle2} bg="transparent" as={Button} rightIcon={<ChevronDownIcon />}>
        Solutions
      </MenuButton>
      <MenuList display="flex"  w="100vw">
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
    </MenuItem>
    
    <MenuItem>
    <Link className={styles.menuStyle} style={menuStyle2} bg="transparent" to="/pricing">Pricing Page</Link>
    </MenuItem>
    
    <MenuItem>
     <Menu>
      <MenuButton className={styles.menuStyle} style={menuStyle2} bg="transparent" as={Button} rightIcon={<ChevronDownIcon />}>
        Resources
      </MenuButton>
      <MenuList w="100vw">
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
    
        <MenuItem>
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
    </MenuItem>
    
    <MenuItem>
    <Link style={menuStyle2} to="*">Talk to sales</Link>
    </MenuItem>
    
    <MenuItem>
    <Link style={menuStyle2} to="/login" target="_blank" rel="noopener norefferer">Login</Link>
    </MenuItem>
    
    <MenuItem>
   <GetStartedButton className={styles.CompNav_GettingStartedButton} />
    </MenuItem>
    
    <MenuItem>
    <Link className={styles.memory_logo}  to="*">
    <img alt="memory_logo" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a399529fb8af72e_made-by-dark2.svg" />
    </Link>
    </MenuItem>
    </Menu> 

    </MenuList>
    </Menu>
        </Box>
  )
}