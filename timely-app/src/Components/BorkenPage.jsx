import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./BrokenPage.module.css"


export default function BrokenPage(){
    return(
        <Box className={styles.BrokenPage}>
        Oops! It seems like you clicked on a broken link
        <Box><Link style={{color:"red"}} to="/">Go Back</Link></Box>
        </Box>
    )
}