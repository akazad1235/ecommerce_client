
class ApiUrl {
    static baseURL = 'http://localhost:8000/api/';
    static fileStore = 'http://localhost:8000/';

    static VisitorDetails =this.baseURL+"visitor"; 
    static sendContactDetails =this.baseURL+"contact"; 
    static sideInfo =this.baseURL+"sideinfo"; 
    static categories =this.baseURL+"categories"; 
    static productList =this.baseURL+"product"; 
}
export default ApiUrl;