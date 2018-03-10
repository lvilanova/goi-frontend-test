import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoItem from './components/TodoItem.vue'
import TodoRemoveAll from './components/TodoRemoveAll.vue';
import TodoFilters from './components/TodoFilters.vue';
import axios from 'axios'


var urlTasks= 'https://jsonplaceholder.typicode.com/todos';

export default {
    name: 'app',
    data(){
        return{
            tasks:[],
            nextId:1,
            noFilter: true
        };
    },
    components:{
        TodoHeader,
        TodoInput,
        TodoItem,
        TodoRemoveAll,
        TodoFilters
    },
    created: function(){
        this.tasks = [];
            axios.get(urlTasks).then(response => {
            Object.keys(response.data).forEach(key => {
            this.tasks.push(response.data[key]);
            });
        });
    },
    computed: {
        incompletedTasks() {
          return this.tasks.filter(task => !task.completed)
        },
        completedTasks() {
          return this.tasks.filter(task => task.completed)
          },
        todosFiltered() {
            return this.tasks.filter(task => this.noFilter || !task.completed)
         }
    },
    methods: {
        addItem(text){
            this.tasks.push({id: this.nextId, title: text, completed: false});
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