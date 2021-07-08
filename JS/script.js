Vue.config.devtools = true;

new Vue(
 {
    el:'#list-random-email',
    data: {
        emails:[]
    },
    created(){
        this.getEmails();
    },
    methods:{
      getEmails: function(){
        for(let i = 0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response)=>{
                this.emails.push(response.data.response)
            })
        }
    } 
},

})
