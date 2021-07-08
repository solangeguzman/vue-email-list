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
        for(let x = 0; x<10; x++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response)=>{
                this.emails.push(response.data.response);
            });
        }
    } 
},

});
