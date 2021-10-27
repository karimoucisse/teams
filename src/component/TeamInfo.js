import React from "react"

// l'image => crestUrl
 // stade => venue


class TeamInfo extends React.Component {
    render() {
        const {name, crestUrl, venue, address, email, phone, founded} = this.props.team
        return (
            <div className="col-6 d-flex justify-content-center text-center my-4">
                <div className="col-6">
                    <img src={crestUrl} className="img-fluid mb-3" style={{height : "350px"}}/>
                    <h3>{name}</h3>
                    <h4 className="text-danger">{founded}</h4>
                    <p>{venue}</p>
                    <p>{address}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>
            </div>
        )
      }
}


export default TeamInfo;