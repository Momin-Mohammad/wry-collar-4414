import { Box, FormControl, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css"


export default function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(email === "" || password === ""){
        return alert("Either Email or Password is missing")
      }

      if(!email.includes("@") || !email.includes(".")){
        return alert("Wrong email format")
      }

      try {
        let res = await fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        });
        res = await res.json();
        // update auth
        return alert("Login Successful");
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <Box className={styles.LoginForm_MainBox} >
        <FormControl >
              <input id="1" className={styles.LoginForm_Input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email"
              />
              <input id="2" className={styles.LoginForm_Input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
              />
            <button className={styles.LoginForm_SubmitButton} onClick={handleSubmit} type="submit">LOG IN</button>

            <Link><Text className={styles.LoginForm_ForgotPassword} >I forgot my password</Text></Link>
           <Box className={styles.LoginForm_Or} >
            <div className={styles.LoginForm_div}></div>
            <Text>or</Text>
            <div className={styles.LoginForm_div} ></div>
           </Box>

           <button className={styles.LoginForm_Input} >
                <Image alt="google-logo" src="https://d1luwo5u9zpc4i.cloudfront.net/assets/google_signin-f3c9ed21a2b2cb641cd72c0c1ab811e3ad589cb0abfe0f4f37dce575492d29de.svg"/>
                <Text className={styles.LoginForm_Text} >Sign in with Google</Text>
           </button>

           <button className={styles.LoginForm_Input} >
                <Image alt="apple-logo" src="https://d1luwo5u9zpc4i.cloudfront.net/assets/left-black-logo-large-a3b14837a5f04bd3760b77c1e293fdb489555d095a6420427453e84643cd0b67.svg"/>
                <Text className={styles.LoginForm_Text} >Sign in with Apple</Text>
           </button>
        </FormControl>

    <Text className={styles.LoginForm_EndText} >Don't have an account?<Link><span style={{color:"#06c17f"}}> Sign in</span></Link></Text>   
      </Box>
    );
  
}