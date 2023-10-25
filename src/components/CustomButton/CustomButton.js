import "../CustomButton/CustomButton.css"
import MenuComponent from "../MenuComponent/MenuComponent";

function CustomButton(props) {

    return <a href="#" className="gradient-button">
            <MenuComponent menuComponents={props.menuComponents}/>
        </a>
}

export default CustomButton;