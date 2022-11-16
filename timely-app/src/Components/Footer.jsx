import { Box, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getFooterContent } from "../utilties";
import GetStartedButton from "./Button";
import styles from "./Footer.module.css"


export default function Footer(){

  const [footerData,setFooterData] = useState([]);

  useEffect(()=>{
   getFooterContent().then(res=>{
    setFooterData(res.data);
   }).catch(err=>{
    console.log(err)
   })
  },[])

    return(
      <Box>
        <Box className={styles.Footer_main_box} alignItems='center'>

           <Box>
            <Text className={styles.designedBy} >Designed by<span> viking </span>in Oslo, Norway NO</Text>

            <Stack className={styles.boatImage_stack} direction='column'>
  <Image className={styles.boatImage}
    // w='5%'
    // margin='auto'
    // marginBottom='-28px'
    // objectFit='cover'
    alt="footer-boat" 
    src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39957b258af61b_ship.svg"
  />
  <Image
    w='100%'
    objectFit='cover'
    alt="footer-ocean" 
    src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a399572518af5ee_ocean.svg"
  />
</Stack>
           </Box>

           <Box className={styles.Footer_Box}>

            {/* Buttons and achivements */}
            <Box className={styles.Footer_content_Box1} >
                <Box className={styles.memoryLogo_Box} ><Image
                className={styles.memoryLogo}
                alt="memory-logo"
                src="https://assets-global.website-files.com/622f69e00c9cf2599f3c60d5/62556ba13d84b67cea42af8a_made-by-dark.svg"
                /></Box>

                <div className={styles.spacerDiv} ></div>

                <Box className={styles.achievements}>
            <Image className={styles.achievement_banner} alt="leader-2022" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fc9eb5ab5b7d8536c_TimeTracking_Leader_Leader.svg"/>
          <Image className={styles.achievement_banner} alt="best-usability" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fdb7877357a9300c3_TimeTracking_BestUsability_Total.svg" />
          <Image className={styles.achievement_banner} alt="most-implementable" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fd96ad4e0c44915ed_TimeTracking_MostImplementable_Total.svg" />
          <Image className={styles.achievement_banner} alt="best-relationship" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fdfae2ff62378f39f_TimeTracking_BestRelationship_Total.svg" />
          </Box>
           
           <Box className={styles.GetStartedButton}>
           <GetStartedButton />
           </Box>

           <div className={styles.spacerDiv} ></div>

           <Box>
            <Text className={styles.getTimelyHeading} >Get Timely on every device</Text>
            <Box className={styles.storesImgBox}>
                <Link to="*">
                    <Image 
                    className={styles.storesImage}
                    alt="apple-store" 
                    src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39951e1d8af644_App%20Store%20-%20eng.svg"
                    />
                </Link>
                <Link to="*">
                    <Image
                    className={styles.storesImage}
                    alt="play-store" 
                    src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39950b828af639_Google%20Play%20-%20eng.svg"
                    />
                </Link>
            </Box>
           </Box>
            </Box>

            {/* Features */}
            <Box className={styles.Footer_content_Box2} >
              
            <Grid
            className={styles.grid_content}>
  {
    footerData.map((ele)=>

    {
      if(ele.id === 1){
        ele.heading = "Features";
      }
       return <GridItem key={ele.id}>
        <Text className={styles.Footer_content_heading} >{ele.heading}</Text>
       { ele.subheading.map((subheading)=><Link to="*"><Text className={styles.Footer_content_subheading} >{subheading}</Text></Link>)}
    </GridItem>}
    )
  }
</Grid>

            </Box>

           </Box>


        </Box>
        <Box className={styles.copyright_section} >
          <Box className={styles.copyright_section_content} >
            <Text textDecoration="underline" >Terms of Service</Text>
            <Text className={styles.dot} >•</Text>
            <Text textDecoration="underline" >Privacy Policy</Text>
            <Text className={styles.dot} >•</Text>
            <Text textDecoration="underline" >Login</Text>
            <Text className={styles.dot} >•</Text>
            <Text textDecoration="underline" >Get started</Text>
            <Text className={styles.dot} >•</Text>
            <Image className={styles.social_media_logo_twt} alt="twitter-logo" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a3995140e8af655_Twitter.svg" />
            <Text className={styles.dot} >•</Text>
            <Image className={styles.social_media_logo_fb} alt="facebook-logo" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a3995580a8af657_Vector.svg"/>
          </Box>

          <Box className={styles.copyright_section_content} >Copyright 2022 Memory AS</Box>
        </Box>
        </Box>
    )
}