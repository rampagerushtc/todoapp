import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';


const App = () => {
    
    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 },
    ];

    return (
    <div>
        <AppHeader />
        <SearchPanel />
        <ItemStatusFilter />
        <TodoList todos={todoData}/>
    </div>
    );
}



export default App;