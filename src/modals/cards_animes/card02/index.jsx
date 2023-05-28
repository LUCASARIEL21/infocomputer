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
          Melhores estudios de anime
          <img src="https://pbs.twimg.com/media/EgQHYl4UcAAILNB?format=jpg&name=4096x4096" />
          <br />
          Existem vários estúdios de anime de renome que produziram uma série de
          obras incríveis ao longo dos anos. Embora seja subjetivo determinar os
          melhores estúdios, aqui estão alguns dos estúdios mais conhecidos e
          aclamados na indústria do anime:
          <br />
          1. Studio Ghibli: Fundado por Hayao Miyazaki e Isao Takahata, o Studio
          Ghibli é amplamente considerado um dos melhores estúdios de anime de
          todos os tempos. Eles são conhecidos por filmes como "A Viagem de
          Chihiro", "Meu Amigo Totoro" e "Princesa Mononoke".
          <br />
          2. Kyoto Animation: Kyoto Animation, também conhecido como KyoAni, é
          conhecido por sua animação excepcionalmente detalhada e histórias
          emocionalmente cativantes. O estúdio produziu séries populares como
          "Clannad", "K-On!", "Violet Evergarden" e "Hibike! Euphonium".
          <br />
          3. Madhouse: Madhouse é um estúdio conhecido por sua diversidade de
          gêneros e qualidade de animação. Eles produziram séries populares como
          "Death Note", "One Punch Man", "Hunter x Hunter" e "Parasyte -the
          maxim-".
          <br />
          4. Production I.G: Com uma reputação de qualidade e inovação, a
          Production I.G é responsável por vários animes aclamados, incluindo
          "Ghost in the Shell", "Haikyuu!!", "Attack on Titan" e "Psycho-Pass".
          <br />
          5. ufotable: ufotable é conhecido por sua animação deslumbrante e
          detalhada, especialmente em cenas de ação. Eles produziram séries como
          "Fate/stay night: Unlimited Blade Works", "Demon Slayer: Kimetsu no
          Yaiba" e "Kara no Kyoukai".
          <br />
          6. Bones: Bones é um estúdio conhecido por seus visuais vibrantes e
          animação fluida. Eles produziram séries populares como "Fullmetal
          Alchemist", "My Hero Academia", "Mob Psycho 100" e "Noragami".
          <br />
          7. Wit Studio: Embora seja uma subsidiária do Production I.G, o Wit
          Studio ganhou destaque próprio. Eles produziram séries como "Attack on
          Titan", "The Ancient Magus' Bride" e "Great Pretender".
          <br />
          8. A-1 Pictures: A-1 Pictures é conhecido por sua ampla gama de
          produções de anime e colaborações com vários criadores talentosos.
          Eles produziram séries como "Sword Art Online", "Blue Exorcist",
          "Anohana" e "Your Lie in April".
          <br />
          Esses são apenas alguns dos muitos estúdios de anime que se destacaram
          na indústria. Cada estúdio tem seu próprio estilo e características
          distintas, e a escolha do melhor estúdio pode variar de acordo com as
          preferências individuais.
        </S.container>
      </S.div>
    </Dialog>
  );
};
