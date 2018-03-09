export default{
    name: 'todo-input',
    data() {
     return {
         text : "",
     };
    },
    methods:{
        addItem(){
            this.$emit('todo:add', this.text);
            this.text='';
        }
    }
}