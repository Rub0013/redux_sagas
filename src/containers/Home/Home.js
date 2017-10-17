import React, { Component } from 'react';
import { MainContainer } from '../../components/Globals/Blocks'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/index';


const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) });

class TaskList extends Component {

    handleAddTask() {
        const taskText = this.refs.task.value.trim();
        if (!taskText) {
            return
        }
        this.props.actions.addTask(taskText);
        this.refs.task.value = '';
    }

    render() {
        return (
            <MainContainer>
                <h1>Home</h1>
                <div>
                    <input ref="task" />
                    <button onClick={() => this.handleAddTask()}>Add Task</button>
                </div>
            </MainContainer>
        );
    }
}

const Home = connect(
    null,
    mapDispatchToProps
)(TaskList);

export default Home;
