export default{
    name: 'todo-input',
    data() {
     return {
         text : "",
     };
    },
    methods:{
        addItem(){
            if(this.text.length != 0){
                this.$emit('todo:add', this.text);
                this.text='';
            }           
        }
    }
}