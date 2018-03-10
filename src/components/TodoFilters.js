export default{
    name: 'todo-filters',
    props: ['task'],
    methods:{
        removeAll(){
            this.$emit('todo:removeAll');
        }
    }
   

}