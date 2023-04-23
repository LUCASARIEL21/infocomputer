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
          Android
          <img src="https://media.threatpost.com/wp-content/uploads/sites/103/2020/04/30095345/android-scaled-1.jpeg" />
          <br />
          O sistema operacional Android é um sistema operacional móvel
          desenvolvido pelo Google, baseado no núcleo do Linux e projetado
          principalmente para dispositivos móveis, como smartphones e tablets.
          Ele é o sistema operacional mais popular do mundo para dispositivos
          móveis, com uma grande variedade de fabricantes de dispositivos que o
          utilizam em seus aparelhos.
          <br />
          O Android é conhecido por sua flexibilidade e personalização,
          permitindo que os usuários modifiquem a aparência e a funcionalidade
          do sistema de acordo com suas preferências. Ele também oferece acesso
          à Google Play Store, uma loja de aplicativos que oferece uma vasta
          seleção de aplicativos, jogos, filmes, música e livros digitais para
          os usuários.
          <br />
          O Android é um sistema operacional de código aberto, o que significa
          que os desenvolvedores podem acessar e modificar seu código-fonte
          livremente. Isso levou a uma grande comunidade de desenvolvedores que
          criam aplicativos e mods personalizados para o sistema operacional.
          <br />
          O Android foi inicialmente lançado em 2008 e desde então passou por
          várias atualizações, com a última versão disponível sendo o Android 12
          (até a data deste corte). O sistema operacional é conhecido por sua
          integração com serviços do Google, como Gmail, Google Maps, YouTube,
          Google Drive, entre outros. Além disso, o sistema também oferece
          suporte a várias linguagens e teclados, permitindo que os usuários
          interajam com o dispositivo em seu idioma preferido.
          <br />
          Uma das principais características do Android é a sua interface
          personalizável. Os usuários podem escolher entre uma variedade de
          launchers (ou iniciadores), que são aplicativos que permitem
          personalizar a aparência da tela inicial do dispositivo, bem como
          adicionar widgets e atalhos para os aplicativos favoritos.
          <br />
          Outra característica do Android é a sua abertura para desenvolvedores.
          Como mencionei antes, o sistema operacional é de código aberto, o que
          significa que os desenvolvedores podem criar aplicativos e mods
          personalizados para o sistema, bem como contribuir para o
          desenvolvimento do próprio Android. Isso levou a uma grande comunidade
          de desenvolvedores que criam aplicativos e mods personalizados para o
          sistema operacional.
          <br />
          Por fim, o Android é um sistema operacional muito popular e amplamente
          utilizado em todo o mundo, o que significa que existem muitos recursos
          e suporte disponíveis para os usuários, incluindo comunidades on-line,
          fóruns de discussão e tutoriais.
        </S.container>
      </S.div>
    </Dialog>
  );
};
