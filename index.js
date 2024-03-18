import express from 'express';

const app = express();



app.get("/samosa", (req, res)=>{
 res.json({
  name: "Dahi samosa",
 price: "40"
})

});

app.get("/burger", (req, res)=>{
 res.send("Here is your special Burger");
});

app.get("/pizza", (req, res)=>{
   res.send("Here is your onion Pizza");
});

app.get("/order/food", (req, res) => {

    const {menu,price ,quantity} = req.query;

    const {user, country} =req.headers;

    const totalPrice = parseInt(price)* parseInt(quantity);
    
    res.json({
        message: `you have order ${quantity} ${menu}`,
        bill : `your total bill is ${totalPrice}`,
        details:`you are${user} from ${country}`
    })
})

app.get("/food/:type", (req, res) => {
    const {type} = req.params;

    if(type=="veg"){
        return  res.json({
            message:"you have order veg food"
        })
    }
    else{
        return res.json({
            message:"you have order non-veg food"
        })
    }

   
})

app.listen(5000, () => {
    console.log('server is running on port 5000');
})