// let app = new vue({
//     el:'#app',
//     data:{
//         Count:0,
//     },
// });
//     app.Count = 2;


var app = new Vue({
    el: '#app',
    data: {
        message: 'abcd still testing' + new Date().toLocaleString()
    }
});

new vue({
    el: '#app-2',
    data: {
        information: 'good to see you anyways' + new Date.toLocaleString()
    }
})