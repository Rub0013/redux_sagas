import React, { Component } from 'react';
import { MainContainer } from '../../components/Globals/Blocks';
import { allTasks } from  '../../selectors/tasks';
import { connect } from 'react-redux';
import { DeleteBtn } from '../../components/Globals/Buttons';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/index';

const mapStateToProps = (state) => ({
    tasks: allTasks(state),
});

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) });

class Tasks extends Component {
    handleDeleteTask(id) {
        this.props.actions.deleteTask(id);
    }

    render() {
        return (
            <MainContainer>
                <h1>Tasks</h1>
                {
                    this.props.tasks.map(task => {
                        return <div style={{marginBottom:10}} key={task.id}>
                            {task.text}
                            <DeleteBtn onClick={() => this.handleDeleteTask(task.id)}>X</DeleteBtn>
                        </div>
                    })
                }
            </MainContainer>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks);

