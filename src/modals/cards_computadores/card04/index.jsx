import { Dialog } from "@mui/material";
import * as S from "./style";

export const Card4 = ({ closeModal, modal }) => {
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
          Como montar um PC do zero
          <img src="https://avatars.mds.yandex.net/i?id=db9a281047b42e6a3e42606f8bdbc789-5360371-images-thumbs&n=13&exp=1" />
          <br />
          Montar um PC do zero pode ser um processo desafiador, mas é uma ótima
          maneira de personalizar seu computador e obter um desempenho otimizado
          para suas necessidades. Abaixo estão os passos gerais para montar um
          PC do zero:
          <br />
          1. Escolha as peças: o primeiro passo é escolher as peças que você
          precisa para montar seu PC. Isso inclui a placa-mãe, processador,
          memória RAM, placa de vídeo, fonte de alimentação, disco rígido ou
          SSD, além de outros componentes, como cooler, gabinete e periféricos.
          <br />
          2. Verifique a compatibilidade: certifique-se de que todas as peças
          escolhidas são compatíveis entre si. Por exemplo, a placa-mãe deve ser
          compatível com o processador escolhido e a memória RAM deve ser
          compatível com a placa-mãe.
          <br />
          3. Monte o hardware: comece montando a placa-mãe no gabinete e
          instalando o processador, cooler e memória RAM. Em seguida, adicione a
          placa de vídeo, disco rígido ou SSD, e a fonte de alimentação. Conecte
          todos os cabos e verifique se tudo está firme e seguro.
          <br />
          4. Instale o sistema operacional: uma vez que o hardware está montado,
          você precisará instalar um sistema operacional para começar a usar seu
          computador. Isso pode ser feito a partir de um DVD ou USB com o
          sistema operacional ou através de uma instalação on-line.
          <br />
          5. Atualize drivers e software: depois de instalar o sistema
          operacional, certifique-se de atualizar todos os drivers e software
          para garantir um desempenho otimizado e correções de segurança.
          <br />
          6. Teste o desempenho: por fim, teste o desempenho do seu novo
          computador, verificando o desempenho da CPU, da placa gráfica e da
          memória RAM através de aplicativos de benchmark.
          <br />
          Lembre-se de sempre seguir as instruções do manual do usuário de cada
          componente e tomar cuidado ao manusear as peças. Também é recomendado
          pesquisar tutoriais on-line e vídeos para ajudar na montagem do PC.
        </S.container>
      </S.div>
    </Dialog>
  );
};
