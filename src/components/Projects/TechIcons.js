import React from 'react';
import { DiReact, DiFirebase,DiMongodb, DiCss3, DiJavascript, DiWindows } from 'react-icons/di';
import {FaNode, FaNodeJs} from 'react-icons/fa'
// import {FcLinux} from 'react-icons/fc'
import { SiRedux, SiJson, SiHtml5, SiVisualstudiocode, SiJavascript } from 'react-icons/si';


const TechIcons = ({tag}) => {
    if(tag === 'React')
        return <DiReact size = '70%' color = '#5ED4F3' />
    else if(tag === 'Firebase')
        return <DiFirebase size = '70%' color='#F7C428'/>
    else if(tag === 'Mongodb')
        return <DiMongodb size = '70%' color = '#559134'/>
    else if(tag === 'Node')
        return <FaNode size = '70%'/>
    else if(tag === 'CSS')
        return <DiCss3 size = '70%'  color = "#2171B6"/>
    else if(tag === 'JavaScript')
        return <SiJavascript size = '70%' color = '#EFD81C'/>
    else if(tag === 'JSON')
        return <SiJson size = '70%'/>
    else if(tag === 'HTML')
        return <SiHtml5 size = '70%' color = "#DC4A25"/>  
    else if(tag === 'Redux')
        return <SiRedux size = '70%' color = '#7248B6'/> 
    // else if(tag === 'Postman')
    //     return <FcLinux size = '38%'/>
    else if(tag === 'Windows')
        return <DiWindows size = '70%'/>
    else if(tag === 'VS code')
        return <SiVisualstudiocode size = '70%' color = '#2174B3'/>
    // else if(tag === 'C')
    //     return <DiJava size = '38%' color = '#E06C00'/>
    else if(tag === 'ExpressJS')
        return <FaNodeJs size = '70%' color = '#E06C00'/>
    return <SiRedux size = '70%'/>
    
   
}
export default TechIcons;