import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import styles from "./Navbar.module.css"

export default function GetStartedButton(){

    return(
        <Button size={["xs","sm","md"] }className={styles.getStartedBtn} bg="#001141" borderRadius="10px" >Get Started <ArrowForwardIcon/></Button>
    )
}