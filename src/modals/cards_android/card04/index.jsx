import { Dialog } from "@mui/material"
import * as S from "./style"

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
          <img src="https://kodie.io/wp-content/uploads/android-development-1024x982.jpg" />
          Existem várias funções menos conhecidas nos celulares Android que podem ser muito úteis para os usuários. Aqui estão algumas delas:
          Gravação de tela: A gravação de tela é uma função muito útil para quem precisa mostrar uma tarefa ou processo para outras pessoas. Alguns dispositivos Android possuem essa função nativa, enquanto outros exigem a instalação de um aplicativo de terceiros para gravar a tela. Normalmente, é possível acessar a gravação de tela por meio de um atalho na barra de notificações ou por meio das configurações do dispositivo.
          Modo de economia de energia: O modo de economia de energia pode prolongar significativamente a duração da bateria do dispositivo. Quando ativado, ele limita o desempenho do processador, reduz o brilho da tela e desativa recursos como o Wi-Fi e a rede móvel quando o dispositivo não está em uso. Alguns dispositivos Android possuem diferentes modos de economia de energia, que podem ser personalizados pelo usuário para atender às suas necessidades.
          Assistente de voz: O Google Assistant é um assistente virtual que pode ajudar os usuários a realizar várias tarefas. Ele pode ser ativado por voz ou por um botão dedicado em alguns dispositivos. Alguns dos recursos úteis do Google Assistant incluem enviar mensagens, fazer chamadas, pesquisar na internet e controlar dispositivos inteligentes em casa. Além disso, o Google Assistant pode ser personalizado para atender às necessidades do usuário, por exemplo, configurando rotinas personalizadas que executam várias ações com um único comando.
          NFC: O NFC é uma tecnologia sem fio que permite a troca de informações entre dispositivos compatíveis com NFC. Isso pode ser útil para realizar pagamentos móveis, compartilhar arquivos e informações entre dispositivos, ou até mesmo para controlar dispositivos inteligentes em casa. Alguns dispositivos Android permitem que os usuários ativem e desativem o NFC nas configurações do dispositivo.
          Modo de desenvolvedor: O modo de desenvolvedor é uma função avançada que oferece opções adicionais de configuração para usuários experientes. Ele pode ser ativado por meio das configurações do dispositivo, geralmente tocando várias vezes no número da versão do Android. Algumas das opções de configuração disponíveis no modo de desenvolvedor incluem a possibilidade de ajustar as configurações de animação do sistema, limitar o número de processos em segundo plano e visualizar informações detalhadas sobre o uso da bateria.
          Modo de uma mão: O modo de uma mão é uma função que reduz a tela do dispositivo para torná-la mais fácil de usar com uma mão. Essa função pode ser especialmente útil para usuários com dispositivos de tela grande. Para acessar o modo de uma mão, os usuários podem deslizar para baixo na barra de navegação ou nas configurações do dispositivo. Em alguns dispositivos, é possível configurar o modo de uma mão para ativar automaticamente quando o dispositivo é desbloqueado com uma mão.
        </S.container>
      </S.div >
    </Dialog>
  )
}