const userName = 'minghao';
const timeStamp = Date.parse(new Date())
const jsonDb = { "loginUser": userName, "loginTime": timeStamp }
const db = connect('log')
db.login.insert(jsonDb)

print('success')
