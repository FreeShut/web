Vue.component('component-a', {
    template: '<div> This is Global component a<div/>',
});
Vue.component('component-b', {
    template: '<div> This is Global component b<div/>',
});
Vue.component('component-c', {
    template: '<div> This is Global component c<div/>',
});

new Vue({
    el: '#app',
    data: {
        Text: 'good to see ya',
    },
});