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
    methods: ["GET", "POST", "DELETE", "PUT"],
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
app.get("/serachEmployee", async (req, res) => {
  const { find } = req.query;
  const sql = `SELECT First_Name FROM employee WHERE First_Name LIKE '%${find}%' `;
  con.query(sql, (err, data) => {
    if (data.length > 0) res.send(data);
  });
});
app.get("/getSubClass", async (req, res) => {
  const { find } = req.query;
  if (find) {
    const sql = `SELECT * FROM Sub_Classification WHERE Sub_Classification_Name LIKE '%${find}%' OR Sub_Classification_Code LIKE '%${find}%'`;
    con.query(sql, (err, data) => {
      if (data.length > 0) {
        res.send(data);
      }
    });
  } else {
    const sql = `SELECT * FROM Sub_Classification`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  }
});
app.get("/getMeasurType", async (req, res) => {
  const { find } = req.query;
  if (find) {
    const sql = `SELECT * FROM unit WHERE Unit LIKE '%${find}%'`;
    con.query(sql, (err, data) => {
      if (data.length > 0) {
        res.send(data);
      }
    });
  } else {
    const sql = `SELECT * FROM unit`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  }
});
app.get("/getProperty", async (req, res) => {
  const { find } = req.query;
  if (find) {
    const sql = `SELECT * FROM property WHERE Name LIKE '%${find}%'OR Code LIKE '%${Code}%'`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  } else {
    const sql = `SELECT * FROM property`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  }
});
app.get("/getRareIncome", async (req, res) => {
  const { find } = req.query;
  if (find) {
    const sql = `SELECT * FROM received_property WHERE Received_Office_Name LIKE '%${find}%' AND Model = 'ሞዴል 19 ለ'`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  } else {
    const sql = `SELECT * FROM received_property WHERE Model = 'ሞዴል 19 ለ'`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  }
});
app.get("/getFixedIncome", async (req, res) => {
  const { find } = req.query;
  if (find) {
    const sql = `SELECT * FROM received_property WHERE Received_Office_Name LIKE '%${find}%' AND Model = 'ሞዴል 19 ሀ'`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  } else {
    const sql = `SELECT * FROM received_property WHERE Model = 'ሞዴል 19 ሀ'`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  }
});
app.get("/getUsedPropertyIncome", async (req, res) => {
  const { find } = req.query;
  if (find) {
    const sql = `SELECT * FROM received_property WHERE Received_Office_Name LIKE '%${find}%' AND Model = 'ሞዴል 19 ሐ'`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  } else {
    const sql = `SELECT * FROM received_property WHERE Model = 'ሞዴል 19 ሐ'`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  }
});
app.get("/getFixedCost", async (req, res) => {
  const { find } = req.query;
  if (find) {
    const sql = `SELECT * FROM issued_property WHERE Received_Office_Name LIKE '%${find}%' AND Model = 'ሞዴል 22 ሀ'`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  } else {
    const sql = `SELECT * FROM issued_property WHERE Model = 'ሞዴል 22 ሀ'`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  }
});
app.get("/getRareCost", async (req, res) => {
  const { find } = req.query;
  if (find) {
    const sql = `SELECT * FROM issued_property WHERE Received_Office_Name LIKE '%${find}%' AND Model = 'ሞዴል 22 ለ'`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  } else {
    const sql = `SELECT * FROM issued_property WHERE Model = 'ሞዴል 22 ለ'`;
    con.query(sql, (err, data) => {
      res.send(data);
    });
  }
});

app.get("/getPhoto", async (req, res) => {
  const { Email } = req.query;
  const sql = `SELECT Employee_ID FROM users WHERE  Email = ${Email}`;
  con.query(sql, (err, data) => {
    const Employe_ID = data[0].Employee_ID;
    con.query(
      `SELECT Photo FROM employee WHERE  ID = ${Employe_ID}`,
      (err, photo) => {
        return res.send(photo);
      }
    );
  });
});

app.get("/getEmployeeInfo", async (req, res) => {
  const { Email } = req.query;
  const sql = `SELECT Employee_ID FROM users WHERE  Email = ${Email};`;
  con.query(sql, (err, data) => {
    const Employe_ID = data[0].Employee_ID;
    con.query(
      `SELECT * FROM employee WHERE  ID = ${Employe_ID}`,
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.send(data);
        }
      }
    );
  });
});

app.post("/postNewFixedCost", async (req, res) => {
  const { PropertyType, Mesurment, Quantity, Price, Comment } = req.body;
  const sql = `INSERT INTO issued_property_details (Quantity,Unit_Cost,Property_Issued_ID,IPD_Office_Name,Remark) VALUES ("${Quantity}","${Price}", "${PropertyType}","${Comment}")`;
  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successful");
    }
  });
});
app.post("/postNewUsedPropertIncome", async (req, res) => {
  const { PropertyType, Mesurment, Quantity, Price, Comment } = req.body;
  const sql = `INSERT INTO received_property_details (Quantity,Unit_Cost,Property_Received_ID,RPD_Office_Name,Remark) VALUES ("${Quantity}","${Price}", "${PropertyType}","${Comment}")`;
  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successful");
    }
  });
});
app.post("/postNewFixedIncome", async (req, res) => {
  const { PropertyType, Mesurment, Quantity, Price, Comment } = req.body;
  const sql = `INSERT INTO received_property_details (Quantity,Unit_Cost,Property_Received_ID,RPD_Office_Name,Remark) VALUES ("${Quantity}","${Price}", "${PropertyType}","${Comment}")`;
  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successful");
    }
  });
});
app.post("/postNewRareIncome", async (req, res) => {
  const { PropertyType, Mesurment, Quantity, Price, Comment } = req.body;
  const sql = `INSERT INTO received_property_details (Quantity,Unit_Cost,Property_Received_ID,RPD_Office_Name,Remark) VALUES ("${Quantity}","${Price}", "${PropertyType}","${Comment}")`;
  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successful");
    }
  });
});
app.post("/postMeasurType", async (req, res) => {
  const { unit } = req.body;
  const sql = `INSERT INTO unit (Unit) VALUES ("${unit}")`;
  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successful");
    }
  });
});
app.post("/postSubClass", async (req, res) => {
  const { Name, Code, ClassId } = req.body;
  const sql = `INSERT INTO Sub_Classification (Sub_Classification_Name, Sub_Classification_Code, Classification_ID) VALUES ("${Name}","${Code}", "${ClassId}")`;
  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successful");
    }
  });
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
  const sql = `INSERT INTO property (Classification_ID,Sub_Classification_ID,Property_Type, Model,Shelf_Number, Unit,Category,Unit_Price,Reorder_Level,Target_Lavel, Expire_Date ,Attachment, Description)
   VALUES ("${Propertycategory}","${PropertySubcategory}","${PropertyType}","${Model}","${ShelfNumber}","${Mesurment}","${ItemType}","${Price}","${MinValue}","${MaxValue}","${ExpireDate}","${Photo}","${Describtion}")`;
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
app.delete("/deleteSubClass/:deleteID", (req, res) => {
  const Id = req.params.deleteID;
  const sql = `DELETE FROM Sub_Classification WHERE ID = ${Id}`;
  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success, deleted");
    }
  });
});
app.delete("/deletePropClass/:deletID", (req, res) => {
  const Id = req.params.deletID;
  const sql = `DELETE FROM classification WHERE ID =${Id}`;
  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success, deleted");
    }
  });
});
app.delete("/deleteOffice/:deletID", (req, res) => {
  const Id = req.params.deletID;
  const sql = `DELETE FROM bureaus WHERE ID =${Id}`;
  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success, deleted");
    }
  });
});
app.delete("/deleteDepartment/:deletID", (req, res) => {
  const Id = req.params.deletID;
  const sql = `DELETE FROM departments WHERE ID =${Id}`;
  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success, deleted");
    }
  });
});
app.delete("/deleteDepartmentsType/:deletID", (req, res) => {
  const Id = req.params.deletID;
  const sql = `DELETE FROM department_types WHERE ID =${Id}`;
  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success, deleted");
    }
  });
});
app.delete("/deleteEmployes/:deletID", (req, res) => {
  const Id = req.params.deletID;
  const sql = `DELETE FROM employee WHERE ID =${Id}`;
  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success, deleted");
    }
  });
});
app.delete("/deleteMeasurType/:deletID", (req, res) => {
  const Id = req.params.deletID;
  const sql = `DELETE FROM unit WHERE ID = ${Id}`;
  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success, deleted");
    }
  });
});
app.delete("/deleteProperty/:deleteID", (req, res) => {
  const Id = req.params.deleteID;
  const sql = `DELETE FROM property WHERE ID = ${Id}`;
  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success, deleted");
    }
  });
});

app.put("/EditDepartment", (req, res) => {
  const { id, Department, Description } = req.body;
  const sql = `UPDATE departments SET Offices_Name = "${Department}",  Description = "${Description}" WHERE ID = ${id}`;
  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success, Edited");
    }
  });
});

app.put("/EditEmployee", (req, res) => {
  const {
    id,
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
  const sql = `UPDATE employee SET First_Name = "${FirstName}",Middle_Name = "${MidleName}",Last_Name = "${LastName}" ,Sex = "${Gender}" , Job_Title = "${WorkPostionName}",Phone = "${PhoneNumber}",Email = "${Email}",Moblie = "${Mobile}",Address = "${Address}" ,Department = "${CostCenterName}",Photo = "${Photo}",Location = "${WorkPlaceName}"  WHERE ID = ${id}`;
  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success, Edited");
    }
  });
});
app.put("/EditProperty", (req, res) => {
  const {
    id,
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
  const sql = `UPDATE property SET Classification_ID = "${Propertycategory}", Sub_Classification_ID = "${PropertySubcategory}", Property_Type = "${PropertyType}" , Model = "${Model}" , Shelf_Number = "${ShelfNumber}",Unit = "${Mesurment}",Fixed_Classification_Code = "${ItemType}",Unit_Price = "${Price}", Reorder_Level = "${MinValue}" ,Target_Lavel = "${MaxValue}", Attachment = "${Photo}", Expire_Date = "${ExpireDate}",Description = "${Describtion}"  WHERE ID = ${id};`;
  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success, Edited");
    }
  });
});

app.listen(5000);
