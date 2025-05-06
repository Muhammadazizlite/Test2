import mysql from "mysql2";


const config = {
      host:"localhost",
      user:"admic",
      password:"abcabc",
      database:"carShop"
};


const connection = mysql.createConnection(config).promise();
connection.connect((err)=>{
      if(err){
            console.log("Mysql ulanish xatoligi: ", err);
            return;
      }
      console.log("Mysql ulanishi muvaffaqiyatli amalga oshirildi");
})


export default connection