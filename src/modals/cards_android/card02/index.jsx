import { Dialog } from "@mui/material"
import * as S from "./style"

export const Card2 = ({ closeModal, modal }) => {
  return (
    <Dialog
      open={modal}
      onClose={() => closeModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.div>
        <S.buttonS onClick={() => closeModal(false)}>X</S.buttonS>
        <S.container>
          CELULARES QUE POSSUEM O SISTEMA OPERACIONAL ANDROID
          <br />
          Existem muitos celulares que possuem o sistema operacional Android, alguns dos mais populares incluem:
          <br/>
          <img src="https://images.kaina24.lt/43/39/samsung-galaxy-s21-fe.jpg"/>
          Samsung Galaxy S21
          <img src="https://pbs.twimg.com/media/E73in-zVIAMdPQO.jpg"/>
          Google Pixel 6
          <img src="https://cdn.siasat.com/wp-content/uploads/2021/03/OnePlus-9.jpg"/>
          OnePlus 9
          <img src="https://www.teknogaste.com/wp-content/uploads/xiaomi-mi-11-modelinden-onemli-basari.jpg"/>
          Xiaomi Mi 11
          <img src="https://st1.latestly.com/wp-content/uploads/2021/11/resize-9-20.jpg"/>
          Motorola Moto G Power (2022)
          <img src="https://technoingg.com/wp-content/uploads/2021/04/xperia-1-iii.jpg"/>
          Sony Xperia 5 III
          <img src="https://welectronics.com/images/stories/virtuemart/product/LGVelvet5gpink58.jpg"/>
          LG Velvet
          <img src="https://persiadigest.com/wp-content/uploads/2021/04/1617999284_SFR-Promotion-Refunds-of-up-to-100-E-for-OPPO.jpg"/>
          Oppo Find X3 Pro
          <img src="https://cdn.dxomark.com/wp-content/uploads/medias/post-111577/Realme-GT-Neo-3_Yoast-image-packshot-review-Recovered.jpg"/>
          Realme GT
          <img src="https://teknodaim.com/wp-content/uploads/2021/08/ROG-Phone-5s.jpg"/>
          Asus ROG Phone 5
          <br/>
          Esses são apenas alguns exemplos, existem muitos outros modelos de celulares que utilizam o sistema operacional Android. Além disso, muitas marcas menores também fabricam dispositivos que rodam o Android.
        </S.container>
      </S.div >
    </Dialog>
  )
}