import { Dialog } from "@mui/material";
import * as S from "./style";

export const Card2 = ({ closeModal, modal }) => {
  return (
    <Dialog
      open={modal}
      onClose={() => closeModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      maxWidth="lg"
    >
      <S.div>
        <S.buttonS onClick={() => closeModal(false)}>X</S.buttonS>
        <S.container>
          CELULARES QUE POSSUEM O SISTEMA OPERACIONAL ANDROID
          <img src="https://avatars.mds.yandex.net/i?id=4e134984d293850eb4216cc4e2bb5680a8039db5-6960551-images-thumbs&n=13&exp=1" />
          <br />
          Existem muitos smartphones no mercado que utilizam o sistema
          operacional Android, que é desenvolvido pelo Google. Abaixo, vou citar
          alguns dos celulares mais populares que rodam o sistema operacional
          Android e dar um breve resumo sobre cada um deles:
          <br />
          1. Samsung Galaxy S21: O Samsung Galaxy S21 é um dos smartphones mais
          recentes da Samsung e possui uma tela AMOLED de 6,2 polegadas, um
          processador Exynos 2100 e 8 GB de RAM. Ele também possui uma câmera
          traseira de 12 MP e uma bateria de 4.000 mAh.
          <br />
          2. Xiaomi Mi 11: O Xiaomi Mi 11 é um smartphone Android recente que
          possui uma tela AMOLED de 6,81 polegadas, um processador Qualcomm
          Snapdragon 888 e 8 GB de RAM. Ele também possui uma câmera traseira
          tripla de 108 MP e uma bateria de 4.600 mAh.
          <br />
          3. Google Pixel 5: O Google Pixel 5 é um smartphone Android
          desenvolvido pela própria Google. Ele possui uma tela OLED de 6
          polegadas, um processador Qualcomm Snapdragon 765G e 8 GB de RAM. O
          Pixel 5 também possui uma câmera traseira dupla de 12,2 MP e uma
          bateria de 4.080 mAh.
          <br />
          4. Samsung Galaxy Note 20 Ultra: O Samsung Galaxy Note 20 Ultra é um
          smartphone Android com uma tela AMOLED de 6,9 polegadas, um
          processador Exynos 990 e 12 GB de RAM. Ele possui uma câmera traseira
          tripla de 108 MP e uma bateria de 4.500 mAh.
          <br />
          5. OnePlus 9 Pro: O OnePlus 9 Pro é um smartphone Android com uma tela
          AMOLED de 6,7 polegadas, um processador Qualcomm Snapdragon 888 e 12
          GB de RAM. Ele possui uma câmera traseira tripla de 48 MP e uma
          bateria de 4.500 mAh.
          <br />
          6. Motorola Moto G Power (2021): O Motorola Moto G Power (2021) é um
          smartphone Android com uma tela LCD de 6,6 polegadas, um processador
          Qualcomm Snapdragon 662 e 4 GB de RAM. Ele possui uma câmera traseira
          tripla de 48 MP e uma bateria de 5.000 mAh.
          <br />
          Esses são apenas alguns exemplos de smartphones Android populares.
          Cada um deles tem suas próprias especificações, recursos e vantagens,
          e a escolha do melhor celular dependerá das necessidades e
          preferências individuais do usuário.
        </S.container>
      </S.div>
    </Dialog>
  );
};
