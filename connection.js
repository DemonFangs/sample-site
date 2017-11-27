/*Connect to the FTP server with the provided information*/

var userName="";
var password="";

function getUserInfo(){
  userName = document.getElementyID("loginInfo").username;
  password = document.getElementyID("loginInfo").password;
  console.log(username);
  console.log(password);
}

$('#login').on('click', function(){
    getUserInfo();
  }
);
