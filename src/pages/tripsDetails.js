import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import "../styles/index.css"
import Layout from "../components/layout"

const tripsDetails = props => {
  const item = props.pageContext.trip

  console.log(item)
  return (
    <Layout>
      <Card>
        <Images>
          {item?.images?.map(img => (
            <ShowImg
              key={item.alt}
              alt={item.alt}
              fluid={img?.childImageSharp?.fluid}
            />
          ))}
        </Images>
        <DestiInfoH>{item.title}</DestiInfoH>
        <DestiInfo>{item.description}</DestiInfo>
        <DestiInfoh>{item.title1}</DestiInfoh>
        <DestiInfoh>{item.title2}</DestiInfoh>
        <DestiInfo>{item.description1}</DestiInfo>
        <DestiInfoh>{item.title3}</DestiInfoh>
        <DestiInfo>{item.description2}</DestiInfo>
        <DestiInfoh>{item.title4}</DestiInfoh>
        <DestiInfo>{item.description3}</DestiInfo>
        <DestiInfoh>{item.title5}</DestiInfoh>
        <DestiInfo>{item.description4}</DestiInfo>
        <DestiInfo>{item.description5}</DestiInfo>
      </Card>
    </Layout>
  )
}

export default tripsDetails

const Card = styled.div`
  line-height: 2;
  width: 100vw;
  border-radius: 10px 10px 0 0;
  transition: 0.2s case;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  display: flex;
  flex-direction: column;

  :before {
    width: 100vw;
    height: 12vh;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: #C9CCD3;
    background-image: linear-gradient(to right, #f9d423 0%, #ff4e50 100%);
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 50%);
  }
  padding-top: 2rem;
`

const Images = styled.div`
  width: 100vw;
  height: 50vh;
  border-radius: 10px 10px 0 0;
  transition: 0.2s case;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  outline: inset;

  @media screen and(max-width:768px) {
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr;
    padding-bottom: 2rem;
  }
`
const ShowImg = styled(Img)`
  height: 100%;
  width: 100%;
  padding:1rem
  filter: brightness(100%);
  transition: 0.4s cubic-bezier(0.075.0.82, 0.165, 1);
  outline: inset;
`

const DestiInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 400;
  font-size: 1rem;
  marging-left: 0.5rem;
  padding: 0.5rem 2rem;

  @media screen and (max-width: 280px) {
    flex-direction: column;
  }
`
const DestiInfoH = styled.div`
  font-size: clamp(1rem, 3vw, 1.3rem);
  padding: 0 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
`
const DestiInfoh = styled.div`
  font-size: clamp(1rem, 3vw, 1.3rem);
  padding: 0 2rem;
  font-weight: bold;
`
