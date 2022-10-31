// // 간단한 투두 리스트기능 구현해보기
//     // 1. 해야할 일 Todo 클래스(내용, 상태 두 가지 프로퍼티를 가집니다.)
//     // 2. Todo 클래스는 상태를 변경하는 changeState 메서드를 가집니다.
//     // 3. 할일의 목록을 관리하는 관리자를 추상화한 TodoManager 클래스 (할일 목록을 프로퍼티로 가집니다.)
//     // 4. 할 일을 저장하고(addItem), 할 일의 목록을 보여주며(getItems), 할 일의 남은 갯수를 반환하는(getLeftTodoCount) 세 가지 메소드를 가집니다.


//     class Todo{
//         constructor(내용,상태) {
//             this.내용 = 내용;
//             this.상태 = 상태;
//         }
//         changeState(){   
//             if(this.상태){
//                 this.상태 == false;
//                 return
//             } else {
//                 this.상태 == true;
//             }
//         }
//     }

//     class TodoManager{
//         constructor(){
//             this.toDoList =[];
//         };
//         addItem(내용){
//             this.toDoList.push(new Todo(내용,false))
//             }
//         getItems(){
//             return this.toDoList;
//         }
//         getLeftTodoCount(){
//             return this.toDoList.filter(todo=>todo.상태===false).length;
//         }
//     }

//     const myTodo = new TodoManager();
// console.log(myTodo);
// myTodo.addItem('점심먹고 쉬기');
// console.log(myTodo.getItems());
// console.log(myTodo.getLeftTodoCount());

// myTodo.getItems()[0].changeState();

// console.log(myTodo.getLeftTodoCount());
// console.log(myTodo.getItems());


class Todo {
    constructor(content, finished) {
        this.content = content;
        this.finished = finished;
    }

    changeState() {
        this.finished = !this.finished;
    }
}

class TodoManager {
    constructor() {
        this.todoList = [];
    }

    addItem(content) {
        this.todoList.push(new Todo(content, false));
    }

    getItems() {
        return this.todoList;
    }

    getLeftTodoCount() {
        return this.todoList.filter(item => !item.finished).length;
    }
}

const myTodo = new TodoManager();
console.log(myTodo);
myTodo.addItem("점심 먹기");
console.log(myTodo.getItems());
console.log(myTodo.getLeftTodoCount());
myTodo.getItems()[0].changeState();
console.log(myTodo.getLeftTodoCount());
console.log(myTodo.getItems());