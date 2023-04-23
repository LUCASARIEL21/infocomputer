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
          Pichau Informática
          <img src="https://i.ytimg.com/vi/SrVnxfKxpUk/maxresdefault.jpg" />
          <br />
          A Pichau é uma loja online de produtos de informática fundada em 2007.
          Ela é conhecida por vender uma grande variedade de produtos, desde
          peças para montagem de computadores até periféricos e acessórios para
          gamers.
          <br />
          A loja possui um site bem organizado e fácil de navegar, com diversas
          categorias e filtros para ajudar os clientes a encontrarem o que
          precisam. Além disso, a Pichau oferece diversas opções de pagamento,
          incluindo cartão de crédito, boleto bancário e transferência bancária.
          <br />
          A empresa também se destaca pela rapidez na entrega dos produtos, com
          opções de frete expresso para diversas regiões do Brasil. Além disso,
          a Pichau possui uma política de devolução e troca bastante flexível,
          permitindo que os clientes possam devolver ou trocar produtos em até 7
          dias após a compra.
          <br />
          Outro aspecto interessante da loja é o seu canal no YouTube, onde a
          equipe da Pichau produz vídeos com análises de produtos, dicas e
          tutoriais para ajudar os clientes a escolherem os melhores produtos e
          aproveitarem ao máximo suas compras.
          <br />
          No geral, a loja online da Pichau é uma ótima opção para quem procura
          por produtos de informática de qualidade, com preços competitivos e um
          atendimento eficiente.
          <br />
          A Pichau se destaca por oferecer uma grande variedade de produtos de
          marcas reconhecidas no mercado, como Intel, AMD, Asus, Corsair,
          Kingston, entre outras.
          <br />
          A loja também possui uma seção exclusiva para gamers, com produtos
          voltados para esse público, como placas de vídeo, teclados mecânicos,
          mouses e headsets de alta performance.
          <br />
          Além disso, a Pichau tem um programa de fidelidade chamado
          "PichauPlus", no qual os clientes acumulam pontos a cada compra
          realizada na loja. Esses pontos podem ser trocados por descontos em
          compras futuras.
          <br />
          Outro aspecto interessante da Pichau é o seu suporte técnico, que está
          disponível para ajudar os clientes em caso de dúvidas ou problemas com
          os produtos adquiridos. A empresa também oferece garantia em todos os
          produtos comercializados, proporcionando maior segurança aos seus
          clientes.
          <br />
          Por fim, é importante ressaltar que a Pichau tem se destacado no
          mercado de e-commerce brasileiro, tendo sido premiada em diversas
          categorias pelo Ebit, um dos principais institutos de avaliação de
          lojas virtuais do país.
        </S.container>
      </S.div>
    </Dialog>
  );
};
