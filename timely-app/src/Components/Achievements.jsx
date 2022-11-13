import { Box, Image } from "@chakra-ui/react"
import styles from "./Achievements.module.css"


export default function Achievements(){
    return(
        <Box className={styles.Achievements}>
            <Image className={styles.Achievements_Image} alt="most-implementable" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/63498f418ca295703f8457f7_TimeTracking_MostImplementable_Total.svg" />
            <Image className={styles.Achievements_Image} alt="best-result" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/63498f52e4642297ab8f72ef_TimeTracking_BestResults_Total.svg" />
            <Image className={styles.Achievements_Image} alt="leaders" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/63498f3f446cd7d034399b9e_TimeTracking_Leader_Leader.svg" />
            <Image className={styles.Achievements_ImageLove} alt="users-loves-us" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a3995b0a08af4da_loveus.svg" />
            <Image className={styles.Achievements_Image} alt="high-performer" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/63498f4b6e9ed53205e3411c_TimeTracking_HighPerformer_Mid-Market_HighPerformer.svg" />
            <Image className={styles.Achievements_Image} alt="best-usability" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/63498f55aa3b88edbbf61ecc_TimeTracking_BestUsability_Small-Business_Total.svg" />
            <Image className={styles.Achievements_Image} alt="best-relationship" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/63498f51a76c453caa7a4099_TimeTracking_BestRelationship_Total.svg" />
        </Box>
    )
}