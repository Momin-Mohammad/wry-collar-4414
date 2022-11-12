import { Box, Text } from "@chakra-ui/react";
import styles from "./MainPageFeature.module.css"


export default function MainPageFeatureVid(props){

    const{image,title,desc} = props;

    return(
        <Box className={styles.MainPageFeature_Box} >
            <Box className={styles.MainPageFeature_Img}>
            <video autoPlay loop muted>
                <source src={image} type="video/mp4" />
            </video>
            </Box>
            <Box className={styles.MainPageFeature_content} >
                <Text className={styles.MainPageFeature_title} >{title}</Text>
                <Box className={styles.MainPageFeature_desc}>
                <Text style={{lineHeight:"30px"}} >{desc}</Text>
                </Box>
            </Box>
        </Box>
    )
}