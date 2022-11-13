import { Box, Image, Link, Text } from "@chakra-ui/react"
import GetStartedButton from "./Button"
import styles from "./TryTime.module.css"

export default function TryTime(){
    return(
        <Box className={styles.TryTime_Box} >
           <Text className={styles.TryTime_Heading} >Try <span style={{color:"cyan"}}>Timely</span> today!</Text>
           <Text>Discover the power of <span style={{fontWeight:"600"}} >Timely’s</span>Timely’s automated time tracking now…</Text>
           <Box className={styles.GetStartedButton} >
           <GetStartedButton className={styles.Btn} />
           </Box>
           <Box className={styles.TryTime_FeatureBox}>
                    <Box className={styles.TryTime_Intro_benefits} >
                        <Image alt="check-image" src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57e4188a2912_Icon.svg" />
                        <Text>Trusted by 5000+ businesses globally</Text>
                    </Box>
                    <Box className={styles.TryTime_Intro_benefits}>
                        <Image alt="thumbsUp-image" src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57c62c8a28e4_thumb-down.svg" />
                        <Text>Capture every billable second in your business</Text>
                    </Box>
                    <Box className={styles.TryTime_Intro_benefits}>
                        <Image alt="bulb-image" src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57f43e8a2916_light-bulb.svg" />
                        <Text>Reduce time tracking admin by 75%</Text>
                    </Box>
                </Box>
           <Text className={styles.TryTime_EndText}>30 people or more? <span style={{textDecoration:"underline"}} ><Link>Get a personalized introduction to Timely</Link></span></Text>
        </Box>
    )
}