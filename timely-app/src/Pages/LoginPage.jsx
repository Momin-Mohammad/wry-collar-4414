import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LoginForm from "../Components/LoginForm";
import LoginPageAch from "../Components/LoginPageAch";
import LoginPageFeedback from "../Components/LoginPageFeedback";
import styles from "./LoginPage.module.css"

export default function LoginPage(){
    return(
       <Box className={styles.LoginPage_MainBox} >

<Box className={styles.LoginPage_Box1} >
    <Link to="/"><Image className={styles.LoginPage_ToHomeLogo} alt="timely-logo-to-home" src="https://d1luwo5u9zpc4i.cloudfront.net/assets/memory_apps/timely_icon-0009454e9497f1cb2a0f9042037156a62c31421032858278d5002aae979084a2.svg" /></Link>
    <Text className={styles.LoginPage_Heading} >Log in to Timely</Text>
</Box>

<Box className={styles.LoginPage_Box2} >
    <Box className={styles.LoginPage_Box2_1} >
    <Text className={styles.LoginPage_Box2Heading}>Top rated time tracking</Text>

    <LoginPageAch/>

    <LoginPageFeedback
      feedback="“The best way to measure exactly where your time goes.”"
      person="Brian,"
      designation=" Accountant"
    />
    <LoginPageFeedback
      feedback="“Timely takes a load off my brain.”"
      person="Erik,"
      designation=" Digital Designer"
    />
    <LoginPageFeedback
      feedback="“Easy to use and I love the project level summaries.”"
      person="Jonathan,"
      designation=" Software Engineer"
    />
    </Box>
  <LoginForm/>

</Box>
<Text className={styles.LoginPage_CopyrightText} >Copyright 2022 Memory AS</Text>
       </Box>
    )
}