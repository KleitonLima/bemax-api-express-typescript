import app from "../app";
import { knex } from "../knexfile";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const auth = {
    SECRET: String(process.env.SECRET),
  };

app.post("/login", (request, response, next) => {
    knex("users")
      .where({ email: request.body.email })
      .first()
      .then((user: any) => {
        if (!user) {
          response.status(401).json({
            error: "Email não cadastrado",
          });
        } else {
          return bcrypt
            .compare(request.body.password, user.password)
            .then((isAuthenticated) => {
              if (!isAuthenticated) {
                response.status(401).json({
                  error: "Unauthorized Access!",
                });
              } else {
                return jwt.sign(user, auth.SECRET, (error: any, token: any) => {
                  response.status(200).json({ token });
                });
              }
            });
        }
      });
  });
  