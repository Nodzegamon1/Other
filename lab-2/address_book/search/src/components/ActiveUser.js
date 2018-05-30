import React, {Component} from 'react';

export default class ActiveUser extends Component {
    render() {
		if (!this.props.user)
		{
            return (<h2>Nothing found :(</h2>);
        }

        return (
            <div className="thumbnail">
                <img src={`images/${this.props.user.image}.svg`}/>
                <div className="thumbnail-caption">
                    <h3>{this.props.user.name}</h3>
                    <table className="user-info table table-responsive">
                        <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{this.props.user.name}</td>
                        </tr>
                         <tr>
                            <td>Email:</td>
                            <td>
                                <span>8 </span> <span>{this.props.user.email}</span>
                            </td>
                        </tr>
						<tr>
                            <td>Home:</td>
                            <td>{this.props.user.home}</td>
                        </tr>
                        </tbody>
                    </table>
                     </div>
            </div>
        );
    }
}