import Card from "react-bootstrap/Card";
import { useState } from "react";
import { Card1 } from "../../../modals/cards_computadores/card01";
import { Card2 } from "../../../modals/cards_computadores/card02";
import { Card3 } from "../../../modals/cards_computadores/card03";
import { Card4 } from "../../../modals/cards_computadores/card04";
import { Card5 } from "../../../modals/cards_computadores/card05";
import { Card6 } from "../../../modals/cards_computadores/card06";

export const Bodycomp = () => {
  const [modalCard1, setModalCard1] = useState(false);
  const [modalCard2, setModalCard2] = useState(false);
  const [modalCard3, setModalCard3] = useState(false);
  const [modalCard4, setModalCard4] = useState(false);
  const [modalCard5, setModalCard5] = useState(false);
  const [modalCard6, setModalCard6] = useState(false);

  return (
    <div
      className="bodycomp"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Card
        onClick={() => {
          setModalCard1(true);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Card.Img
          variant="top"
          src="https://cdn-62cb22a2c1ac1835ecef9f37.closte.com/wp-content/uploads/2020/11/hardware-25.jpg"
          style={{ maxHeight: "1000px", maxWidth: "1000px" }}
        />
        <Card.Body>
          <Card.Text>Melhor site para comprar PC</Card.Text>
        </Card.Body>
      </Card>
      {modalCard1 && (
        <Card1 modal={modalCard1} closeModal={setModalCard1} disable={true} />
      )}
      <br />
      <Card
        onClick={() => {
          setModalCard2(true);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Card.Img
          variant="top"
          src="https://www.videogameschronicle.com/files/2019/03/pc.jpg"
          style={{ maxHeight: "1000px", maxWidth: "1000px" }}
        />
        <Card.Body>
          <Card.Text>Definição de um computador</Card.Text>
        </Card.Body>
      </Card>
      {modalCard2 && (
        <Card2 modal={modalCard2} closeModal={setModalCard2} disable={true} />
      )}
      <br />
      <Card
        onClick={() => {
          setModalCard3(true);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Card.Img
          variant="top"
          src="https://www.teahub.io/photos/full/29-298437_apple-imac-uhd-4k-wallpaper-imac-2017-wallpaper.jpg"
          style={{ maxHeight: "1000px", maxWidth: "1000px" }}
        />
        <Card.Body>
          <Card.Text>Informações sobre o imac</Card.Text>
        </Card.Body>
      </Card>
      {modalCard3 && (
        <Card3 modal={modalCard3} closeModal={setModalCard3} disable={true} />
      )}
      <br />
      <Card
        onClick={() => {
          setModalCard4(true);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Card.Img
          variant="top"
          src="https://www.promobit.com.br/blog/wp-content/uploads/2019/07/16173006/pc-gamer-como-montar.jpg"
          style={{ maxHeight: "1000px", maxWidth: "1000px" }}
        />
        <Card.Body>
          <Card.Text>Como montar um PC do zero</Card.Text>
        </Card.Body>
      </Card>
      {modalCard4 && (
        <Card4 modal={modalCard4} closeModal={setModalCard4} disable={true} />
      )}
      <br />
      <Card
        onClick={() => {
          setModalCard5(true);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Card.Img
          variant="top"
          src="https://img.olhardigital.com.br/wp-content/uploads/2021/12/montar-pc-gamer-shutterstock_1430140055-1920x1080.jpg"
          style={{ maxHeight: "1000px", maxWidth: "1000px" }}
        />
        <Card.Body>
          <Card.Text>Melhores acessorios para seu pc</Card.Text>
        </Card.Body>
      </Card>
      {modalCard5 && (
        <Card5 modal={modalCard5} closeModal={setModalCard5} disable={true} />
      )}
      <br />
      <Card
        onClick={() => {
          setModalCard6(true);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Card.Img
          variant="top"
          src="https://thumbs.web.sapo.io/?W=1920&H=0&crop=center&delay_optim=1&epic=OTY5BLKnibH+GCT8mQQHLzKzqosJRMmWmeVxo/Z+GnCecStcbK3NfOk4XACh60FOtEgA1LDGa8WnOzWmnalpSUJzXh+KKzlDFsFXadg2x4l6zCM="
          style={{ maxHeight: "1000px", maxWidth: "1000px" }}
        />
        <Card.Body>
          <Card.Text>Placas de video</Card.Text>
        </Card.Body>
      </Card>
      {modalCard6 && (
        <Card6 modal={modalCard6} closeModal={setModalCard6} disable={true} />
      )}
    </div>
  );
};
