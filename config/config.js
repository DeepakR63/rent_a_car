
//API for Node localhost
var baseURL='http://localhost:3000';

var loginURL='/';
var homeURL='/dashboard';
var profileURL='/profile';
var carimageURL='./img/caricon.png';
var employeeimageURL='./img/empicon.png';

//URL for add new details
var newempURL='/newemployee';
var newbranchURL='/newbranch'
var newcarURL='/newcar';

//URL for view details
var employeedetailsURL='/employee';
var cardetailsURL='/car';

//API's
var loginAPI='/login';
var employeeAPI='/home/employee/';
var branchAPI='/home/branch/';
var carAPI='/home/car/';
var dealerAPI='/home/dealer/';
var dealerprofileAPI='/home/dealer/profile/';
var carmodelAPI='/carmodel';
var cartypeAPI='/cartype';
var carfuelAPI='/carfuel';
var carmakeAPI='/carmake';

export { 
    baseURL, 
    loginURL, 
    homeURL, 
    loginAPI, 
    newempURL, 
    newbranchURL, 
    newcarURL, 
    employeeAPI,
    carAPI,
    branchAPI,
    dealerAPI,
    carmakeAPI,
    carfuelAPI,
    carmodelAPI,
    cartypeAPI,
    dealerprofileAPI,
    employeedetailsURL,
    profileURL,
    cardetailsURL,
    carimageURL,
    employeeimageURL
};
