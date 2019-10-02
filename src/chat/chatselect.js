import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChatSelect extends Component {
    render() {
        return (
            <div>
                <p>This ChatSelect Component</p>
                <ul>
                    <li><Link to='/timeline/chatselect/after'>After</Link></li>
                    <li><Link to='/timeline/chatselect/before'>Before</Link></li>
                    <li><Link to='/timeline/chatselect/customerstatus'>Customer Status</Link></li>
                    <li><Link to='/timeline/chatselect/newcare'>New Care</Link></li>
                    <li><Link to='/timeline/chatselect/publicize'>Publicize</Link></li>
                    <li><Link to='/timeline/chatselect/helpersick'>Helper Sick</Link></li>
                    <li><Link to='/timeline/chatselect/contact'>Contact</Link></li>
                    <li><Link to='/timeline/chatselect/report'>Report</Link></li>
                    <li><Link to='/timeline/chatselect/shopping'>Shopping</Link></li>
                </ul>
                <button onClick={() => { this.props.history.push('/') }}>戻る</button>
            </div>
        );
    }
}
export default ChatSelect