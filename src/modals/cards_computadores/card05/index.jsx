import { Dialog } from "@mui/material";
import * as S from "./style";

export const Card5 = ({ closeModal, modal }) => {
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
          Melhores acessorios para seu PC
          <img src="https://mms.businesswire.com/media/20190314005137/en/710460/5/JZqvBBte.jpg" />
          <br />
          Existem vários acessórios que podem melhorar a experiência do usuário
          e o desempenho do seu PC. Abaixo estão alguns dos melhores acessórios
          para um PC:
          <br />
          1. Caixas de som ou fones de ouvido: um bom sistema de som pode
          melhorar a qualidade de áudio durante jogos ou reprodução de mídia.
          Fones de ouvido também são uma opção para uso pessoal ou para jogos
          online, oferecendo maior privacidade e imersão.
          <br />
          2. HD externo ou SSD: um HD externo ou SSD pode ser uma excelente
          opção para armazenamento adicional de arquivos, fotos, vídeos e outros
          dados.
          <br />
          3. Webcam: uma webcam pode ser útil para videochamadas, streaming ou
          criação de conteúdo de vídeo.
          <br />
          4. Cabos e adaptadores: cabos HDMI, USB, Ethernet e adaptadores podem
          ser necessários para conectar periféricos adicionais ou monitores ao
          seu PC.
          <br />
          5. UPS (Uninterruptible Power Supply): um UPS pode ser uma excelente
          opção para proteger o seu PC contra falhas de energia e proteger seus
          dados.
          <br />
          6. Joystick ou gamepad: para jogadores de jogos de PC, um joystick ou
          gamepad pode ser uma excelente opção para jogos que exigem controle de
          direção, como corridas ou jogos de luta.
          <br />
          7. Mesa digitalizadora: para artistas digitais ou designers gráficos,
          uma mesa digitalizadora pode ser uma excelente opção para desenhar e
          criar ilustrações diretamente no computador.
          <br />
          8. Adaptador Wi-Fi: se o seu PC não tem uma placa Wi-Fi integrada, um
          adaptador Wi-Fi pode ser uma opção para conectividade sem fio.
          <br />
          9. Docking station: uma docking station pode ser uma excelente opção
          para aqueles que precisam conectar múltiplos monitores, dispositivos
          de armazenamento e outros periféricos ao PC.
          <br />
          Esses são apenas alguns dos acessórios disponíveis para melhorar a
          experiência e o desempenho do seu PC. Em geral, a escolha dos
          acessórios dependerá do uso individual do PC e das necessidades
          específicas de cada usuário. Certifique-se de pesquisar bem antes de
          comprar qualquer acessório e verificar se ele é compatível com o seu
          PC.
        </S.container>
      </S.div>
    </Dialog>
  );
};
