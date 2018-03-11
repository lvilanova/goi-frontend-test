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
        //boolean var for manage toggle class
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