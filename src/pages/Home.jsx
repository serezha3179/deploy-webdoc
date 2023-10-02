import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Title from "../components/title/Title";
import Select from "../components/select/Select1";
import Button from "../components/button/Button";
import Text from "../components/text/Text";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/login/Login";

function Home() {
  const [value, setValue] = useState("");
  const [modalwindow, setModalwindow] = useState(true)
  // const [modalLoginWindow, setModalLoginWindow] = useState(false)
  // const falses = true;
    const navigate = useNavigate()
    let valueString = value.toLowerCase()
    
    //  function handleOnClick(e) {
    //     e.preventDefault()
    //      if(valueString == "оператор") {
    //         console.log(value);
    //       navigate("/operator");
    //      } else if(valueString == "координатор") {
    //       navigate("/coordinator");
    //      } else if(valueString == "администратор") {
    //         setModalwindow(false)
    //      } else if(valueString == "главный администратор") {
    //       setModalwindow(false)
    //      }
    //  }

    function handleOnClick(e) {
      e.preventDefault()
       valueString == "оператор" && navigate("/operator");
       valueString == "координатор" && navigate("/coordinator");
       valueString == "администратор" && setModalwindow(false)
       valueString == "главный администратор" && setModalwindow(false)
   }
  return (
    <div className="page">
      <Header />
      <main className="main">
        <Title className="title">% Приветствие %</Title>
        <Text>% какое-нибудь информационное сообщение %</Text>
        <Title className="subtitle">Я хочу войти в систему как</Title>
        <Select setvalue={setValue} />
        <Button onClick={handleOnClick}>Next</Button>
      </main>
      <Footer />
      <Login modal={modalwindow} setModal={setModalwindow} value={valueString}/>
    </div>
  );
}

export default Home;
