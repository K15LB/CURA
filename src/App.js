import React, { Component } from 'react';
import Amplify, { I18n } from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { dict } from './dict';

import "semantic-ui-css/semantic.min.css";
import 'react-datepicker/dist/react-datepicker.css';

import TimeLine from "./timeline";
import ChatSelect from './chat/chatselect';
import CreateAfter from './chat/createafter';
import CreateBefore from './chat/createbefore';
import CreateCustomerStatus from './chat/createCustomerStatus';
import CreateNewCare from './chat/createnewcare';
import CreatePublicize from './chat/createPublicize';
import CreateHelperSick from './chat/createhelpersick';
import CreateContact from './chat/createContact';
import CreateReport from './chat/createReport';
import CreateShopping from './chat/createShopping';
import Chat from "./chat/chat";
import DisplayTask from "./task/displaytask";
import CreateTask from "./task/createtask"
import Check from "./check";
import Note from "./note";
import Bord from "./bord";
import Customer from "./customer/customer";
import NewCustomer from "./customer/createcustomer";
import { createCustomerStatus } from './graphql/mutations';


Amplify.configure(aws_exports);
I18n.putVocabularies(dict);
I18n.setLanguage('ja');

const RouteTest = () => (
  <div>
    <ul>
      <li><Link to='/'>TimeLine</Link></li>
      <li><Link to='/chat'>Chat</Link></li>
      <li><Link to='/task'>Task</Link></li>
      <li><Link to='/check'>Check</Link></li>
      <li><Link to='/note'>Note</Link></li>
      <li><Link to='/bord'>Bord</Link></li>
      <li><Link to='/customer'>Customer</Link></li>
    </ul>
  </div>
);

class App extends Component {
  render() {

    return (
      <div>
        <BrowserRouter>
          <RouteTest />
          <Route exact path="/" component={TimeLine} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path='/timeline/chatselect' component={ChatSelect} />
          <Route path='/timeline/chatselect/after' component={CreateAfter} />
          <Route path='/timeline/chatselect/before' component={CreateBefore} />
          <Route path='/timeline/chatselect/customerstatus' component={CreateCustomerStatus} />
          <Route path='/timeline/chatselect/newcare' component={CreateNewCare} />
          <Route path='/timeline/chatselect/publicize' component={CreatePublicize} />
          <Route path='/timeline/chatselect/helpersick' component={CreateHelperSick} />
          <Route path='/timeline/chatselect/contact' component={CreateContact} />
          <Route path='/timeline/chatselect/report' component={CreateReport} />
          <Route path='/timeline/chatselect/shopping' component={CreateShopping} />
          <Route exact path="/task" component={DisplayTask} />
          <Route path="/task/createtask" component={CreateTask} />
          <Route path="/check" component={Check} />
          <Route exact path="/note" component={Note} />
          <Route path="/bord" component={Bord} />
          <Route exact path="/customer" component={Customer} />
          <Route path="/customer/newcustomer" component={NewCustomer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true });

