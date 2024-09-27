import { MongoClient } from "mongodb";

const uri = "mongodb+srv://" +
  "cluster0.6sypb.mongodb.net/" +
  "?authMechanism=MONGODB-X509" +
  "&authSource=%24external" +
  "&tls=true&tlsCertificateKeyFile=%2Fhome%2Fcharanpreet%2FCode%2Ffstk%2Fgspann-assignment%2Fpackages%2Fbackend%2Fsecrets%2FX509-cert-2356838217297673325.pem"

export const dbClient = new MongoClient(uri);
const db = dbClient.db("task_master")

export default db;
