import { Box, Text } from "@chakra-ui/react";
import styles from "./LoginPageFeedback.module.css"

export default function LoginPageFeedback({feedback,person,designation}){

    return(
        <Box className={styles.LoginPageFeedback_MainBox} >
            <Text className={styles.LoginPageFeedback_quote} >{feedback}</Text>
            <Text className={styles.LoginPageFeedback_person} ><span style={{color:"black"}} >{person}</span> {designation}</Text>
        </Box>
    )
    
}