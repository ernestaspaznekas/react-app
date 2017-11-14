import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from '../routes'


import { actionCreators } from '../reducers/List'
import List from '../components/List'
import Input from '../components/Input'
import Title from '../components/Title'

const mapStateToProps = (state) => ({
    todos: state.todos,
})

class App extends Component {

    onAddTodo = (text) => {
        const {dispatch} = this.props

        dispatch(actionCreators.add(text))
    }

    onRemoveTodo = (index) => {
        const {dispatch} = this.props

        dispatch(actionCreators.remove(index))
    }

    render() {
        const {todos} = this.props

        return (
            <div style={styles.container}>
              <Router/>
              <Title>
                List
              </Title>
              <Input
                  placeholder={'Type and then hit enter!'}
                  onSubmitEditing={this.onAddTodo}
              />
              <List
                  list={todos}
                  onClickItem={this.onRemoveTodo}
              />
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
}

export default connect(mapStateToProps)(App)

