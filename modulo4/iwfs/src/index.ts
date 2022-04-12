import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";


const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});


type User = {
    id: string,
    name: string,
    account: number
            
}

const users: User[] = [
   
    {
        id: "nifdvdf-rvdd4-fbfd4-gbfgbd",
        name: "Joao",
        account: 987
        
    },
    {
        id: "knro2in3-fin3oi-v3nroi-3rrrfr",
        name: "Maria",
        account: 876
        
    },
    {
        id: "irog33hg-b35h5h4h-b4tht4bt4-b4tb4",
        name: "Jose",
        account: 765
       
    },
    {
        id: "fgregrgth-4353htrh-btb4tht4b-b4t4b",
        name: "Ana",
        account: 654
       
    }

]

type Transactions = {
    id: string,
    action: string
            
}


const transactions: Transactions[] = [
   
    {
        id: "nifivdf-rvhd4-fbfd4-gbggbd",
        action: "pix"
        
        
    },
    {
        id: "knrh2in3-finloi-v3rroi-3rrqfr",
        action: "deposito"
        
    },
    {
        id: "irqg33hg-b35q5h4h-b4qqt4bt4-bqqb4",
        action: "retirada"
       
    },
    {
        id: "fgregqqth-435qqtrh-btb4qqt4b-bqq4b",
        action: "investimento"
       
    }

]


app.post("/users", (req: Request, res: Response) => {
    if(!users.length){
        res.status(401).send("Não tem usuários.")
    }

    res.status(201).send(users)
})


app.get("/users", (req: Request, res: Response) => {
    try {
      res.send(users)
  
    } catch (error: any) {
      res.send(error.message || "Erro inesperado")
    }
  })



  app.put("/products/:id", (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const newPrice = req.body.price
  
      if (!newPrice && newPrice !== 0) {
        throw new Error("Path param faltando: 'price'")
      }
  
      if (typeof newPrice !== "number" || newPrice <= 0) {
        throw new Error("O path param 'price' deve ser um number e maior que zero")
      }
  
      let isProductFound = false
  
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
          products[i].price = newPrice
          isProductFound = true
        }
      }
  
      if (!isProductFound) {
        throw new Error("Produto não encontrado")
      }
  
      res.send(products)
  
    } catch (error: any) {
      switch (error.message) {
        case "Path param faltando: 'price'":
          res.status(422)
          break
        case "O path param 'price' deve ser um number maior que zero":
          res.status(422)
          break
        case "Produto não encontrado":
          res.status(404)
          break
        default:
          res.status(500)
      }
  
      res.send(error.message || "Erro inesperado")
    }
  })

