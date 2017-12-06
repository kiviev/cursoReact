import React, { Component } from 'react';

import { OrderedSet } from 'immutable';
import { NotificationStack } from 'react-notification';


class Notifications extends Component {

	constructor(props){
	    super(props);
	    this.state = {
	      notifications : OrderedSet(),
	      count : 0
    }
    this.removeNotification=this.removeNotification.bind(this);
  }
  addNot(text){

    const { notifications, count } = this.state;
    const newCount = count + 1;
     this.setState({
      count: newCount,
      notifications: notifications.add({
          title : 'Estás en la ruta:',
          message:  text,
          key: newCount,
          action: 'Close',
          dismissAfter: 10000,
          onClick: () => this.removeNotification(newCount),
      })
    });
  }

  addNotification() {
    const { notifications, count } = this.state;
    const id = notifications.size + 1;
    const newCount = count + 1;
    return this.setState({
      count: newCount,
      notifications: notifications.add({
          message: `Mi notificacion ${id}`,
          key: newCount,
          action: 'Close',
          dismissAfter: 4000,
          onClick: () => this.removeNotification(newCount),
      })
    });
  }

  removeNotification (count) {
    const { notifications } = this.state;
    this.setState({
      notifications: notifications.filter(n => n.key !== count)
    })
  }

componentDidMount(){
  this.addNot(this.props.notification);
}
componentWillReceiveProps(nextProps){
  this.addNot(nextProps.notification);
}
  render () {
   
    return (
      <div>
        <div className="notificaciones">
          <NotificationStack
            notifications={this.state.notifications.toArray()}
            onDismiss={notification => this.setState({
                notifications:this.state.notifications.delete(notification)
              })}
          />
        </div>
       </div>     
      );
    }


}

export default Notifications;