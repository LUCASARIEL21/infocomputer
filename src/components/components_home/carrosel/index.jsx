import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'

export const Carrosel = () => {
  return (
    <div>
      <Carousel fade>
          <Carousel.Item interval={2500} 
          style={{alignItems: "center", justifyContent: "center"}}>
            <img 
            src="https://images6.alphacoders.com/456/456498.jpg" 
            alt="Image PC"
            height={500} 
            width={"100%"} />
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img src="https://geekblog.com.br/wp-content/uploads/2018/09/cross-play-cross-platform-multiplataforma-xbox-ps-nintendo-pc.jpg"
            alt="Image games"
            height={500} 
            width={"100%"} />
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img src="https://www.teahub.io/photos/full/175-1752155_77-stream-wallpapers-aljanh-video-streaming.jpg" 
            alt="Image streaming"
            height={500} 
            width={"100%"} />
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img src="https://t2.tudocdn.net/606067?w=1200&h=1200" 
            alt="Image celulares"
            height={500} 
            width={"100%"} />
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img src="https://www.chaoticonline.ml/assets/images/videos/trivias.jpg" 
            alt="Image outros"
            height={500} 
            width={"100%"} />
          </Carousel.Item>               
        </Carousel>
    </div>
  )
}