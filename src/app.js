import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoItem from './components/TodoItem.vue';
import axios from 'axios'


var urlTasks= 'https://jsonplaceholder.typicode.com/todos';

export default {
    name: 'app',
    data(){
        return{
            tasks:[],
            nextId:1
        };
    },
    components:{
        TodoHeader,
        TodoInput,
        TodoItem
    },
    created: function(){
        this.tasks = [];
            axios.get(urlTasks).then(response => {
            Object.keys(response.data).forEach(key => {
            this.tasks.push(response.data[key]);
            });
        });
    },
    methods: {
        addItem(text){
            this.tasks.push({id: this.nextId, title: text});
            this.nextId ++;
        },
        removeItem(id){
            let tasks = this.tasks;
            this.tasks = tasks.filter((task) => task.id != id);
        }
    },
}