var componenta = {
    trmplate: '<div> This is local component a </div>',
};
var componentb = {
    trmplate: '<div> This is local component b </div>',
};
var componentc = {
    trmplate: '<div> This is local component c </div>',
};

new Vue({
    el: '#app',
    data: {
        text: 'good to see u again.',
    },
    components: {
        componenta,
        componentb,
        componentc
    },
})