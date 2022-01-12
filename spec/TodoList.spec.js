const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it("creates a todo item", () => {
    // set up
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
      creation: Date().substring(0, 15)
    }
  
    // execute
    const result = todoList.create("turn the heating on!")
    // verify
    expect(result).toEqual(expected)
  })

  it("returns all items from the to do list", () => {
    // set up
    const expected = [{
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
      creation: Date().substring(0, 15)},
      {id: 2,
      text: "Note two, already done", 
      status: "incomplete",
      creation: Date().substring(0, 15)
    },
    {id: 3,
      text: "Note three", 
      status: "incomplete",
      creation: Date().substring(0, 15)
    }]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("Note two, already done")
    todoList.create("Note three")
    const result = todoList.returnAllObjects()
    // verify
    expect(result).toEqual(expected)
  })

  it("Set a todo completed by its ID", () => {
    // set up
    const expected = [{
      id: 1,
      text: "turn the heating on!",
      status: "complete",
      creation: Date().substring(0, 15)}]
    // execute
    todoList.create("turn the heating on!")
    const result = todoList.setStatusComplete(1)
    // verify
    expect(result).toEqual(expected)
  })

  it("Get only todo items that are incomplete", () => {
    // set up
    const expected = [{
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
      creation: Date().substring(0, 15)}]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("open the windows")
    todoList.setStatusComplete(2)
    const result = todoList.returnIncompleteItems()
    // verify
    expect(result).toEqual(expected)
  })

  it("Get only todo items that are complete", () => {
    // set up
    const expected = [{
      id: 1,
      text: "turn the heating on!",
      status: "complete",
      creation: Date().substring(0, 15)}]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("open the windows")
    todoList.setStatusComplete(1)
    const result = todoList.returnCompleteItems()
    // verify
    expect(result).toEqual(expected)
  })

  it("Search and return a todo item by its ID", () => {
    // set up
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
      creation: Date().substring(0, 15)}
    // execute
    todoList.create("turn the heating on!")
    const result = todoList.search(1)
    // verify
    expect(result).toEqual(expected)
  })

  it("Search by ID & return an error message if it doesn’t exist", () => {
    // set up
    const expected = ("Error ID does not exist")
    // execute
    todoList.create("turn the heating on!")
    const result = todoList.search(2)
    // verify
    expect(result).toEqual(expected)
  })

  it("Remove a todo item by its ID", () => {
    // set up
    const expected = []
    // execute
    todoList.create("turn the heating on!")
    const result = todoList.removeItem(1)
    // verify
    expect(result).toEqual(expected)
  })

  it("Search by day name and return matches", () => {

  const expected = [{
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
      creation: Date().substring(0, 15)
    },
    {
      id: 2,
      text: "Note two, already done",
      status: "incomplete",
      creation: Date().substring(0, 15)
    },
    {
      id: 3,
      text: "Note three",
      status: "incomplete",
      creation: Date().substring(0, 15)
    },]
  todoList.create('turn the heating on!')
  todoList.create('Note two, already done')
  todoList.create('Note three')
  const result = todoList.searchByDay('Wed')
  expect(result).toEqual(expected)
  })

  it('search todo items by day and return an empty list if not matches found', () => {
    const expected = []
    todoList.create('clean windows')
    todoList.create('code')
    const result = todoList.searchByDay('Mon')
    expect(result).toEqual(expected)
    })


  })

  




