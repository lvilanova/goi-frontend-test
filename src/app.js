import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoItem from './components/TodoItem.vue'
import TodoRemoveAll from './components/TodoRemoveAll.vue';
import axios from 'axios' //request to endpoint
import moment from 'moment' //library to display current date


var urlTasks= 'https://jsonplaceholder.typicode.com/todos';

export default {
    name: 'app',
    data(){
        return{
            tasks:[],
            nextId:1,
            noFilter: true,
            moment:moment,
            task_counter1:"Unfinished tasks",
            task_counter2:"Finished tasks",

        };
    },
    components:{
        TodoHeader,
        TodoInput,
        TodoItem,
        TodoRemoveAll,
    },
    //call to the endpoint and bring all the info
    created: function(){
        this.tasks = [];
            axios.get(urlTasks).then(response => {
            Object.keys(response.data).forEach(key => {
            this.tasks.push(response.data[key]);
            });
        });
    },
    //manage how many incompleted and completed tasks for the counters
    computed: {
        incompletedTasks() {
          return this.tasks.filter(task => !task.completed)
        },
        completedTasks() {
          return this.tasks.filter(task => task.completed)
          },
          //we're going to use this for change the iteration of uncompleted or completed tasks
        todosFiltered() {
            return this.tasks.filter(task => this.noFilter || !task.completed)
         },
    },
    methods: {
        //unshift for adding the new task at first position
        addItem(text){
            this.tasks.unshift({id: this.nextId, title: text, completed: false});
            this.nextId ++;
        },
        removeItem(id){
            let tasks = this.tasks;
            this.tasks = tasks.filter((task) => task.id != id);
        },
        removeAll(){
            this.tasks = [];
        },
        filter() { 
            this.noFilter = !this.noFilter;
        },
    },
}