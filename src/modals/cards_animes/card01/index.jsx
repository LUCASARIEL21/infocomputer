import { Dialog } from "@mui/material";
import * as S from "./style";

export const Card1 = ({ closeModal, modal }) => {
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
          Cruchyroll
          <img src="https://www.thunderwave.com.br/wp-content/uploads/2022/07/Crunchyroll.png" />
          <br />
          A Crunchyroll é uma plataforma de streaming de anime e conteúdo
          asiático. Foi fundada em 2006 e se tornou uma das maiores e mais
          populares plataformas dedicadas ao anime em todo o mundo. A empresa
          oferece uma ampla variedade de séries de anime, filmes, dramas
          coreanos e programas de TV asiáticos para seus assinantes.
          <br />
          A principal atração da Crunchyroll é seu extenso catálogo de anime.
          Eles licenciam séries populares do Japão e disponibilizam os episódios
          para transmissão em seu serviço logo após a exibição no Japão. Os fãs
          de anime podem encontrar uma ampla gama de gêneros, incluindo ação,
          romance, fantasia, comédia, horror e muito mais. Além disso, a
          Crunchyroll também oferece uma seleção de anime clássico para os fãs
          que desejam revisitar ou descobrir séries mais antigas.
          <br />
          A Crunchyroll possui uma comunidade ativa de fãs e oferece recursos
          adicionais, como fóruns de discussão e seções de comentários, onde os
          assinantes podem interagir e compartilhar suas opiniões sobre os
          programas. Além disso, eles também promovem eventos e convenções
          relacionados ao anime em várias partes do mundo.
          <br />
          Além do conteúdo japonês, a Crunchyroll expandiu seu catálogo para
          incluir dramas coreanos e outros programas de TV asiáticos. Isso
          permite que os assinantes tenham acesso a uma variedade mais ampla de
          entretenimento asiático em um só lugar.
          <br />
          É importante observar que, embora a maioria do conteúdo da Crunchyroll
          seja transmitida com legendas em vários idiomas, eles também oferecem
          um número crescente de títulos dublados em inglês para aqueles que
          preferem assistir ao anime dublado.
          <br />
          Outra característica do Android é a sua abertura para desenvolvedores.
          Como mencionei antes, o sistema operacional é de código aberto, o que
          significa que os desenvolvedores podem criar aplicativos e mods
          personalizados para o sistema, bem como contribuir para o
          desenvolvimento do próprio Android. Isso levou a uma grande comunidade
          de desenvolvedores que criam aplicativos e mods personalizados para o
          sistema operacional.
          <br />
          Em resumo, a Crunchyroll é uma plataforma de streaming dedicada ao
          anime e conteúdo asiático, oferecendo uma ampla seleção de séries,
          filmes e dramas para os fãs desse tipo de entretenimento. É uma
          excelente opção para os amantes de anime e para aqueles interessados
          na cultura asiática em geral.
        </S.container>
      </S.div>
    </Dialog>
  );
};
