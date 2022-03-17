import React from 'react';
import { DiReact, DiFirebase,DiMongodb, DiNodejs, DiCss3, DiJavascript } from 'react-icons/di';
import { CardInfo, ExternalLinks,  HeaderThree, HeaderTwo, Hr, Tag, TagList, TitleContent, UtilityList, Img, GridContainerEx, BlogCardEx, CardInfoEx } from '../Projects/ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Education = () => (
  <Section nopadding id = 'education'>
    <SectionDivider />
    <br />
    <SectionTitle>Education</SectionTitle>
   
    <GridContainerEx>
      {/* {projects.map((project) => ( */}
        <BlogCardEx >
          {/* <Img src = {project.image} /> */}
          <TitleContent>
            <HeaderThree title>Masai School</HeaderThree>
            <HeaderTwo title>-Full stack web development course</HeaderTwo>
            <HeaderTwo title>-April 2021 - Present </HeaderTwo>

            <Hr />
          </TitleContent>
          <CardInfoEx>After having a sound understanding of Computer languages like C/Java/JS/CSS/HTML/React, Data Structures and Algorithms, I decided to get hands-on experience in developing and deploying some real time projects, So as a career field I choose to be MERN|Full Stack Developer and Currently I am enjoying the same journey of developing and deploying out of what I do possess.</CardInfoEx>
          <br/>
          <div>
            <TitleContent>Technology Learning</TitleContent>
            <TagList>
              {/* {project.tags.map((tag, i) => { */}
                <div style = {{textAlign:'center'}}>
                  {/* <TechIcons tag = 'ReactJS' /> */}
                  <div>ReactJS</div>
                </div>
                <div style = {{textAlign:'center'}}>
                  {/* <TechIcons tag = 'JavaScript' /> */}
                  <div>JavaScript</div>
                </div>
                <div style = {{textAlign:'center'}}>
                  {/* <TechIcons tag = 'JavaScript' /> */}
                  <div>Django</div>
                </div>
                <div style = {{textAlign:'center'}}>
                  {/* <TechIcons tag = 'JavaScript' /> */}
                  <div>Python</div>
                </div>
                <div style = {{textAlign:'center'}}>
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
            <HeaderThree title>Jawaharlal Nehru Engineering College Aurangabad, Maharastra</HeaderThree>
            <HeaderTwo title>-Bachelor of Science in Computer Science and Engineering</HeaderTwo>
            <HeaderTwo title>-Sept 2017 - Sept 2021</HeaderTwo>
            <HeaderTwo title>-8.6 CGPA</HeaderTwo>

            <Hr />
          </TitleContent>
          <CardInfoEx> From early school days, I had a fascination with Computers, Smartphones and Internet especially how these things work. This lead me to pursue my graduation in Computer Science and Engineering.</CardInfoEx>
          <br/>
          
          {/* <UtilityList>
            <ExternalLinks href = {project.visit} target = '_blank'>VISIT</ExternalLinks>
            <ExternalLinks href = {project.source} target = '_blank'>CODE</ExternalLinks>
          </UtilityList> */}
        </BlogCardEx>

          {/* <UtilityList>
            <ExternalLinks href = {project.visit} target = '_blank'>VISIT</ExternalLinks>
            <ExternalLinks href = {project.source} target = '_blank'>CODE</ExternalLinks>
          </UtilityList> */}
        <BlogCardEx >
                {/* <Img src = {project.image} /> */}
                <TitleContent>
                    <HeaderThree title>Saraswati Bhuvan Education Society Aurangabad, Maharastra</HeaderThree>
                    <HeaderTwo title>-HSC with Science Major</HeaderTwo>
                    <HeaderTwo title>-2016-2017</HeaderTwo>
                    <HeaderTwo title>-66 %</HeaderTwo>

                    <Hr />
                </TitleContent>
                {/* <CardInfo> From early school days, I had a fascination with Computers, Smartphones and Internet especially how these things work. This lead me to pursue my graduation in Computer Science and Engineering.</CardInfo> */}
                <br/>
                
                {/* <UtilityList>
                    <ExternalLinks href = {project.visit} target = '_blank'>VISIT</ExternalLinks>
                    <ExternalLinks href = {project.source} target = '_blank'>CODE</ExternalLinks>
                </UtilityList> */}
        </BlogCardEx>
      {/* ))} */}
    </GridContainerEx>
  </Section>
);

export default Education;