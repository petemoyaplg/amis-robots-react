import React from "react";
import Card from "./Card";


const CardList = ( { listRobots } ) => {
    const cardComponent = listRobots.map( ( robot ) => {
        return (
            <Card
                key={robot.id}
                id={robot.id}
                name={robot.name}
                email={robot.email}
                username={robot.username}
                address={robot.address}
                phone={robot.phone}
                website={robot.website}
                company={robot.company}
            />
        );
    } );
    return (
        <div className="robots-container">
            {cardComponent}
        </div>
    );
}

export default CardList;