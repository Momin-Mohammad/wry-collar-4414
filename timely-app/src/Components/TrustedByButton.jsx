import { Box, Image, Text } from "@chakra-ui/react";
import styles from "./TrustedByButton.module.css"

export default function TrustedByButton(props){

    const {image,text,onClick,id} = props;

    return(
            <Box onClick={()=>onClick(id)} className={styles.TrustedByButton_Box}>
            <Image className={styles.TrustedByButton_logo} alt="logo" src={image} />
            <Box className={styles.TrustedByButton_textBox} >
            <Text className={styles.TrustedByButton_text} >{text}</Text>
            </Box>
            </Box>
    )
}