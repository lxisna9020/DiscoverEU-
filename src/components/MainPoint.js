import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import Video from "../assets/beach.mp4"

const MainPoint = () => {
  return (
    <MainPointContainer>
      <MainPointBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </MainPointBg>
      <MainPointContent>
        <MainPointItems>
          <MainPointH1>Discover EU</MainPointH1>
          <MainPointP>
            EXPLORE INCREDIBLE DESTINATIONS
            <MainPointP>AND PLAY YOUR VACATION NOW.</MainPointP>
          </MainPointP>
          <Button primary="true" round="true" to="/tripsForm">
            TELL US ABOUT YOUR NEXT TRIP
          </Button>
        </MainPointItems>
      </MainPointContent>
    </MainPointContainer>
  )
}

export default MainPoint

const MainPointContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
` // ：before 这里是给背景叠加一层暗灰色
// 180deg 从下至上
// 用px或百分比指定起始颜色的位置, 默认值为0%

const MainPointBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  objet-fit: cover;
`

const MainPointContent = styled.div`
  z-index: 3;
  height: calc(100vh -80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`

// line-height 行高
const MainPointItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 200%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`

const MainPointH1 = styled.h1`
  font-family: "Brush Script MT", cursive;
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 4px;
  font-weight: bold;
  padding: 0 1rem;
`

const MainPointP = styled.p`
  font-family: Courier New, monospace;
  font-size: clamp(1rem, 3vw, 1rem);
  margin-bottom: 2rem;
  font-weight: 200;
`
