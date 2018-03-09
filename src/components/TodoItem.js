export default{
    name: 'todo-item',
    props: ['task'],
    methods :{
        removeItem(){
            this.$emit('todo:remove', this.task.id);
        }
    }
}