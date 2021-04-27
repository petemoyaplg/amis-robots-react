import React, { useState } from 'react';


const Card = ( props ) => {

    const [ info, setInfo ] = useState( true );
    const { id, name, email, username, address, phone, website, company } = props;
    const { street, suite, city, zipcode, geo } = address;
    const { lat, lng } = geo;
    const { catchPhrase, bs } = company;

    const handleClick = () => {
        setInfo( ( info ? false : true ) );
    }

    if ( info ) {
        return (
            <div className="card" key={id} onClick={handleClick}>
                <img src={`https://robohash.org/${ id }`} alt={name} height='200' width='200' />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="card" key={id} onClick={handleClick}>
                <div className="card--info">
                    <p><strong>Username : </strong> {username}</p>
                    <hr />
                    <p><strong>Phone : </strong>{phone}</p>
                    <hr />
                    <p><strong>Website : </strong>{website}</p>
                    <hr />
                    <div className="address">
                        <p><strong>Adress :</strong> <br />street : {street}, suite : {suite}, city : {city}, zipcode : {zipcode}</p>
                        <hr />
                        <div>
                            <strong>Geolocation :</strong> <br />latitude : {lat}, longitude : {lng}
                        </div>
                    </div>
                    <hr />
                    <div className="company">
                        <strong>Company :</strong><br />
                        Name : {company.name}, CatchPhrase : {catchPhrase}, bs : {bs}
                    </div>
                </div>
            </div>
        );
    }
}


export default Card;
