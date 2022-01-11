// const toDoObject = {
//     id: [],
//     text: [],
//     status: [],
// };
//Create a todo item that has an ID, text description, and starts off incomplete DONE
// Get all todo items 
// Set a todo completed by its ID
// Get only todo items that are incomplete
// Get only todo items that are complete
// Search and return a todo item by its ID, or return a message saying it doesn’t exist
// Remove a todo item by its ID



class TodoList {
    constructor() {
        this.toDoArray = [];
        this.toDoCounter = 1
    }
   create(note) {
         const todo = {
                id: this.toDoCounter,
                text: note,
                status: 'incomplete'
            }
            this.toDoCounter++;
            this.toDoArray.push(todo);
            return todo
        }
    
    returnAllObjects() {
      return this.toDoArray
}
    setStatusComplete(id) {
        this.toDoArray[id-1].status = 'complete'
        return this.toDoArray
    }

    returnIncompleteItems() {
        const incompleteItems = []
        for (let i = 0; i < this.toDoArray.length; i++) {
            if (this.toDoArray[i].status === 'incomplete') {
                incompleteItems.push(this.toDoArray[i])
            }
        }
        return incompleteItems
    }

    returnCompleteItems() {
        const completeItems = []
        for (let i = 0; i < this.toDoArray.length; i++) {
            if (this.toDoArray[i].status === 'complete') {
                completeItems.push(this.toDoArray[i])
            }
        }
        return completeItems
    }

    search(id) {
        for (let i = 0; i < this.toDoArray.length; i++) {
            if (this.toDoArray[i].id === id) {
                return this.toDoArray[i];
            }
        }
        return "Error ID does not exist"// 
    }

    removeItem(id) {
        for (let i = 0; i < this.toDoArray.length; i++) {
            if (this.toDoArray[i].id === id) {
                this.toDoArray.splice([i], 1)
            }
        }
        return this.toDoArray
    }
}

module.exports = TodoList
