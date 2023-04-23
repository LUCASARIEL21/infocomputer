import { Dialog } from "@mui/material";
import * as S from "./style";

export const Card6 = ({ closeModal, modal }) => {
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
          Placas de video
          <img src="https://i.pinimg.com/originals/36/ad/ef/36adef5783c88c79e01d16c519f4c0c6.jpg" />
          <br />
          As placas de vídeo são componentes de hardware do computador
          responsáveis por processar e exibir imagens no monitor. Elas possuem
          processadores gráficos (GPU) que permitem que o computador execute
          tarefas relacionadas a gráficos, como jogos, edição de vídeo e
          modelagem 3D, de maneira mais eficiente.
          <br />
          Existem diversas marcas e modelos de placas de vídeo no mercado, mas
          as mais populares são as fabricadas pela Nvidia e pela AMD. Alguns dos
          modelos mais populares incluem:
          <br />
          1. Nvidia GeForce RTX 3080: uma das mais recentes e poderosas placas
          de vídeo da Nvidia, a GeForce RTX 3080 é ideal para jogos de última
          geração e aplicações de alta performance em geral.
          <br />
          2. Nvidia GeForce GTX 1660 Super: um modelo mais acessível da Nvidia,
          a GeForce GTX 1660 Super oferece bom desempenho em jogos e aplicações
          mais leves.
          <br />
          3. AMD Radeon RX 6800 XT: um dos modelos mais recentes da AMD, a
          Radeon RX 6800 XT é uma placa de vídeo de alta performance para jogos
          e aplicações de computação intensiva.
          <br />
          4. AMD Radeon RX 580: uma opção mais acessível da AMD, a Radeon RX 580
          é uma placa de vídeo que oferece bom desempenho em jogos e aplicações
          de edição de vídeo.
          <br />
          5. Nvidia GeForce GTX 1050 Ti: uma das opções mais populares para
          jogadores em um orçamento, a GeForce GTX 1050 Ti oferece bom
          desempenho em jogos mais antigos ou menos exigentes.
          <br />
          6. Nvidia Quadro RTX 4000: uma placa de vídeo voltada para
          profissionais de design gráfico e edição de vídeo, a Quadro RTX 4000 é
          ideal para aplicações de renderização 3D e simulações.
          <br />
          Esses são apenas alguns exemplos de placas de vídeo populares, mas
          existem muitas outras opções disponíveis no mercado para atender às
          necessidades individuais de cada usuário. É importante escolher uma
          placa de vídeo que atenda às necessidades específicas de cada usuário,
          considerando o orçamento, o uso pretendido e a compatibilidade com o
          restante do sistema do computador.
        </S.container>
      </S.div>
    </Dialog>
  );
};
