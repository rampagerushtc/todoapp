import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItemForm from '../add-item-form';

export default class App extends Component {
    maxId = 1;
    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        onTypeSearchText: '',
        activeFilter: 'All'
    }

    createTodoItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        }
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

    addItem = (e) => {
        this.setState(({ todoData }) => {
            return {
                todoData: [...todoData, this.createTodoItem(e)]
            }
        })
    }
    toggleProperty(arr, id, propName) {

        const idx = arr.findIndex((el) => el.id === id)
        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];

    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        })
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        })
    }

    onTypeSearch = (e) => {
        this.setState(() => {
            return { onTypeSearchText: e }
        })


    }

    onFilterChange = (e) => {
        this.setState(() => {
            return { activeFilter: e }
        })
    }



    render() {
        const { todoData, onTypeSearchText, activeFilter } = this.state;
        const doneCount = todoData
            .filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div>
                <AppHeader toDo={todoCount} done={doneCount} />
                <SearchPanel onTypeSearch={this.onTypeSearch} />
                <ItemStatusFilter onFilterChange={this.onFilterChange} activeFilter={activeFilter} />
                <TodoList
                    todos={todoData}
                    searchText={onTypeSearchText}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                    activeFilter={activeFilter}
                />
                <AddItemForm
                    addItem={this.addItem} />
            </div >
        );
    }
}