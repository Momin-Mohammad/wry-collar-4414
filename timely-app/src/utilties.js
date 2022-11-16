import axios from "axios";

export const getFooterContent=()=>{
    return axios.get("https://my-mock-data.herokuapp.com/footer");
}

export const getHowItWorksContent=()=>{
    return axios.get("https://my-mock-data.herokuapp.com/mainPage_featuresA");
}

export const getTrustedByContent=()=>{
    return axios.get("https://my-mock-data.herokuapp.com/mainPage_TrustedBy");
}

export const getTimeTrackPageContent=()=>{
    return axios.get("https://my-mock-data.herokuapp.com/FeaturePage_Benefits");
}