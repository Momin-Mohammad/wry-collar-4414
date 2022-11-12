import { Box, Image, Text } from "@chakra-ui/react";
import styles from "./TrustedByComp.module.css"


export default function TrustedByComp(props){

const {image,heading,logo,desc,href,id} = props;

    return(
            <Box className={styles.TrustedByComp_Box} >
                <Box className={styles.TrustedByComp_ImgBox} >
               {
                id===3 ? <video className={styles.TrustedByComp_Vid} muted playsInline="playsinline" autoPlay controls ><source src={image} type="video/mp4"/></video> : <Image className={styles.TrustedByComp_Img} alt="img" src={image}/>
               }
               </Box>
                <Box className={styles.TrustedByComp_content}>
                    <Text className={styles.TrustedByComp_heading} >{heading}</Text>
                    <Image className={styles.TrustedByComp_logo} src={logo} />
                    <div className={styles.TrustedByComp_Div}></div>
                    <Text className={styles.TrustedByComp_desc} >{desc}</Text>
                    <Text className={styles.TrustedByComp_href}>{href}</Text>
                </Box>
            </Box>
    )
}