import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoItem from './components/TodoItem.vue';

export default {
    name: 'app',
    components:{
        TodoHeader,
        TodoInput,
        TodoItem
    },
    data(){
        return{
            tasks:[
                {id: 0, text : "setting proyect"},
                {id: 1, text : "make it work"}
            ],
            nextId:2
        };
    },
    methods: {
        addItem(text){
            this.tasks.push({id: this.nextId, text: text});
            this.nextId ++;
        },
        removeItem(id){
            let tasks = this.tasks;
            this.tasks = tasks.filter((task) => task.id != id);
        }
    }
}