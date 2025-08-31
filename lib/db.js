import mysql from "mysql2/promise";

export async function connectDB() {
  const connection = await mysql.createConnection({
    host: "localhost",     // Change if needed
    user: "root",          // Your MySQL username
    password: "Rahul312005@",          // Your MySQL password
    database: "schooldb",  // Database name
  });
  return connection;
}
