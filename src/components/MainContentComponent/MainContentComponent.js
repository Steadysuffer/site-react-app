import "../MainContentComponent/MainContentComponent.css"
import Card from "../Card/Card";
import CardList from "../CardList/CardList";

function MainContentComponent(props) {

    return <div className="main-content-component">
        <span className="main-content-component-article">{props.mainContentHeaders}</span>
        <div className="main-content-body">
            <CardList n={props.n} cards={props.cards}/>
        </div>
    </div>

}

export default MainContentComponent;