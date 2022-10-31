// // 간단한 투두 리스트기능 구현해보기
//     // 1. 해야할 일 Todo 클래스(내용, 상태 두 가지 프로퍼티를 가집니다.)
//     // 2. Todo 클래스는 상태를 변경하는 changeState 메서드를 가집니다.
//     // 3. 할일의 목록을 관리하는 관리자를 추상화한 TodoManager 클래스 (할일 목록을 프로퍼티로 가집니다.)
//     // 4. 할 일을 저장하고(addItem), 할 일의 목록을 보여주며(getItems), 할 일의 남은 갯수를 반환하는(getLeftTodoCount) 세 가지 메소드를 가집니다.


class Todo {
    constructor(item,finished) {
        this.item = item;
        this.finished = finished;
    }

    changeState(){
        this.finished= !this.finished;
    }
}

class TodoManager{
    constructor(){
        this.todoList = [];
    }

    addItem(item,finished = false){
        const todo = new Todo(item,finished);
        this.todoList.push(todo);
    }
    getItems(){
        return this.todoList
    }
    getLeftTodoCount(){
        // return this.todoList.filter(item =>{
        //     item.finished === false
        // }).length;

        return this.todoList.reduce((total,current)=>{
            if(current.finished === false){
                return ++total;
            } else {
                return total;
            }
        },0)
    }
}

const myTodo = new TodoManager;