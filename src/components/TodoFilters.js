export default{
    name: 'todo-filters',
    props: ['task'],
    methods:{
        filter(){
            this.$emit('todo:filter', this.noFilter);
        }
    }
   

}