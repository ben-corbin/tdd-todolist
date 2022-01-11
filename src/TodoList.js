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
        console.log(this.toDoArray[id-1])
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
        const searchItems = []
        for (let i = 0; i < this.toDoArray.length; i++) {
            if (this.toDoArray[i].id === (id)) {
                searchItems.push(this.toDoArray[i])
            }
            else return "Error ID does not exist"
        }
        return searchItems
    }

    removeItem(id) {
        const removedItems = []
        for (let i = 0; i < this.toDoArray.length; i++) {
            if (this.toDoArray[i].id === (id)) {
                removedItems.splice(this.toDoArray[i], 1)
            }
        }
        return removedItems
    }

}


module.exports = TodoList
