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
            cardHeader: "Карточка №1",
            cardBody: "Описание или тело карточки 1 Описание или тело карточки 1",
        },
        {
            cardHeader: "Карточка №2",
            cardBody: "Описание или тело карточки 2",
        },
        {
            cardHeader: "Карточка №3",
            cardBody: "Описание или тело карточки 3",
        },
    ]

  return  (
            <div className="main-page">
                <LeftSideBar menuComponents={menuComponents}/>
                <div className="right-side-bar">
                    <TopBar/>
                    <div className="main-content">
                        <MainContentComponent mainContentHeaders ={mainContentHeaders[0]} n={1} cards={cardsArr}/>
                        <MainContentComponent mainContentHeaders ={mainContentHeaders[1]} n={cardsArr.length} cards={cardsArr}/>
                    </div>
                </div>
            </div>
  )
}

export default App;
