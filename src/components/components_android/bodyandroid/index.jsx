import Card from "react-bootstrap/Card";
import { useState } from "react";
import { Card1 } from "../../../modals/cards_android/card01";
import { Card2 } from "../../../modals/cards_android/card02";
import { Card3 } from "../../../modals/cards_android/card03";
import { Card4 } from "../../../modals/cards_android/card04";

export const Bodyandroid = () => {
  const [modalCard1, setModalCard1] = useState(false);
  const [modalCard2, setModalCard2] = useState(false);
  const [modalCard3, setModalCard3] = useState(false);
  const [modalCard4, setModalCard4] = useState(false);

  return (
    <div
      className="bodysoftapp"
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
          cursor: "pointer",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Card.Img
          variant="top"
          src="https://bgr.com/wp-content/uploads/2020/02/google-android-sign.jpg?quality=82&strip=all"
          style={{ maxHeight: "1000px", maxWidth: "1000px" }}
        />
        <Card.Body>
          <Card.Text>O QUE É ANDROID</Card.Text>
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
          cursor: "pointer",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Card.Img
          variant="top"
          src="https://miro.medium.com/v2/resize:fit:1200/1*S-BNAiYHBfsQb6yw2xZILg.jpeg"
          style={{ maxHeight: "1000px", maxWidth: "1000px" }}
        />
        <Card.Body>
          <Card.Text>
            CELULARES QUE POSSUEM O SISTEMA OPERACIONAL ANDROID
          </Card.Text>
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
          cursor: "pointer",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Card.Img
          variant="top"
          src="https://www.pngitem.com/pimgs/m/526-5266159_mobile-app-transparent-background-hd-png-download.png"
          style={{ maxHeight: "1000px", maxWidth: "1000px" }}
        />
        <Card.Body>
          <Card.Text>VANTAGENS EM USAR CELULARES ANDROID</Card.Text>
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
          cursor: "pointer",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/originals/82/5a/1b/825a1b319770e50d19ddb9124c179311.png"
          style={{ maxHeight: "1000px", maxWidth: "1000px" }}
        />
        <Card.Body>
          <Card.Text>FUNÇÕES DESCONHECIDAS DOS CELULARES ANDROID</Card.Text>
        </Card.Body>
      </Card>
      {modalCard4 && (
        <Card4 modal={modalCard4} closeModal={setModalCard4} disable={true} />
      )}
    </div>
  );
};
