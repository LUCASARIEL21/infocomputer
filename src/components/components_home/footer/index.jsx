import linkedin from '../../../assets/linkedin.svg'
import insta from '../../../assets/insta.svg'
import * as S from "./styles"

export const Footer = () => {
  return (
    <S.div>
      <br/>
      <S.tittle>Entre em contato através das redes socias:</S.tittle>
        <S.sociais>
          <a href="https://www.linkedin.com/in/lucas-ariel-0ab3721ba/"><img src={linkedin} alt="Icon" height={30} width={30}/></a>
          <a href="https://www.instagram.com/lucas_arielfran/?hl=el"><img src={insta} alt="Icon" height={30} width={30}/></a>
        </S.sociais>
      <S.txt>Copyright 2022. All Rights Reserved</S.txt>
      <br/>
    </S.div>
  )
}