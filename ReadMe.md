#  **Steps for running the project**

## 1.Clone the repository or download the code and then extract all the file.
## 2.Open the command prompt and switch to the directory contaning the project.
## 3.Run **node index.js**
## 4.Open the link in your browser,select the gmail account you want to use to send emails.
## 5.Click on Advanced->Go to quickstart(unsafe)->Allow to allow access to your account.
## 6.Copy the code which appears and paste it into the command prompt.(token.js containing token credentials will be created)
## 7.Run **npm start**,this will start the server.
## 8.Create a request using the postman application with **Post** method and url **localhost:3000/sendemail**.
## 9. In the input section select Body and raw.
## 10. Write **{"email":"<receiver's email address>"}** in the body.
## 11. Click on send and a mail will be send to the given email-id.
