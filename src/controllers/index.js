import db from "../config/index.js";

async function smartSearch(req,res){
      res.status(200).json({
            status:200,
            message:"good"
      })
}

async function add(req,res){
      try{
            const {name,contact}=req.body
            if(!name){
                  throw Error("Invalid user name")
            }
            if(!contact){
                  throw Error("Invalid user contact")
            }
            let [data] = await db.query("INSERT INTO Customers(name,contact) VALUES (?,?)", [name, contact])
            res.status(200).json({
                  status:200,
                  message:"Success created",
                  data
            })
      }
      catch(error){
            res.status(400).json({
                  status:400,
                  message:error.message
            })
      }
}
async function put(req,res){
      try{
            const {name,contact}=req.body
            const {id}=req.params
            let [data] = await db.query("UPDATE Customers SET name=?, contact=? WHERE id=?", [name, contact, id])

            res.status(201).json({
                  status:201,
                  message:"Success changed",
                  data
            })
      }
      catch(error){
            res.status(400).json({
                  status:400,
                  message:error.message
            })
      }
}
async function getUser(req,res){
      try{
            let [data] = await db.query("SELECT * FROM customers")
            res.status(200).json({
                  status:200,
                  data
            })
      }
      catch(error){;
            
            res.status(400).json({
                  status:400,
                  message:error.message
            })
      }
}





async function carAdd(req,res){
      try{
            const {name,price}=req.body
            if(!name){
                  throw Error("Invalid car name")
            }
            if(!price){
                  throw Error("Invalid car price")
            }
            let [data] = await db.query("INSERT INTO Cars(name,price) VALUES (?,?)", [name, price])
            res.status(200).json({
                  status:200,
                  message:"Success created",
                  data
            })
      }
      catch(error){
            res.status(400).json({
                  status:400,
                  message:error.message
            })
      }
}
async function carPut(req,res){
      try{
            const {name,price}=req.body
            const {id}=req.params
            let [data] = await db.query("Alter table Cars SET name=?,price=? where id=?", [name, price,id])
            res.status(201).json({
                  status:201,
                  message:"Success changed",
                  data
            })
      }
      catch(error){
            res.status(400).json({
                  status:400,
                  message:error.message
            })
      }
}
async function getCar(req,res){
      try{
            let [data] = await db.query("SELECT * FROM Cars")
            res.status(200).json({
                  status:200,
                  data
            })
      }
      catch(error){
            res.status(400).json({
                  status:400,
                  message:error.message
            })
      }
}


async function buy(req,res){
      try{
            
            const {userid,carid,summa,month,quantity}=req.body
            
            let [data] = await db.query("INSERT INTO orders(usersId,carId,quantity) VALUES (?,?,?)",[userid,carid,quantity])
            let [boshqacha]= await db.query(`SELECT id from orders where usersid=${userid} and carid=${carid} and quantity = ${quantity} ORDER BY id desc limit 1`)
            console.log(boshqacha[0]);
            
            let [data2]= await db.query("INSERT INTO Payment(summa,date,order_id,month_id) VALUES (?,?,?,?)",[summa,new Date(), boshqacha[0].id,month])
            
            res.status(200).json({
                  status:200,
                  data,
                  data2,
                  message:"Success bought"
            })
      }
      catch(error){
            res.status(400).json({
                  status:400,
                  message:error.message
            })
      }
}
async function deleteUser(req,res){
      try{
            const {id}=req.params
            const data = await db.query("DELETE FROM customers where id=?",[id])
            res.status(200).json({
                  status:200,
                  message:data
            })
      }
      catch(error){
            res.status(400).json({
                  status:400,
                  message:error.message
            })
      }
}

export default {
      add,
      buy,
      put,
      getUser,
      carAdd,
      carPut,
      getCar,
      smartSearch,
      deleteUser
}