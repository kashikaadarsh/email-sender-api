#  **Steps for running the project**

## 1.Clone the repository or download the code and then extract all the files.
## 2.Open the command prompt and switch to the directory containing the project.
![image 1](https://github.com/kashikaadarsh/email-sender-api/blob/master/Snipp1.png)
## 3.Run **node index.js**
## 4.Open the link in your browser,select the gmail account you want to use to send emails.
![image 2](https://github.com/kashikaadarsh/email-sender-api/blob/master/Snipp2.png)
## 5.Click on Advanced->Go to quickstart(unsafe)->Allow to allow access to your account.
![image 3](https://github.com/kashikaadarsh/email-sender-api/blob/master/Snipp3.png)
## 6.Copy the code which appears and paste it into the command prompt.(token.js containing token credentials will be created)
![image 4](https://github.com/kashikaadarsh/email-sender-api/blob/master/Snipp4.png)
![image 5](https://github.com/kashikaadarsh/email-sender-api/blob/master/Snipp5.png)
## 7.Run **npm start**,this will start the server.
![image 6](https://github.com/kashikaadarsh/email-sender-api/blob/master/Snipp6.png)

## 8.Create a request using the postman application with **Post** method and url **localhost:3000/sendemail**.
![image 7](https://github.com/kashikaadarsh/email-sender-api/blob/master/Snipp7.png)
## 9. In the input section select Body and raw.
## 10. Write **{"email":"<receiver's email address>"}** in the body.
![image 8](https://github.com/kashikaadarsh/email-sender-api/blob/master/Snipp8.png)
## 11. Click on send and a mail will be send to the given email-id.
![image 9](https://github.com/kashikaadarsh/email-sender-api/blob/master/Snipp9.png)











