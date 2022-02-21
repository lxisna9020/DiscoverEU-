import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "./Button"
import { ImLocation2 } from "react-icons/im"
import "../styles/index.css"

const Trips = React.forwardRef(({ heading, subHeading }, ref) => {
  const data = useStaticQuery(graphql`
    query TripsQuery {
      allDataJson {
        edges {
          node {
            trips {
              name
              button
              alt
              slug
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 500, maxHeight: 650) {
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

  // 编写一个function把上面这些数据传到页面上去

  function showTrips(data) {
    const tripsArray = []
    let trips = data.allDataJson.edges[0].node.trips

    trips.forEach(item => {
      let thumbnail = item?.thumbnail

      tripsArray.push(
        <Card key={item.alt}>
          {thumbnail?.childImageSharp && (
            <ShowImg
              src={thumbnail?.childImageSharp?.fluid.src}
              alt={item.alt}
              fluid={thumbnail?.childImageSharp?.fluid}
            />
          )}

          <DestiInfo>
            <TextWrap>
              <ImLocation2 id="tripsLocIcone" />
              <DestiName>{item.name}</DestiName>
            </TextWrap>
            <Button
              id="destibtn"
              primary="true"
              round="true"
              to={`/trips/${item.slug}`}
            >
              {item.button}
            </Button>
          </DestiInfo>
        </Card>
      )
    })

    return tripsArray
  }

  return (
    <div ref={ref}>
      <DestiContainer>
        <DestiHeading>{heading}</DestiHeading>
        <DestiP>{subHeading}</DestiP>
        <DestiWrapper>{showTrips(data)}</DestiWrapper>
      </DestiContainer>
    </div>
  )
})

export default Trips

const DestiContainer = styled.div`
  min-height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  background-image: linear-gradient(
    to top,
    #d5d4d0 0%,
    #d5d4d0 1%,
    #eeeeec 31%,
    #efeeec 75%,
    #e9e9e7 100%
  );
  border-top: 1px solid #ccc;
`
const DestiHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
  color: #000;
`

const DestiP = styled.p`
  font-size: clamp(1.2rem, 5vw, 1.2rem);
  text-align: center;
  margin-bottom: 2rem;
  color: #000;
`

//DestiWrapper是整个板块的布局
//grid-gap 图片之间的空隙
const DestiWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-item: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s case;
`
const ShowImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: absolute;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075.0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const DestiInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    flex-direction: column;
  }
`

//坐标.字体样式的位置.边框距设置
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`
//字体样式设置
const DestiName = styled.div`
  font-weight: 400;
  font-size: 1.3rem;
  marging-left: 0.5rem;
  color: #fff;
`
