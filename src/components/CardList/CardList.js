import Card from "../Card/Card";
import "../CardList/CardList.css"

function CardList(props) {
    const cards = [];

    for (let i = 0; i < props.n; i++) {
        cards.push(
                <div key={i}>
                    <Card cardHeader={props.cards[i].cardHeader} cardBody={props.cards[i].cardBody}/>
                </div>
        );
    }
    return (
        <div className="card-list">
            {cards}
        </div>
    );
}

export default CardList;
