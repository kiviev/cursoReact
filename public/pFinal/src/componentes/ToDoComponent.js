import React, { Component } from 'react';

// components
import {ToDoForm , ToDoList} from './index';
// bootstrap
import { Grid ,Row , Col } from 'react-bootstrap';

class ToDoComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      edit : false
    }

    this.state={tasks: 
                      [
                        { text: "Tarea 1", completed: false ,hight : false},
                        { text: "Tarea 2", completed: false ,hight : false},
                        { text: "Tarea 3", completed: false ,hight : true},
                        { text: "Tarea 4", completed: true ,hight : false}
                      ]
                };
    this.addTask = this.addTask.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.taskAction = this.taskAction.bind(this);

  }


  addTask(task) {
    if( task.text ){
      this.state.tasks.push(task);
      this.setState( this.state );
    }
  }
  saveTask(index, task) {
    if( task.text ){
      let st = this.state;
      st.tasks[index] = task;
      st.edit = null;
      this.setState( st);
    }
  }
  removeTask(index) {
    if( index >= 0 && this.state.tasks.length > 0 ){
      let st = this.state;
      st.tasks.splice(index, 1);
      this.setState(st);
    }
  }
  editTask(index) {
    if( index >= 0 && this.state.tasks.length > 0 ){
      let st = this.state;
      var task = st.tasks[index];
      task.index = index
      this.setState({edit:task});
    }
  }

  taskAction(index){
    let st = this.state;
    st.tasks[index].completed = !st.tasks[index].completed;
    this.setState(st);
  }

  hightAction(index){
    let st = this.state;
    st.tasks[index].hight = !st.tasks[index].hight;
    this.setState(st);
  }

  render(){
          return (
            <Grid>
              <Row>
                <Col md={12} >
                   <ToDoForm
                       add={this.addTask}
                       save={this.saveTask}
                       edit={this.state.edit} />
                   <ToDoList
                     tasks={this.state.tasks}
                     remove={this.removeTask}
                     edit={this.editTask}
                     hightAction={this.hightAction.bind(this)}
                     taskAction={this.taskAction} />
                </Col>
              </Row>
            </Grid> 
          ) 
  }


}
export default ToDoComponent;
