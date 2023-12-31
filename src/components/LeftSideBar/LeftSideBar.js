import "../LeftSideBar/LeftSideBar.css"
import MenuComponent from "../MenuComponent/MenuComponent";
import CustomButton from "../CustomButton/CustomButton";

function LeftSideBar(props) {

    return  <div className="left-side-bar">
                <div className="left-side-bar-icon">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                         width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
                         preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                           fill="white" stroke="none">
                            <path d="M342 578 c-15 -15 -15 -51 0 -66 7 -7 24 -12 38 -12 31 0 50 17 50
45 0 28 -19 45 -50 45 -14 0 -31 -5 -38 -12z m58 -33 c0 -8 -9 -15 -20 -15
-11 0 -20 7 -20 15 0 8 9 15 20 15 11 0 20 -7 20 -15z"/>
                            <path d="M205 550 c-10 -11 -28 -20 -41 -20 -23 0 -54 -24 -54 -41 0 -6 -13
-21 -29 -35 -20 -16 -31 -37 -35 -64 -3 -22 -9 -58 -12 -81 -4 -25 -2 -45 5
-52 6 -6 11 -23 11 -38 0 -45 18 -78 47 -91 16 -6 40 -23 56 -37 37 -34 90
-33 126 3 l26 26 0 204 c0 186 -2 206 -19 225 -24 26 -58 27 -81 1z m63 -221
c2 -175 0 -208 -13 -219 -23 -19 -67 -15 -85 7 -9 11 -26 24 -38 27 -30 10
-52 34 -52 56 0 14 8 18 36 18 40 0 84 33 84 64 0 25 -23 23 -35 -4 -30 -65
-129 -19 -104 50 5 13 17 22 29 22 11 0 20 7 20 15 0 8 -7 15 -15 15 -18 0
-20 31 -3 48 9 9 15 9 27 -2 22 -19 53 -24 58 -8 3 6 0 12 -5 12 -6 0 -18 7
-26 16 -23 23 -4 54 34 54 19 0 33 7 40 21 6 11 19 19 28 17 15 -3 17 -25 20
-209z"/>
                            <path d="M482 514 c-14 -9 -22 -26 -22 -43 0 -39 -28 -61 -78 -61 -31 0 -42
-4 -42 -15 0 -11 12 -15 48 -15 39 0 53 5 72 25 13 14 35 25 50 25 32 0 50 17
50 46 0 20 -32 54 -50 54 -3 0 -16 -7 -28 -16z m48 -39 c0 -8 -9 -15 -20 -15
-11 0 -20 7 -20 15 0 8 9 15 20 15 11 0 20 -7 20 -15z"/>
                            <path d="M515 350 c-15 -17 -31 -20 -97 -20 -43 0 -78 -4 -78 -9 0 -15 29 -21
100 -21 48 0 71 -4 80 -15 15 -18 51 -20 68 -3 15 15 15 61 0 76 -18 18 -53
14 -73 -8z m55 -30 c0 -11 -7 -20 -15 -20 -8 0 -15 9 -15 20 0 11 7 20 15 20
8 0 15 -9 15 -20z"/>
                            <path d="M340 245 c0 -11 11 -15 43 -15 50 0 77 -22 77 -61 0 -32 17 -49 50
-49 31 0 50 17 50 45 0 28 -19 45 -50 45 -15 0 -37 11 -50 25 -19 20 -33 25
-72 25 -36 0 -48 -4 -48 -15z m190 -80 c0 -8 -9 -15 -20 -15 -11 0 -20 7 -20
15 0 8 9 15 20 15 11 0 20 -7 20 -15z"/>
                            <path d="M342 128 c-15 -15 -15 -51 0 -66 7 -7 24 -12 38 -12 31 0 50 17 50
45 0 28 -19 45 -50 45 -14 0 -31 -5 -38 -12z m58 -33 c0 -8 -9 -15 -20 -15
-11 0 -20 7 -20 15 0 8 9 15 20 15 11 0 20 -7 20 -15z"/>
                        </g>
                    </svg>
                </div>
                <div className="menu-left-side-bar">
                    <CustomButton menuComponents={props.menuComponents[0]}/>
                    <CustomButton menuComponents={props.menuComponents[1]}/>
                    <CustomButton menuComponents={props.menuComponents[2]}/>
                    <CustomButton menuComponents={props.menuComponents[3]}/>
        </div>
    </div>

}

export default LeftSideBar;