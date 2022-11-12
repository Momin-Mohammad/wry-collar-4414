import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import GetStartedButton from "../Components/Button";
import HowItWorks from "../Components/HowItWorks";
import MainPageFeatureImg from "../Components/MainPageFeatureImg";
import MainPageFeatureVid from "../Components/MainPageFeatureVid";
import Navbar from "../Components/Navbar";
import TrustedByButton from "../Components/TrustedByButton";
import TrustedByComp from "../Components/TrustedByComp";
import { getHowItWorksContent, getTrustedByContent } from "../utilties";
import styles from "./Homepage.module.css"

export default function HomePage(){

    const [howItWorkData, setHowItWork] = useState([]);
    const [trustedByData, setTrustedByData] = useState([]);
    const [Id,setId] = useState(1);

    const OnTrustedByBtnClick=(id)=>{
        console.log(id)
        setId(id)
    }

    useEffect(()=>{
     getHowItWorksContent().then(res=>setHowItWork(res.data)).catch((err)=>console.log("Error : ",err));

     getTrustedByContent().then(res=>setTrustedByData(res.data)).catch((err)=>console.log("Error : ",err))
    },[Id])

    return(
        <Box>

            {/* INTRO */}
            <Box className={styles.HomePage_purpleBox}>
            <Navbar/>
             
            <Box className={styles.Intro_Box} >
            <Box className={styles.Intro_Box1} >
                <Text className={styles.timeTracking} ><span style={{color:"cyan"}} >Timely</span> time tracking software</Text>
                <Text className={styles.Intro_Heading} >Say hello to <span style={{color:"cyan"}} >automatic time tracking</span></Text>
                <Text className={styles.Timely_Automate} >Timely automates company time tracking, so you and your team can focus on the work that matters.</Text>
                <Box className={styles.GetStartedButton}>
                    <GetStartedButton/>
                </Box>
                <Box className={styles.Intro_benefits_Box}>
                    <Box className={styles.Intro_benefits} >
                        <Image alt="check-image" src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57e4188a2912_Icon.svg" />
                        <Text>Trusted by 5000+ businesses globally</Text>
                    </Box>
                    <Box className={styles.Intro_benefits}>
                        <Image alt="thumbsUp-image" src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57c62c8a28e4_thumb-down.svg" />
                        <Text>Capture every billable second in your business</Text>
                    </Box>
                    <Box className={styles.Intro_benefits}>
                        <Image alt="bulb-image" src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57f43e8a2916_light-bulb.svg" />
                        <Text>Reduce time tracking admin by 75%</Text>
                    </Box>
                </Box>
            </Box>
            <Box className={styles.Intro_image_Box} >
                <Image
                alt="purple-div img" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62d7ebed9e2c923eb3b4c18b_hero-001-xl.webp"
                />
            </Box>
            </Box>

            </Box>

      {/* Automate your Time tracking */}
            <Box className={styles.automate_TimeT} >
                <Image style={{margin:"auto"}} alt="brain-img" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39954ae48af5bf_brainp.svg" />
                <Text className={styles.TT_Heading} >Automate your time tracking</Text>
                <Text className={styles.TT_para}>Forget timers, note taking and manual input—<span style={{color:"#27222fcc",fontWeight:600}}>Timely</span> can track time spent in every web and desktop app automatically for you. 
                    Get a precise daily record of all the time you spend in documents, meetings, emails, websites and video calls with zero effort.
                     It’s all <span style={{color:"#8a3ffc"}}>100% private to you.</span></Text>
                     <Link className={styles.How_it_works} style={{color:"#8a3ffc",textDecoration:"underline"}} to="*" >How it all works</Link>
                     
                     <Image style={{margin:"auto"}} alt="down-arrow" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39951ee48af5c4_arr.svg" />
                     
                </Box>

                 <Box className={styles.HowItWorks_content} >
                 {
                    howItWorkData.map((ele)=>
                    <HowItWorks key={ele.id}
                    image = {ele.img}
                    desc={ele.desc}
                    title={ele.title}
                    href={ele.href}
                    />
                    )
                 }
                 </Box>

                 <Box className={styles.MainPage_Features_MainBox}>
                      <Box className={styles.MainPage_Features_Box} >
                      <MainPageFeatureVid
                      image="https://m5y.s3.eu-west-1.amazonaws.com/people.mp4"
                      desc="Timely’s simple UI and automatic time tracking have helped other companies reduce timesheet admin by 75%. With flexible options for logging time, your team can manage timesheets in the way that makes most sense to them."
                      title="Save hours on time tracking"
                      />

                      <MainPageFeatureImg 
                      image="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62d7ed7f0de764464efc1bda_Frame%201340.webp"
                      desc="By capturing every second of your work day, Timely stops billable time from falling through the cracks. Report and invoice clients transparently, and use accurate company time data to improve project rates and budgets."
                      title="Capture every billable detail"
                      />

                      <MainPageFeatureVid
                      image="https://m5y.s3.eu-west-1.amazonaws.com/people.mp4"
                      desc="Timely’s gorgeous design, intuitive controls and fierce protection of individual privacy make it a time tracking tool that people actually enjoy using. Empower your team to manage their own productivity, and stay on top of performance, wellbeing and workload without compromising anyone’s trust"
                      title="Empower your people"
                      />

                      </Box>
                 </Box>

                 {/* Connect your stack */}
                 <Box className={styles.connectYourStack_MainBox} >
                  <Box className={styles.connectYourStack_Box}>
                    
                <Image className={styles.timely_arrow} alt="timely-arrow" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/625c168b07e04cf345cd2b3d_tm-arrow-wh.svg" />
                <Text className={styles.connectYourStack_title} >Connect your stack</Text> 
                <Text className={styles.connectYourStack_desc} >Timely’s native integrations and open APIs let you easily connect data across you existing digital toolkit. Enjoy modern, automatic time tracking without changing workflows you’ve spent years perfecting.</Text>
<Grid className={styles.connectYourStack_Grid}
>
  <GridItem className={styles.GridItem_logo} ><Image alt="zoom-logo" src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399507178afec0_622f69e00c9cf281783c6e63_60b773d26388125af692655e_zoom.png"/></GridItem>
  <GridItem className={styles.GridItem_logo} ><Image alt="zapier-logo" src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995db068afecb_622f69e00c9cf2a3aa3c6e5c_60b773d26388128ce29265e3_zapier.png"/></GridItem>
  <GridItem className={styles.GridItem_logo} ><Image alt="trello-logo" src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995d48d8afec2_622f69e00c9cf228763c6e5f_60b773d263881212a3926561_trello.png"/></GridItem>
  <GridItem className={styles.GridItem_logo} ><Image alt="toggl-logo" src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39959cb08b0389_622f69e00c9cf20e073c75c5_toggl.svg"/></GridItem>
  <GridItem className={styles.GridItem_logo} ><Image alt="todois-logo" src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399551b88afec9_622f69e00c9cf211c53c6e61_60b773d26388125fe3926566_todois.png"/></GridItem>
  <GridItem className={styles.GridItem_logo} ><Image alt="quickbooks-logo" src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39952c128afec1_622f69e00c9cf20fcd3c6e5d_60b773d2638812c090926634_quickbooks_logo.png"/></GridItem>
  <GridItem className={styles.GridItem_logo} ><Image alt="outlook-logo" src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995f1728afec3_622f69e00c9cf219633c6e62_60b773d26388126112926555_outlook.png"/></GridItem>
  <GridItem className={styles.GridItem_logo} ><Image alt="office-logo" src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995366e8afec5_622f69e00c9cf23dd63c6e5b_60b773d2638812391092655c_office365.png"/></GridItem>
  <GridItem className={styles.GridItem_logo} ><Image alt="jira-logo" src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39955cba8afec8_622f69e00c9cf266013c6e5e_60b773d263881204bd92656c_jira.png"/></GridItem>
  <GridItem className={styles.GridItem_logo} ><Image alt="harvest-logo" src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399594708afead_622f69e00c9cf215b73c6e44_60b773d2638812a08e92656f_harvest.png"/></GridItem>
  <GridItem className={styles.GridItem_logo} ><Image alt="calender-logo" src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399543808afeae_622f69e00c9cf22e8d3c6e48_60b773d26388128342926559_calendar.png"/></GridItem>
  <GridItem className={styles.GridItem_logo} ><Image alt="gmail-logo" src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399530e28afebb_622f69e00c9cf223073c6e4c_60b773d2638812105d926556_gmail.png"/></GridItem>
  <GridItem className={styles.GridItem_logo} ><Image alt="github-logo" src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399545b18afea6_622f69e00c9cf271b93c6e46_60b773d26388129bba926569_github.png"/></GridItem>
  <GridItem className={styles.GridItem_logo} ><Image alt="azuread-logo" src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39954a888afeac_622f69e00c9cf27e7c3c6e43_60b773d263881215e6926573_azuread.png"/></GridItem>
  <GridItem className={styles.GridItem_logo} ><Image alt="asana-logo" src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399535d98afeaf_622f69e00c9cf262c83c6e47_60b773d2638812deaf926564_asana.png"/></GridItem>
</Grid>

    <Link className={styles.SeeIntegration} >See Integration</Link>
                  </Box>
                 </Box>

                 {/* Trusted by */}
                 <Box className={styles.TrustedBy_MainBox}>
                    <Box>
                        <Box className={styles.TrustedBy_IntroBox} >
                        <Image className={styles.TrustedBy_Img} alt="starman-logo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAA8AEADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAUDBAYHAgH/xAAvEAABAwMCBAYBAwUAAAAAAAABAgMEAAUREiEGEzFRBxQiQWGRcRZCgSMzUrHR/8QAGQEAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAJhEAAgIBAwQCAgMAAAAAAAAAAQIAEQMhMUEEElFxYYGRscHR8P/aAAwDAQACEQMRAD8A7hpT2H1RpT2H1X2oJkkRmtZSVqUQlCB1UT7VF3VFLNsIwCxoSbSnsPqoZb7MRkuvD0g4AAySewqLzTrsFx2O1/XRlJbUeih1FVYqHJz7TsiS24GTq5SUFJSr2yDvtWXL1JNLiFltvH8beN5amLcvsIwjPMymUvM4KFfFS6U9h9Ujmc61OOKjSGUtuq1hpYJOffGKupnPoiMF2OVSnc4aScbDqd+m3+6rxdcLOPKKZd/HjSr34G8k+A6Mmx2l/SnsPqjSnsPqo4z6JLCHmj6VjP4+KlrcrBlDLsZQQQaMgnNvOxXERnOW6R6VUqtSUc91UsvB+MPUXXdSU59xTylIs5clvOPvZYcXr5SdtXbNc/rMDnMmXGvcdq45o/nkf1NGF1CMrGv3GKVMpIUgoHOOxH7zj/gpapMqRMfDaFslStBeIxpQP8e5JzXp6KIQDqpDbUBhRfXzDjlAA537fmk8Xim7XpvzPDVgL8A/25c+R5ZLw7oTpUrHyQM1aML9QKcdtHjnTz+fn0ZHvXGbXW4yWzOFxh81HMDSiOen9yT37GmqlxwBIUpsBOU8wkbb7jP5FKk8SR2ry3abjHkQpL20dx5I5MlWMkNrBwSOxwfirDNsUoJRNWlxlvOhtOcHJ6q+aiMD9OSMY7u7XXiqA19ezp9xl1yC20rx9ynNjnz6o9vL6HVjmEh3ShOffFPGkqQ0hK1a1BIBV3Pel8W1rjTkvB8raQgpSlXUDtntTOl0OBkLu69pJ24r6/3qGfIGCqDdQoooroTPMT4vO6OEUtOOFuHImx2ZjgONLJWNRz7DoP5rzcxx/NAgWmJaLLGHp815gvqSjoNCdAAOO4+qe8Zqsv6anN8SvIZtjjZQ6pRwd+mn3Ks7gDJyK5jbOJuO7Fw951qPHn2BpxLUSTdEFmQ42pQSgkBXTJG56jfpVqCxpEZc4vsN14Y4UuRk3t+6R18p+O7KUTIYnJcTpLexylXbO2Pk11xOSkahg43FcdnzLw1xJb53imhUW1xlpdiIgM64ge9i6oEqBHsD/G2c9hacQ80h1paVtrSFJWk5CgehB9xSe6FwE9UUUVXHCiiiiEwEuyq4s8RJC7sFLs9iQ0mPFWPQ9IWNRUe+Bp2/Hzlt4kWmTeeG0w4aHFrM2MopQM+kOp1H8AZP8VqaKl3Gx8RVK8+FGuMJ6FNZS9GfQUONq6KBrIeGkeXZF3jhaW4483an0rhuudVR3QSgZ+ClQrb0UBtCI4UUUVGE/9k=" />
                        <Text className={styles.connectYourStack_title} >Trusted by 5000+ businesses globally</Text>
                        <Text className={styles.TrustedBy_desc} >Whether you have hundreds of colleagues or none at all, with Timely size doesn’t matter. We help businesses of all sizes access the benefits of automatic time tracking, with flexible subscription plans that scale to meet your needs.</Text>
                        </Box>
                    </Box>
                     
                     <Box>
                    <Grid className={styles.TrustedBy_Btns} >
                         {
                            trustedByData.map((ele)=>
                            <GridItem className={styles.TrustedByButton_Grid}>
                            <TrustedByButton key={ele.id}
                            id={ele.id}
                            onClick={OnTrustedByBtnClick}
                            image={ele.logo}
                            text={ele.logo_text}
                             />
                             </GridItem>
                            )
                         }
                    </Grid>
                    
                        {
                           trustedByData.map((ele)=>
                             {
                                if(ele.id === Id){
                                  return  <TrustedByComp key={ele.id}
                                    id={ele.id}
                                    logo={ele.company_logo}
                                    href={ele.href}
                                    heading={ele.heading}
                                    image={ele.img}
                                    desc={ele.desc}
                                    />
                                }
                             }
                           )
                        }
  
                    </Box>

                 </Box>

        </Box>
    )
}