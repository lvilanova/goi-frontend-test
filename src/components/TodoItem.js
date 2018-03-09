export default{
    name: 'todo-item',
    props: ['task'],
    data:{
        isCompleted:false
    },
    methods :{
        removeItem(){
            this.$emit('todo:remove', this.task.id);
        },
        toggleCompleted(){
            if( this.task.completed == true ){
                this.task.completed = false
            }
            else{
                this.task.completed = true
            }
        },
    }
}