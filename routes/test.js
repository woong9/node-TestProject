const express = require("express"); // npm i express | yarn add express
const cors = require("cors");    // npm i cors | yarn add cors
const mysql = require("mysql");   // npm i mysql | yarn add mysql
const app = express();
//const router = express.Router();

// MySQL 연결
const db = mysql.createPool({
    host: "182.162.89.236", // 호스트
    user: "namusoft",       // 데이터베이스 계정
    password: "1234a1",     // 데이터베이스 비밀번호
    database: "jcp",        // 사용할 데이터베이스
});

app.use(cors({
    origin: "*",                // 출처 허용 옵션
    credentials: true,          // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200,  // 응답 상태 200으로 설정
}))

// post 요청 시 값을 객체로 바꿔줌
app.use(express.urlencoded({ extended: true })) 

app.get('/db', function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  const query = "SELECT * FROM member_table";
  db.query(query, (err, result) => { res.send(result) });
});

app.get('/get', function(req, res){
	res.status(200).json({
    "message" : "hello Api Get Method"
  });
});

app.post('/post',function(req, res){
	res.status(200).json({
   	"message" : "hello Api Post Method"
  });    
}); 

module.exports = app;

