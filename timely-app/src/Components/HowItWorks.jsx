import { Box, Image, Text } from "@chakra-ui/react";
import styles from "./HowItWorks.module.css"

export default function HowItWorks(props){

    const{image,title,desc,href} = props;

    return(
        <Box className={styles.HowItWorks_Box}>
            <Image className={styles.HowItWorks_Image} src={image} />
            <Text className={styles.HowItWorks_Heading} >{title}</Text>
            <Text className={styles.HowItWorks_Desc} >{desc}</Text>
            <Text className={styles.HowItWorks_Href} >{href}</Text>
        </Box>
    )
}