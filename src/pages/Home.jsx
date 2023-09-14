import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Title from "../components/title/Title";
import Select from "../components/select/Select";
import Button from "../components/button/Button";
import Text from "../components/text/Text";
import { useState } from "react";

function Home() {
  const [value, setValue] = useState("");

  return (
    <>
      <Header />
      <main className="main">
        <Title className="title">% Приветствие %</Title>
        <Text>% какое-нибудь информационное сообщение %</Text>
        <Title className="subtitle">Я хочу войти в систему как</Title>
        <Select setvalue={setValue}/>
        <Button value={value} />
      </main>
      <Footer />
    </>
  );
}

export default Home;
