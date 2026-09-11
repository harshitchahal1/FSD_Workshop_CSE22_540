const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        Name: String
        Email: String
        RollNo: Int
    }
`);

const root = {
    Name: () => {
        return "Harshit Chahal";
    },

    Email: () => {
        return "abc@gmail.com";
    },

    RollNo: () => {
        return 12;
    }
};

const app = express();

app.use(
    "/graphql",graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000/graphql");
});