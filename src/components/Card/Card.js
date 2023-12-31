import "../Card/Card.css"
import "../CustomButton/CustomButton.js"
import CustomButton from "../CustomButton/CustomButton";

function Card(props) {

    return <div className="card">
        <div className="card-header">
            <div className="card-icon"><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                            width="32.000000pt" height="32.000000pt" viewBox="0 0 50.000000 50.000000"
                                            preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                   fill="white" stroke="none">
                    <path d="M155 456 c-60 -28 -87 -56 -114 -116 -36 -79 -19 -183 42 -249 33
                            -36 115 -71 167 -71 52 0 134 35 167 71 34 37 63 110 63 159 0 52 -35 134 -71
                            167 -37 34 -110 63 -159 63 -27 0 -65 -10 -95 -24z m180 -15 c128 -58 164
                            -223 72 -328 -101 -115 -283 -88 -348 52 -79 171 104 354 276 276z"/>
                    <path d="M240 315 l0 -55 -55 0 c-30 0 -55 -4 -55 -10 0 -5 25 -10 55 -10 l55
                            0 0 -55 c0 -30 5 -55 10 -55 6 0 10 25 10 55 l0 55 55 0 c30 0 55 5 55 10 0 6
                            -25 10 -55 10 l-55 0 0 55 c0 30 -4 55 -10 55 -5 0 -10 -25 -10 -55z"/>
                </g>
            </svg>
            </div>
            <div className="card-name">{props.cardHeader}</div>
        </div>
            <div className="card-body">{props.cardBody}</div>
        <CustomButton/>
    </div>

}

export default Card;