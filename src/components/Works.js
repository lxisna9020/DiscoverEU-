import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { worksData } from "../data/worksData"

const Works = ({ heading, subHeading }) => {
  const data = useStaticQuery(graphql`
    query WorksQuery {
      allDataJson {
        edges {
          node {
            works {
              number
              description
              img {
                childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 400) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  function getColorForNumber(index) {
    switch (index) {
      case 0:
        return "#FED05C"
      case 1:
        return "#04c9a6"
      case 2:
        return "#e47225"
      case 3:
        return "#84DCFD"
    }
  }

  function showWorks(data) {
    const worksArray = []
    let works = data.allDataJson.edges[0].node.works

    works.forEach((item, index) => {
      console.log(item.img?.childImageSharp.fluid)
      worksArray.push(
        <Card key={item.alt}>
          {item.img?.childImageSharp && (
            <ShowImg
              src={item.img?.childImageSharp.fluid.src}
              fluid={item.img?.childImageSharp.fluid}
            />
          )}

          <Number color={getColorForNumber(index)}>{item.number}</Number>
          <Description>{item.description}</Description>
        </Card>
      )
    })
    return worksArray
  }

  return (
    <WorksContainer>
      <PartnersWrapper>
        <PartnersP>Our partners include:</PartnersP>
        <PartnersImgWrap>
          {worksData.map((item, index) => (
            <PartnersImg src={item.img} key={index} />
          ))}
        </PartnersImgWrap>
      </PartnersWrapper>

      <WorksHeading>{heading}</WorksHeading>
      <WorksP>{subHeading}</WorksP>

      <WorksWrapper>{showWorks(data)}</WorksWrapper>
    </WorksContainer>
  )
}
export default Works

const WorksContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 5% 2rem 5%;
`

const PartnersWrapper = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr;
    padding-bottom: 2rem;
  }

  @media screen and (max-width: 500px) {
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr;
    padding-bottom: 2rem;
  }
`
const PartnersP = styled.div`
  text-align: start;
  white-space: nowrap;
  color: #077bf1;
  padding: 0.3rem 1rem;
  margin-bottom: 3rem;
  background-image: linear-gradient(
    to top,
    #d5d4d0 0%,
    #d5d4d0 1%,
    #eeeeec 31%,
    #efeeec 75%,
    #e9e9e7 100%
  );
`
const PartnersImgWrap = styled.div`
  display: flex;
  gap: 0.1rem;
  height: 2rem;
  width: 100%;
  justify-content: space-evenly;
`

const PartnersImg = styled.img`
  border-radius: 10px;
  align-self: center;
  height: 100%;
`

const WorksHeading = styled.div`
  text-align: center;
  font-size: clamp(1.2rem, 5vw, 3rem);
  padding: 0 2rem;
  margin-bottom: 3rem;
  padding: 0 10%;
`

const WorksP = styled.p`
  font-size: clamp(1.2rem, 5vw, 1.2rem);
  text-align: center;
  margin-bottom: 3rem;
  color: #000;
  padding: 0 10%;
`
const WorksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  padding: 0 10%;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`
const ShowImg = styled(Img)`
  marging-bottom: 1rem;
  object-fit: contain;
  width: 100px;
  height: 100px;
`

const Number = styled.div`
  width: 100px;
  text-align: center;
  font-size: clamp(1rem, 2.5vw, 2rem);
  margin-bottom: 0.5rem;
  color: ${props => props.color};
`
const Description = styled.p`
  width: 100px;
  height: 100px;
  font-size: 1rem;
  text-align: center;
`
