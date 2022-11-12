import { Box, Image, Text } from "@chakra-ui/react";
import styles from "./MainPageFeature.module.css"


export default function MainPageFeatureImg(props){

    const{image,title,desc} = props;

    return(
        <Box className={styles.MainPageFeature_Box} >
             <Box className={styles.MainPageFeature_content} >
                <Text className={styles.MainPageFeature_title} >{title}</Text>
                <Box className={styles.MainPageFeature_desc}>
                <Text style={{lineHeight:"30px"}} >{desc}</Text>
                </Box>
            </Box>
            <Box className={styles.MainPageFeature_Img}>
            <Image src={image}/>
            </Box>
        </Box>
    )
}