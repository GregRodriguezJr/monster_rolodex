import { Component } from "react";
import './card-list.styles.css';
import Card from "../card-component/card-component";

class Cardlist extends Component {
    render() {
        const { monsters } = this.props;

        return (
            <div className="card-list">
                {monsters.map(monster => { 
                    return (
                        <Card monster={monster}/>
                    )
                })}
            </div>
        );
    }
}

export default Cardlist;