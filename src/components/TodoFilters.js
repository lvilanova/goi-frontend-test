export default{
    name: 'todo-filters',
    props: ['task'],
    method:{
        removeAll(){
            this.$emit('todo:removeAll');
		}
    }

}