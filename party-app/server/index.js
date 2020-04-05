const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const pino = require('express-pino-logger')();

const passwords = require(__dirname + "/passwords.js");

const homeStartingContent = "Busca Festa vem facilitar a sua vida! Ficou mais fácil de organizar e montar a festa com o seu próprio estilo. Muitas ofertas de lugares e especialidades.";
const aboutContent = "Queremos ajudar você a divulgar sua Casa de Festa, seu serviços para festa ou seu negócio relacionado a festa e eventos.";
const contactContent = "Muito legal você querer entrar em contato. Você já é um usuário registrado? Preenche o formulário e nos envie um e-mail.";

const app = express();

// app.set('view engine');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(pino);

let password = passwords.getPassword();

mongoose.connect(`mongodb+srv://felipealisboa:${password}@cluster0-fqbok.mongodb.net/partyDB`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
  });


  const customerSchema = {
    name:  String,
    email: String,
    address: {
        neighborhood: String,
        city: String,
        state: String,
        zipcode: String
    },
    businessType: String,
    services: {
        food: [],
        drink: [],
        animation: [],
        decoration: []
    },
    description: String
  };

  const Customer = mongoose.model("Customer", customerSchema);

app.get("/", (req, res) => {

    Customer.find({}, (err, customers) => {
        if(err) {
            console.log(err);
        } else {
            res.render("home", {
                startingContent: homeStartingContent,
                customers: customers    
            });
        }
    });
});

app.get("/customers/:customerId", (req, res) => {
    const requestCustomerId = req.params.customerId;
    const customCustomerName = _.capitalize(req.params.customerName);
    const customCustomerDescription = req.params.customerDescription; 

    Customer.findOne({_id: requestCustomerId}, (err, post) => {
        if(!err) {
            if(!post) {
                const newCustomer = new Customer({
                    name: customCustomerName,
                    address: {
                        neighborhood: String,
                        city: String,
                        state: String,
                        zipcode: String
                    },
                    businessType: String,
                    services: {
                        food: [],
                        drink: [],
                        animation: [],
                        decoration: []
                    },
                    description: String
                });
                res.redirect("/customers/" + customCustomerName);
            } else {
                res.render("customer", {
                    name: String,
                    address: {
                        neighborhood: String,
                        city: String,
                        state: String,
                        zipcode: String
                    },
                    businessType: String,
                    services: {
                        food: [],
                        drink: [],
                        animation: [],
                        decoration: []
                    },
                    description: String
                })
            }
        }
    });
});


app.get("/about", (req, res) => {
    res.render("about", {aboutText: aboutContent});
});

app.get("/contact", (req, res) => {
    res.render("contact", {contactText: contactContent});
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    const newcustomer = new Customer ({
        name: req.body.customerName,
        address: {
            neighborhood: String,
            city: String,
            state: String,
            zipcode: String
        },
        businessType: String,
        services: {
            food: [],
            drink: [],
            animation: [],
            decoration: []
        },
        description: req.body.customerDescription
    });
    
    newcustomer.save(err => {
        if(!err) {
            res.redirect("/");
        }
    });
});

let port = process.env.PORT;

if(port == null || port === "") {
    port = 3000;
}

app.listen( port, () => {
    console.log(`Server listen in port: ${port}`);
});