import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Title from "../components/title/Title";

function MainAdministrator() {
    return ( 
        <>
        <Header/>
        <main className="main">
        <Title className="subtitle">Главный администратор</Title>
        </main>
        <Footer/>
        </>
     );
}

export default MainAdministrator;