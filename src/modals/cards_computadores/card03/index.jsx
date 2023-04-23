import { Dialog } from "@mui/material";
import * as S from "./style";

export const Card3 = ({ closeModal, modal }) => {
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
          Informações sobre o imac
          <img src="https://3.bp.blogspot.com/-XOFtvYxF9vw/WqZqVR8RV9I/AAAAAAAAI9g/5xSLVNaoZUwepXYElQrWHFHVGnIc5s6lACK4BGAYYCw/s1600/jan-traid-364528-unsplash.jpg" />
          <br />
          O iMac é um computador all-in-one produzido pela empresa americana
          Apple. Ele foi lançado em 1998 e é conhecido por sua elegância e
          desempenho de alta qualidade, além de contar com o sistema operacional
          MacOS.
          <br />
          O iMac possui uma tela de alta resolução integrada ao computador,
          eliminando a necessidade de um monitor externo. Ele é equipado com
          processadores Intel ou Apple M1, além de uma variedade de
          configurações de memória RAM e armazenamento SSD. Alguns modelos
          também incluem placas gráficas dedicadas para melhor desempenho em
          tarefas mais exigentes, como edição de vídeo e jogos.
          <br />
          Além disso, o iMac possui uma variedade de portas e conectividade,
          incluindo entradas USB-C, Thunderbolt e Ethernet. Alguns modelos
          também contam com uma câmera integrada de alta definição,
          alto-falantes e microfones embutidos, além de opções de conectividade
          Wi-Fi e Bluetooth.
          <br />
          O iMac é frequentemente escolhido por profissionais criativos, como
          designers, fotógrafos e editores de vídeo, devido ao seu desempenho de
          alta qualidade e sua tela de alta resolução. Ele também é uma opção
          popular para uso doméstico, como navegação na web, reprodução de mídia
          e realização de tarefas básicas de escritório.
          <br />
          Os modelos mais recentes do iMac possuem um design mais fino e
          moderno, com telas Retina de alta resolução e processadores Apple M1,
          que oferecem maior desempenho e eficiência energética. O iMac também é
          conhecido por sua facilidade de uso e integração com outros
          dispositivos da Apple, como iPhones e iPads.
        </S.container>
      </S.div>
    </Dialog>
  );
};
