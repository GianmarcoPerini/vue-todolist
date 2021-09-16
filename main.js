let app = new Vue({
    el: '#root',
    data:{
        toDo:[
            obj = {
                things: 'ciao',
                active: false,
            },
            obj = {
                things: 'ciao',
                active: false,
            },
            obj = {
                things: 'ciao',
                active: false,
            },
        ],
        things: '',
        great: 'Non hai impegni',
        under: 'line-through'
    },


    methods: {
        add: function(x){
            if(this.things.trim().length > 0 ){
                obj = {
                    things: x,
                    active: false,
                }
            this.toDo.push(obj)
            this.things = ''
            } 
        },
        
        remove: function(x){
            this.toDo.splice(x, 1)
        },

        isActive: function(x){
            // x.active = true
            // console.log(x.active);
            // console.log(x.active);
        }
    },
})