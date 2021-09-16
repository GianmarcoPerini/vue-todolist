let app = new Vue({
    el: '#root',
    data:{
        toDo:['prova1','prova2','prova3'],
        things: '',
        great: 'Non hai impegni',
        under: 'line-through'
    },


    methods: {
        add: function(x){
            if(this.things.trim().length > 0 ){
            this.toDo.push(x)
            this.things = ''
            } 
        },
        remove: function(x){
            this.toDo.splice(x, 1)
        },
    },
})