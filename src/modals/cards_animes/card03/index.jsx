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
          Animes mais populares da historia
          <img src="https://pbs.twimg.com/media/EgQHYl4UcAAILNB?format=jpg&name=4096x4096" />
          <br />
          Existem muitos animes populares que marcaram a história da indústria e
          conquistaram uma enorme base de fãs em todo o mundo. Aqui estão alguns
          dos animes mais populares e influentes da história:
          <br />
          1. "Dragon Ball": Criado por Akira Toriyama, "Dragon Ball" é uma das
          franquias de anime mais icônicas e duradouras. A série segue as
          aventuras de Goku em sua busca pelas esferas do dragão e possui várias
          sagas emocionantes e batalhas épicas.
          <br />
          2. "Naruto": Criado por Masashi Kishimoto, "Naruto" conta a história
          de Naruto Uzumaki, um jovem ninja que busca se tornar o Hokage, o
          líder de sua aldeia. A série é conhecida por suas lutas emocionantes,
          personagens carismáticos e temas de amizade e superação.
          <br />
          3. "One Piece": Criado por Eiichiro Oda, "One Piece" é uma aventura
          pirata que segue Monkey D. Luffy e sua tripulação em busca do tesouro
          conhecido como One Piece. A série é conhecida por seu mundo vasto,
          personagens cativantes e histórias emocionantes.
          <br />
          4. "Death Note": Escrito por Tsugumi Ohba e ilustrado por Takeshi
          Obata, "Death Note" é um thriller psicológico que gira em torno do
          estudante Light Yagami, que encontra um caderno capaz de matar pessoas
          apenas escrevendo seus nomes nele. A série apresenta um jogo de gato e
          rato entre Light e o detetive L.
          <br />
          5. "Attack on Titan": Criado por Hajime Isayama, "Attack on Titan" é
          uma série de ação e suspense que se passa em um mundo onde a
          humanidade luta contra gigantes humanoides chamados Titãs. A série é
          conhecida por sua narrativa intensa, reviravoltas surpreendentes e
          cenas de ação emocionantes.
          <br />
          6. "Fullmetal Alchemist: Brotherhood": Baseado no mangá de Hiromu
          Arakawa, "Fullmetal Alchemist: Brotherhood" segue os irmãos Edward e
          Alphonse Elric em sua busca pela Pedra Filosofal para recuperarem seus
          corpos após uma tentativa de alquimia mal sucedida. A série é elogiada
          por sua narrativa complexa, personagens bem desenvolvidos e temas
          profundos.
          <br />
          7. "Sailor Moon": Criado por Naoko Takeuchi, "Sailor Moon" é um anime
          mágico e de transformação que segue as aventuras de Usagi Tsukino, uma
          estudante do ensino médio que se torna a protetora da Terra como a
          guerreira Sailor Moon. A série é conhecida por sua influência no
          gênero de garotas mágicas e por abordar temas de amizade, amor e
          empoderamento feminino.
          <br />
          8. Esses são apenas alguns exemplos de animes populares que deixaram
          uma marca duradoura na história do anime. Há muitos outros animes
          notáveis e cada fã pode ter suas próprias preferências e favoritos.
        </S.container>
      </S.div>
    </Dialog>
  );
};
