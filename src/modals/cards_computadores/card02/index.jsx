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
          Definição de um computador
          <img src="https://www.tekportal.net/wp-content/uploads/2019/02/battle-station-2191.jpg" />
          <br />
          Um computador é uma máquina eletrônica programável que processa dados
          e informações digitais, executando operações lógicas e aritméticas.
          Ele é capaz de realizar uma ampla variedade de tarefas, desde simples
          cálculos matemáticos até complexos processamentos de dados, além de
          permitir a criação e manipulação de arquivos digitais como textos,
          imagens e vídeos. Os computadores consistem em diversos componentes,
          como processador, memória, dispositivos de armazenamento, placa-mãe,
          periféricos de entrada e saída, entre outros. Eles podem ser
          utilizados para fins pessoais, profissionais, educacionais,
          científicos, entre outros, e sua popularidade crescente tem
          transformado a forma como as pessoas se comunicam, trabalham e se
          relacionam em todo o mundo.
          <br />
          Os computadores podem ser divididos em diversas categorias, desde
          desktops e laptops até servidores e supercomputadores, cada um com
          suas características específicas e usos mais indicados. Além disso,
          eles podem rodar diferentes sistemas operacionais, como Windows,
          MacOS, Linux, entre outros, que são responsáveis por gerenciar os
          recursos do computador e permitir a execução de programas e
          aplicativos.
          <br />
          Com o avanço da tecnologia, os computadores têm se tornado cada vez
          mais rápidos, eficientes e portáteis, permitindo que as pessoas
          realizem suas atividades de forma mais produtiva e conveniente. Eles
          são utilizados em diversas áreas, como comércio, educação, saúde,
          engenharia, ciência, entre outras, e têm revolucionado a forma como as
          empresas e as pessoas interagem com o mundo digital.
          <br />
          No entanto, é importante destacar que os computadores também
          apresentam desafios em termos de segurança, privacidade e vício em
          tecnologia, exigindo que os usuários estejam sempre atentos e
          conscientes do uso que fazem dessas ferramentas.
        </S.container>
      </S.div>
    </Dialog>
  );
};
