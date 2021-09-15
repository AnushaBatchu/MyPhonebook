/**
  (function(){
  var app = angular.module("phonebook",[]);
  var appController=function($scope){
    
    $scope.rowLimit=3;
    $scope.currentPage = 0;
  $scope.numPerPage = 9;
 
  
     $scope.info=[
{name:"BINDHU",phonenumber="1234567890",email:"bindhu123@gmail.com"},
			{name:"Harry",phonenumber="678912340",email:"harry03@gmail.com"},
			{name:"priya",phonenumber="876542145",email:"priya@gmail.com"},
			{name:"prathyu",phonenumber="564415671",email:"prathyu3@gmail.com"},
			{name:"kaplpana",phonenumber="1234567890",email:"@gmail.com"},
			{name:"heroin",phonenumber="236577888",email:"heroin@gmail.com"},
			{name:"salam",phonenumber="1234567890",email:"salam0@gmail.com"},
			{name:"SINDHU",phonenumber="1234567890",email:"sindhu13@gmail.com"},
			{name:"lalitha",phonenumber="1234567890",email:"lalitha23@gmail.com"},
			{name:"radha",phonenumber="1234567890",email:"radha1@gmail.com"},
			{name:"usha",phonenumber="1234567890",email:"usha3@gmail.com"},
			{name:"rani",phonenumber="1234567890",email:"rani@gmail.com"},
		];
    
    $scope.addContact = function(){		
  for(i=0;i<$scope.info.length&&$scope.info.length<10000;i++){
    
	$scope.info.push({ 'name':$scope.info.newName, 'phone': $scope.newPhone, 'email':$scope.newEmail });
	$scope.newName='';
	$scope.newPhone='';
	$scope.newEmail='';
   
    }
};
  $scope.removeContact = function() { 
  $scope.info.splice(this.$index, 1);     
};
    
 $scope.search= function(item){
            
    if($scope.searchContact==undefined){
                return true;
            }
            
            else{
               
       if($scope.searchContact.toLowerCase() && item.name.toLowerCase().indexOf($scope.searchContact.toLowerCase())   != -1||  item.phone && item.phone.indexOf($scope.searchContact)!=-1)
                    {
                        return true;
                    }
                                  }
            
            return false;    
        };
    
   
      
    
    };
app.controller("appController",appController);
}());
 * 
 */