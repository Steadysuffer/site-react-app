import Table from "./components/Table";
import MenuComponent from "./components/MenuComponent/MenuComponent.js";
import MainContentComponent from "./components/MainContentComponent/MainContentComponent";
import TopBar from "./components/TopBar/TopBar";
import CustomButton from "./components/CustomButton/CustomButton";
import Card from "./components/Card/Card";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import CardList from "./components/CardList/CardList";

function App() {

    const mainContentHeaders = ["Dashboard", "Apps in your plan"]
    const menuComponents = ["Dashboard", "Audience", "Posts", "Schedules", "Income"]
    const cardsArr = [
        {
            cardHeader: "123",
            cardBody: "123",
        },
        {
            cardHeader: "Карточка №1",
            cardBody: "Описание или тело карточки",
        },
        {
            cardHeader: "Карточка №2",
            cardBody: "Описание или тело карточки",
        },
    ]


  return  (
        <div className="main">
            <div className="main-page">
                <LeftSideBar menuComponents={menuComponents}/>
                <div className="right-side-bar">
                    <TopBar/>
                    <div className="main-content">
                        <MainContentComponent mainContentHeaders ={mainContentHeaders[0]}/>
                        <MainContentComponent mainContentHeaders ={mainContentHeaders[1]}/>
                        <CardList n={cardsArr.length} cards={cardsArr}/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default App;
