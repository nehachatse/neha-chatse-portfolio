import React from 'react';
import { DiReact, DiFirebase,DiMongodb, DiNodejs, DiCss3, DiJavascript } from 'react-icons/di';
import { CardInfo, ExternalLinks,  HeaderThree, HeaderTwo, Hr, Tag, TagList, TitleContent, UtilityList, Img, GridContainerEx, BlogCardEx, CardInfoEx } from '../Projects/ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
// import { projects } from '../../constants/constants';
// import TechIcons from './TechIcons'
const Experience = () => (
  <Section nopadding id = 'experience'>
    <SectionDivider />
    <br />
    <SectionTitle>Experience</SectionTitle>
   
    <GridContainerEx>
      {/* {projects.map((project) => ( */}
        <BlogCardEx >
          {/* <Img src = {project.image} /> */}
          <TitleContent>
            <HeaderThree title>Datametica Solutions</HeaderThree>
            <HeaderTwo title>-Associate Engineer-I</HeaderTwo>
            <HeaderTwo title>-August 2021 - Present </HeaderTwo>

            <Hr />
          </TitleContent>
          <CardInfoEx>In Datametica, I'm Leading UI design for the company's major project and 
                    Handling UI and backend connectivity.</CardInfoEx>
          <br/>
          <div>
            <TitleContent>Technology Used</TitleContent>
            <TagList>
              {/* {project.tags.map((tag, i) => { */}
                <div style = {{textAlign:'center', flexBasis: '19%', marginRight: '1%'}}>
                  {/* <TechIcons tag = 'ReactJS' /> */}
                  <div>ReactJS</div>
                </div>
                <div style = {{textAlign:'center', flexBasis: '19%', marginRight: '1%'}}>
                  {/* <TechIcons tag = 'JavaScript' /> */}
                  <div>JavaScript</div>
                </div>
                <div style = {{textAlign:'center', flexBasis: '19%', marginRight: '1%'}}>
                  {/* <TechIcons tag = 'JavaScript' /> */}
                  <div>Django</div>
                </div>
                <div style = {{textAlign:'center' , flexBasis: '19%', marginRight: '1%'}}>
                  {/* <TechIcons tag = 'JavaScript' /> */}
                  <div>Python</div>
                </div>
                <div style = {{textAlign:'center', flexBasis: '19%', marginRight: '1%'}}>
                  {/* <TechIcons tag = 'JavaScript' /> */}
                  <div>Unix</div>
                </div>
                
              {/* })} */}
            </TagList>
          </div>
          {/* <UtilityList>
            <ExternalLinks href = {project.visit} target = '_blank'>VISIT</ExternalLinks>
            <ExternalLinks href = {project.source} target = '_blank'>CODE</ExternalLinks>
          </UtilityList> */}
        </BlogCardEx>

        <BlogCardEx >
          {/* <Img src = {project.image} /> */}
          <TitleContent>
            <HeaderThree title>Cynosure SoftTech</HeaderThree>
            <HeaderTwo title>-Product development Intern</HeaderTwo>
            <HeaderTwo title>-January 2021 - July 2021</HeaderTwo>

            <Hr />
          </TitleContent>
          <CardInfoEx> Worked on the product 'EcoKrypt - Knowledge Sharing Platform'.
                    And also Supported team with other tasks.</CardInfoEx>
          <br/>
          <div>
            <TitleContent>Technology Used</TitleContent>
            <TagList>
              {/* {project.tags.map((tag, i) => { */}
                <div style = {{textAlign:'center', flexBasis: '19%', marginRight: '1%'}}>
                  {/* <TechIcons tag = 'ReactJS' /> */}
                  <div>Django</div>
                </div>
                <div style = {{textAlign:'center', flexBasis: '19%', marginRight: '1%'}}>
                  {/* <TechIcons tag = 'JavaScript' /> */}
                  <div>Angular 10</div>
                </div>
                <div style = {{textAlign:'center', flexBasis: '19%', marginRight: '1%'}}>
                  {/* <TechIcons tag = 'JavaScript' /> */}
                  <div>Spring Boot</div>
                </div>
                <div style = {{textAlign:'center', flexBasis: '19%', marginRight: '1%'}}>
                  {/* <TechIcons tag = 'JavaScript' /> */}
                  <div> MongoDB</div>
                </div>
                <div style = {{textAlign:'center', flexBasis: '19%', marginRight: '1%'}}>
                  {/* <TechIcons tag = 'JavaScript' /> */}
                  <div>IntelliJ IDEA CE</div>
                </div>
                
              {/* })} */}
            </TagList>
          </div>
          {/* <UtilityList>
            <ExternalLinks href = {project.visit} target = '_blank'>VISIT</ExternalLinks>
            <ExternalLinks href = {project.source} target = '_blank'>CODE</ExternalLinks>
          </UtilityList> */}
        </BlogCardEx>
      {/* ))} */}
    </GridContainerEx>
  </Section>
);

export default Experience;