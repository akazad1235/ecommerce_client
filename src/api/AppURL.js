
class ApiUrl {
    static baseURL = 'http://localhost:8000/api/';
    static fileStore = 'http://localhost:8000/';

    static VisitorDetails =this.baseURL+"visitor"; 
    static sendContactDetails =this.baseURL+"contact"; 
    static sideInfo =this.baseURL+"sideinfo"; 
    static categories =this.baseURL+"categories"; 
    static categoriess =this.baseURL+"categoriess"; 
    static productList =this.baseURL+"productList"; 
    static productDetails =this.baseURL+"product/productDetails"; 
    static cartList =this.baseURL+"product/cartList"; 
    static brandList =this.baseURL+"brand/list"; 
    static brands =this.baseURL+"brands"; 
}
export default ApiUrl;