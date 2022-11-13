import { Box, Image } from "@chakra-ui/react"
import styles from "./LoginPageAch.module.css"


export default function LoginPageAch(){
    return(
        <Box className={styles.Achievements}>
           
            <Image className={styles.Achievements_Image} alt="momentum-leader" src="https://d1luwo5u9zpc4i.cloudfront.net/assets/g2/g2_badge_momentum_leader_2022-299c1e02e92f8501925a60c841914bf8b7f2cbdc3eae84ad72c7b02d0bffc44b.svg" />
            <Image className={styles.Achievements_Image} alt="users-loves-us" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a3995b0a08af4da_loveus.svg" />
            <Image className={styles.Achievements_Image} alt="leaders" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/63498f3f446cd7d034399b9e_TimeTracking_Leader_Leader.svg" />
           </Box>
    )
}