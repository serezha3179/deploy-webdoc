import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Title from "../components/title/Title";

function MainAdministrator() {
    return ( 
        <div className="page">
        <Header/>
        <main className="main">
        <Title className="subtitle">Главный администратор</Title>
        </main>
        <Footer/>
        </div>
     );
}

export default MainAdministrator;