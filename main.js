// var product = 'Socks'

var app =new Vue({
    el:"#app",
    data:{
        brand:"Vue Mastery",
        product:'Socks',
        image:"/assets/socks-green.jpg",
        inStock:false,
        details:['80% cotton', '20% polyester', "Gender-neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor:"green",
                variantImage:"/assets/socks-green.jpg"
            },
            {
                variantId: 2235,
                variantColor:"blue",
                variantImage:"/assets/socks-blue.png"
            }
        ],
        cart:0,
        styleOutStock: {
            color:"red",
            fontWeight:"800"
        }
    },
    methods:{
        addToCart: function (){
            this.cart +=1;
        },
        updateProduct( variantImage){
            this.image = variantImage;
        }
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product;
        }
    }
})