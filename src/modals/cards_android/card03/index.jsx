import { Dialog } from "@mui/material"
import * as S from "./style"

export const Card3 = ({ closeModal, modal }) => {
  return (
    <Dialog
      open={modal}
      onClose={() => closeModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.div>
        <S.buttonS onClick={() => closeModal(false)}>X</S.buttonS>
        <S.container>
          <img src="https://www.karlosperu.com/wp-content/uploads/2017/11/LG-cuenta-con-aplicaci%C3%B3n-para-usar-el-celular-como-control-remoto.jpg" />
          Existem várias vantagens em usar um celular Android, incluindo:
          Personalização: O Android é altamente personalizável, permitindo que os usuários alterem a aparência e o comportamento do sistema operacional de acordo com suas preferências. Os usuários podem instalar diferentes launchers, temas e aplicativos para personalizar sua experiência.
          Grande variedade de dispositivos: O Android é usado em uma grande variedade de dispositivos, desde smartphones de baixo custo até dispositivos de última geração. Isso significa que há uma grande variedade de opções para os usuários escolherem, permitindo que encontrem um dispositivo que atenda às suas necessidades e orçamento.
          Loja de aplicativos: O Google Play é a loja oficial de aplicativos para dispositivos Android, oferecendo uma vasta seleção de aplicativos, jogos, livros e filmes. Além disso, os usuários podem instalar aplicativos de outras fontes, se desejarem.
          Integração com serviços do Google: Os dispositivos Android são integrados com os serviços do Google, como o Gmail, Google Drive, Google Agenda e Google Maps, o que pode tornar a vida dos usuários mais fácil, pois podem acessar esses serviços diretamente em seus dispositivos.
          Preço: Os dispositivos Android são geralmente mais acessíveis do que dispositivos concorrentes, permitindo que um público mais amplo tenha acesso a tecnologia de ponta.
          Open source: O Android é um sistema operacional de código aberto, o que significa que os desenvolvedores podem modificá-lo e criar suas próprias versões do sistema operacional. Isso também significa que há uma grande comunidade de desenvolvedores trabalhando em aplicativos e melhorias para o sistema operacional.
        </S.container>
      </S.div >
    </Dialog>
  )
}