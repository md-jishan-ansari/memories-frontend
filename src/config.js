let variable = {};

if (process.env.NODE_ENV === "production") {
  variable = {
    DB_ROUTE: "https://memories-backend-zf7s.onrender.com",
    FRONT_ROUTE: "./",
  };
} else {
  variable = {
    DB_ROUTE: "http://localhost:8000",
    FRONT_ROUTE: "http://localhost:3000",
  };
}

export default variable;
