const express = require("express");
const app = express();
const con = require("./database");
const cors = require("cors");
const bcrypt = require("bcrypt");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

// use cors midlware to allow server request from other origin
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
// creating a  session
const sessionStore = new MySQLStore(
  {
    createDatabaseTable: true,
    schema: {
      tableName: "user_sessions",
      columnNames: {
        session_id: "session_id",
        expires: "expires",
        data: "data",
      },
    },
  },
  con
);
app.use(
  session({
    key: "pms",
    secret: "mySceret",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 86000000,
    },
  })
);

// use urlencoded midlware to get data from the body of the page
app.use(express.urlencoded({ extended: false }));
// use json midlware is used to change josn data from api to object
app.use(express.json());
app.post("/login", (req, res) => {
  const { Email, password } = req.body;
  const sql = `SELECT * FROM users WHERE Email = '${Email}' `;
  con.query(sql, (err, data) => {
    if (data.length == 0) {
      console.log("user doesnt exist ");
      res.send({ userERR: "user doesnt exsit" });
    } else {
      bcrypt.compare(password, data[0].Password, (error, result) => {
        if (result) {
          req.session.user = data;
          console.log("your password is succsseful");
          res.send(req.session.user);
        } else {
          res.send({ passERR: "wrong password" });
          console.log(" wrong password and email combnation");
        }
      });
    }
  });
});
app.get("/getTotalEmploye", (req, res) => {
  const sql = `SELECT COUNT(*) AS Total FROM employee `;
  con.query(sql, (err, data) => {
    res.send(data);
  });
});
app.get("/getTotaldepartment", (req, res) => {
  const sql = `SELECT COUNT(*) AS Total from departments`;
  con.query(sql, (err, data) => {
    res.send(data);
  });
});
app.get("/getEmployes", async (req, res) => {
  const { find } = req.query;
  if (find) {
    const sql = `SELECT * FROM employee WHERE First_Name LIKE '%${find}%' OR ID_Number LIKE '%${find}%' `;
    con.query(sql, (err, data) => {
      if (data.length > 0) res.send(data);
    });
  } else {
    const sql = `SELECT * FROM employee`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  }
});
app.get("/getdepartment", (req, res) => {
  const sql = `SELECT Offices_Name  from departments`;
  con.query(sql, (err, data) => {
    res.send(data);
  });
});
app.get("/getjobTitles", (req, res) => {
  const sql = `SELECT Name  from job_titles`;
  con.query(sql, (err, data) => {
    res.send(data);
  });
});
app.get("/getVechilesList", (req, res) => {
  const { find } = req.query;
  if (find) {
    const sql = `SELECT * FROM vehicles WHERE Brand LIKE '%${find}%' OR Model LIKE '%${find}%' `;
    con.query(sql, (err, data) => {
      if (data.length > 0) res.send(data);
    });
  } else {
    const sql = `SELECT * FROM vehicles`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  }
});
app.get("/getOfficeList", (req, res) => {
  const { find } = req.query;
  if (find) {
    const sql = `SELECT * FROM bureaus WHERE Bureau_Name LIKE '%${find}%' OR Code LIKE '%${find}%' `;
    con.query(sql, (err, data) => {
      if (data.length > 0) res.send(data);
    });
  } else {
    const sql = `SELECT * FROM bureaus`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  }
});
app.get("/getClassfication", (req, res) => {
  const sql = `SELECT Classification_Name  from classification`;
  con.query(sql, (err, data) => {
    res.send(data);
  });
});
app.get("/getSubClassfication", (req, res) => {
  const sql = `SELECT Sub_Classification_Name  from sub_classification`;
  con.query(sql, (err, data) => {
    res.send(data);
  });
});
app.get("/getUnits", (req, res) => {
  const sql = `SELECT Unit from unit`;
  con.query(sql, (err, data) => {
    res.send(data);
  });
});
app.get("/getInformation", (req, res) => {
  const { find } = req.query;
  if (find) {
    const sql = `SELECT * FROM departments WHERE Offices_Name LIKE '%${find}%' OR Code LIKE '%${find}%' `;
    con.query(sql, (err, data) => {
      if (data.length > 0) res.send(data);
    });
  } else {
    const sql = `SELECT * from departments`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  }
});
app.get("/getOfficeName", (req, res) => {
  const sql = `SELECT Bureau_Name FROM bureaus`;
  con.query(sql, (err, data) => {
    res.send(data);
  });
});
app.get("/getDepartmentType", (req, res) => {
  const sql = `SELECT * FROM department_types`;
  con.query(sql, (err, data) => {
    res.send(data);
  });
});
app.get("/getPropClass", async (req, res) => {
  const { find } = req.query;
  if (find) {
    const sql = `SELECT * FROM classification WHERE Classification_Name LIKE '%${find}%' OR Classification_Code LIKE '%${find}%' `;
    con.query(sql, (err, data) => {
      if (data.length > 0) {
        res.send(data);
      }
    });
  } else {
    const sql = `SELECT * FROM classification`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  }
});
app.post("/postPropClass", async (req, res) => {
  const { Name, Code, Description } = req.body;
  const sql = `INSERT INTO classification  (Classification_Name, Classification_Code, Description) VALUES ("${Name}","${Code}","${Description}");`;
  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successful");
    }
  });
});
app.post("/postNewEmloyee", (req, res) => {
  const {
    FirstName,
    MidleName,
    LastName,
    Gender,
    PhoneNumber,
    Mobile,
    Email,
    Address,
    CostCenterName,
    WorkPlaceName,
    WorkPostionName,
    Photo,
  } = req.body;
  console.log(req.body);
  const sql = `INSERT INTO employee (First_Name,Middle_Name,Last_Name,Sex,Job_Title,Phone,Email,Moblie,Address,Department,Photo,Location) VALUES ("${FirstName}","${MidleName}","${LastName}","${Gender}","${WorkPostionName}","${PhoneNumber}","${Email}","${Mobile}","${Address}","${CostCenterName}","${Photo}","${WorkPlaceName}")`;
  con.query(sql, (err, responce) => {
    if (err) throw err;
    console.log("succsful");
  });
});
app.post("/postNewProperty", (req, res) => {
  const {
    Propertycategory,
    PropertySubcategory,
    PropertyType,
    Model,
    ShelfNumber,
    Mesurment,
    ItemType,
    Price,
    MinValue,
    MaxValue,
    ExpireDate,
    Photo,
    Describtion,
  } = req.body;
  console.log(req.body);
  const sql = `INSERT INTO property (First_Name,Middle_Name,Last_Name,Sex,Job_Title,Phone,Email,Moblie,Address,Department,Photo,Location) VALUES ("${Propertycategory}","${PropertySubcategory}","${PropertyType}","${Model}","${ShelfNumber}","${Mesurment}","${ItemType}","${Price}","${MinValue}","${MaxValue}","${ExpireDate}","${Photo}","${Describtion}")`;
  con.query(sql, (err, responce) => {
    if (err) throw err;
    console.log("succsful");
  });
});
app.post("/postNewVechlies", (req, res) => {
  const {
    VehicleType,
    VehicleModel,
    VehcileYear,
    MoterNumber,
    Silnder,
    Chassis,
    PlateNumber,
    DateOfPurchase,
    Capacity,
    TypeofGas,
    OwenerIdNumber,
    Describtion,
  } = req.body;
  console.log(req.body);
  const sql = `INSERT INTO vehicles (Brand,Model,Year,Engine,Cylinder_Capacity,Chassis_Number,Plate_Number,Purchased_Date,Load_Capacity,Fuel_Type,Ownership_ID,Status_Description) VALUES ("${VehicleType}","${VehicleModel}","${VehcileYear}","${MoterNumber}","${Silnder}","${Chassis}","${PlateNumber}","${DateOfPurchase}","${Capacity}","${TypeofGas}","${OwenerIdNumber}","${Describtion}")`;
  con.query(sql, (err, responce) => {
    if (err) throw err;
    console.log("succsful");
  });
});
app.post("/AddOffice", (req, res) => {
  const { officeName, Code, Description } = req.body;
  const sql = `INSERT INTO bureaus (Bureau_Name,Code,Description) VALUES ("${officeName}","${Code}","${Description}")`;
  con.query(sql, (err, responce) => {
    if (err) throw err;
    console.log("succsful");
  });
});
app.post("/AddDepartment", (req, res) => {
  const { officeName, Department, DepartmentType, Description } = req.body;
  const sql = `INSERT INTO departments (Offices_Name,Offices_Type,Bureau,Description) VALUES ("${Department}","${DepartmentType}","${officeName}","${Description}")`;
  con.query(sql, (err, responce) => {
    if (err) throw err;
    console.log("succsful");
  });
});
app.post("/AddDepartmentType", (req, res) => {
  const { departmentType } = req.body;
  const sql = `INSERT INTO department_types (Type_Name) VALUES ("${departmentType}")`;
  con.query(sql, (err, responce) => {
    if (err) throw err;
    console.log("succsful");
  });
});

app.listen(5000);
