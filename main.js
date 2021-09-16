let app = new Vue({
    el: '#root',
    data:{
        toDo:[
            obj = {
                things: 'I tuoi impegni',
                active: false,
            }
        ],
        things: '',
        great: 'COMPLIMENTI ! Prenditi la giornata libera !!',
        under: 'line-through'
    },


    methods: {
        add: function(x){
            let cap = x.charAt(0).toUpperCase() + x.slice(1)
            if(this.things.trim().length > 0 ){
                obj = {
                    things: cap,
                    active: false,
                }
            this.toDo.push(obj)
            this.things = ''
            } 
        },
        remove: function(x){
            this.toDo.splice(x, 1)
        },
    },
})