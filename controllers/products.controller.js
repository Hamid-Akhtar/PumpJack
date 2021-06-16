
const db = require("../src/models");
const Product = db.product;
exports.products = (req) => {
  return Product.findByPk(req)
    .then(products => {
      if (!products) {
        return "Product Not found.";
      }
      return products;
    })
    .catch(err => {
      return { message: err.message };
    });
}
exports.Allproducts = (id) => {
    return Product.findAll({where: {id : id}})
      .then(products => {
        if (!products) {
          return "Product Not found.";
        }
        return products;
      })
      .catch(err => {
        return { message: err.message };
      });
  }
  exports.AllProductsAgainstUsers = (id) => {
    return Product.findAll({where: {id : id}})
      .then(products => {
        if (!products) {
          return "Product Not found.";
        }
        return products;
      })
      .catch(err => {
        return { message: err.message };
      });
  }
exports.updateProduct =(obj)=>{
    return Product.update({description:obj.description,name: obj.name,price:obj.price,image:obj.image} , {where: {id :obj.id}}
        )
        .then(result => 
               {  
                
                if (result[0]===1)
                {
                  return obj
                }else
                {
                  return result
                }
                 }
          )
          .catch(err =>
            {console.log("err", err)
            return err}
          )
}
exports.AttatchProdToRequestinguser =(obj)=>{
  return Product.update({userId:obj.userId} , {where: {id :obj.id}}
      )
      .then(result => 
             {  
              
              if (result[0]===1)
              {
                return obj
              }else
              {
                return result
              }
               }
        )
        .catch(err =>
          {console.log("err", err)
          return err}
        )
}
  exports.deleteProductById=(id)=> {
    let n =  Product.destroy({ where: { id: id } });
    return n;
    sequelize.close();
}
exports.RemoveProduct =(obj)=>{
  return Product.update({userId:null} , {where: {id :obj.id}}
      )
      .then(result => 
             {  
              
              if (result[0]===1)
              {
                return obj
              }else
              {
                return result
              }
               }
        )
        .catch(err =>
          {console.log("err", err)
          return err}
        )
}
exports.RequestingUserProduct=(id)=> {
    let n =  Product.findOne({ where: { id: id } });
    sequelize.close();
}
exports.UploadProductImage =async (obj)=>{
    const UploadImage =await Product.update({image:obj.image} , {where: {id :obj.id}})
    return UploadImage;
}
exports.addProduct =async (obj)=>{
let created = await Product.create(obj)
.then(res=>{

})
.catch(err=>console.log("err",err))
}
exports.AllProductsDetail = () => {
  return Product.findAll()
    .then(products => {
      if (!products) {
        return "User Not found.";
      }
     console.log("users", products)
      return products;
    })
    .catch(err => {
      console.log("----------The Error From The Model Is----------", err);
      return { message: err.message };
    });
}
