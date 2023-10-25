import "../MainContentComponent/MainContentComponent.css"
import Card from "../Card/Card";

function MainContentComponent(props) {

    return <div className="main-content-component">
        <span className="main-content-component-article">{props.mainContentHeaders}</span>
    </div>

}

export default MainContentComponent;