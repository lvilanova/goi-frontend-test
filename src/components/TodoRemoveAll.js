export default{
    name: 'todo-removeAll',
    props: ['task'],
    methods:{
        removeAll(){
            this.$emit('todo:removeAll');
        },
    }
   

}