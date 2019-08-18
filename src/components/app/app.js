import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItemForm from '../add-item-form';

export default class App extends Component {
    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Make Awesome App', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 }
        ]
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            }
        })
    }

    addItem = () => {
        this.setState( ({todoData}) => {
            if (todoData.length === 0) {
                return {
                    todoData: [{ label: 'Make Awesome App', important: true, id: 1}]
                }
            } else {    
                function makeNewArray(todoData) {
                    const arrayOfId = todoData.map((el)=> el.id).sort();
                    const newArray = [...todoData, { label: 'Make Awesome App', important: true, id: arrayOfId[arrayOfId.length-1]+1}];
                    return newArray;
                }
                const newArray = makeNewArray(todoData);
                return {
                    todoData: newArray
                }
            }
        })
    }

    render() {
        return (
            <div>
                <AppHeader />
                <SearchPanel />
                <ItemStatusFilter />
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                />
                <AddItemForm 
                    addItem={this.addItem}/>
            </div >
        );
    }
}