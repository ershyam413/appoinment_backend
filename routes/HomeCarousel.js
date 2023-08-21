const { GoogleSpreadsheet } = require("google-spreadsheet");
const express = require("express");
const fs = require("fs");
const { StatusDescription } = require("../classes/StatusDescription");
const { ResponseWrapper } = require("../classes/responseWrapper");
const router = express.Router();
const RESPONSES_SHEET_ID = "1LbiWn2FTsDOPJlyDFAhLMPO6-6-trotiGKPvMLuZj4M";
const CREDENTIALS = JSON.parse(
  fs.readFileSync("./config/western-well-396305-5d14ad187d68.json")
);

router.get("/carousel", async (req, res) => {
  try {
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    // use service account creds
    await doc.useServiceAccountAuth({
      client_email: CREDENTIALS.client_email,
      private_key: CREDENTIALS.private_key,
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0];

    // Get all the rows
    let rows = await sheet.getRows();

    if (rows?.length === 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(201);
      s6tatusDescription.setStatusMessage("No Data Found");
      return res.status(200).json({ responseWrapper });
    }

    const headerRow = await sheet.headerValues;
    if (rows?.length > 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(200);
      s6tatusDescription.setStatusMessage("Success");
      let data = [];

      for (let index = 0; index < rows.length; index++) {
        const element = rows[index];

        data.push(element["_rawData"]);
      }

      const arrayOfObjects = data.map((row) => {
        const obj = {};
        for (let i = 0; i < headerRow?.length; i++) {
          obj[headerRow[i]] = row[i];
        }
        return obj;
      });

      responseWrapper.setData(arrayOfObjects);
      res.status(200).json({ responseWrapper });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    const responseWrapper = new ResponseWrapper();
    const s6tatusDescription = new StatusDescription();
    responseWrapper.setStatusDescription(s6tatusDescription);
    s6tatusDescription.setStatusCode(500);
    s6tatusDescription.setStatusMessage("Internal Server Error");
    res.status(500).json(responseWrapper);
  }
});

router.get("/smallCarousel", async (req, res) => {
  try {
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    // use service account creds
    await doc.useServiceAccountAuth({
      client_email: CREDENTIALS.client_email,
      private_key: CREDENTIALS.private_key,
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[1];

    // Get all the rows
    let rows = await sheet.getRows();

    if (rows?.length === 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(201);
      s6tatusDescription.setStatusMessage("No Data Found");
      return res.status(200).json({ responseWrapper });
    }
    const headerRow = await sheet.headerValues;
    if (rows?.length > 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(200);
      s6tatusDescription.setStatusMessage("Success");

      let data = [];

      for (let index = 0; index < rows.length; index++) {
        const element = rows[index];

        data.push(element["_rawData"]);
      }

      const arrayOfObjects = data.map((row) => {
        const obj = {};
        for (let i = 0; i < headerRow?.length; i++) {
          obj[headerRow[i]] = row[i];
        }
        return obj;
      });

      responseWrapper.setData(arrayOfObjects);
      return res.status(200).json({ responseWrapper });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    const responseWrapper = new ResponseWrapper();
    const s6tatusDescription = new StatusDescription();
    responseWrapper.setStatusDescription(s6tatusDescription);
    s6tatusDescription.setStatusCode(500);
    s6tatusDescription.setStatusMessage("Internal Server Error");
    res.status(500).json(responseWrapper);
  }
});
router.get("/services", async (req, res) => {
  try {
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    // use service account creds
    await doc.useServiceAccountAuth({
      client_email: CREDENTIALS.client_email,
      private_key: CREDENTIALS.private_key,
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[2];

    // Get all the rows
    let rows = await sheet.getRows();

    if (rows?.length === 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(201);
      s6tatusDescription.setStatusMessage("No Data Found");
      return res.status(200).json({ responseWrapper });
    }

    const headerRow = await sheet.headerValues;

    if (rows?.length > 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(200);
      s6tatusDescription.setStatusMessage("Success");
      let data = [];

      for (let index = 0; index < rows.length; index++) {
        const element = rows[index];

        data.push(element["_rawData"]);
      }

      const arrayOfObjects = data.map((row) => {
        const obj = {};
        for (let i = 0; i < headerRow?.length; i++) {
          obj[headerRow[i]] = row[i];
        }
        return obj;
      });

      responseWrapper.setData(arrayOfObjects);
      res.status(200).json({ responseWrapper });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    const responseWrapper = new ResponseWrapper();
    const s6tatusDescription = new StatusDescription();
    responseWrapper.setStatusDescription(s6tatusDescription);
    s6tatusDescription.setStatusCode(500);
    s6tatusDescription.setStatusMessage("Internal Server Error");
    res.status(500).json(responseWrapper);
  }
});
router.get("/whychoose", async (req, res) => {
  try {
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    // use service account creds
    await doc.useServiceAccountAuth({
      client_email: CREDENTIALS.client_email,
      private_key: CREDENTIALS.private_key,
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[6];

    // Get all the rows
    let rows = await sheet.getRows();

    if (rows?.length === 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(201);
      s6tatusDescription.setStatusMessage("No Data Found");
      return res.status(200).json({ responseWrapper });
    }

    const headerRow = await sheet.headerValues;
    if (rows?.length > 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(200);
      s6tatusDescription.setStatusMessage("Success");
      let data = [];

      for (let index = 0; index < rows.length; index++) {
        const element = rows[index];

        data.push(element["_rawData"]);
      }

      const arrayOfObjects = data.map((row) => {
        const obj = {};
        for (let i = 0; i < headerRow?.length; i++) {
          obj[headerRow[i]] = row[i];
        }
        return obj;
      });

      responseWrapper.setData(arrayOfObjects);
      res.status(200).json({ responseWrapper });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    const responseWrapper = new ResponseWrapper();
    const s6tatusDescription = new StatusDescription();
    responseWrapper.setStatusDescription(s6tatusDescription);
    s6tatusDescription.setStatusCode(500);
    s6tatusDescription.setStatusMessage("Internal Server Error");
    res.status(500).json(responseWrapper);
  }
});
router.get("/experts", async (req, res) => {
  try {
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    // use service account creds
    await doc.useServiceAccountAuth({
      client_email: CREDENTIALS.client_email,
      private_key: CREDENTIALS.private_key,
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[7];

    // Get all the rows
    let rows = await sheet.getRows();

    if (rows?.length === 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(201);
      s6tatusDescription.setStatusMessage("No Data Found");
      return res.status(200).json({ responseWrapper });
    }

    const headerRow = await sheet.headerValues;
    if (rows?.length > 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(200);
      s6tatusDescription.setStatusMessage("Success");
      let data = [];

      for (let index = 0; index < rows.length; index++) {
        const element = rows[index];

        data.push(element["_rawData"]);
      }

      const arrayOfObjects = data.map((row) => {
        const obj = {};
        for (let i = 0; i < headerRow?.length; i++) {
          obj[headerRow[i]] = row[i];
        }
        return obj;
      });

      responseWrapper.setData(arrayOfObjects);
      res.status(200).json({ responseWrapper });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    const responseWrapper = new ResponseWrapper();
    const s6tatusDescription = new StatusDescription();
    responseWrapper.setStatusDescription(s6tatusDescription);
    s6tatusDescription.setStatusCode(500);
    s6tatusDescription.setStatusMessage("Internal Server Error");
    res.status(500).json(responseWrapper);
  }
});
router.get("/consulting", async (req, res) => {
  try {
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    // use service account creds
    await doc.useServiceAccountAuth({
      client_email: CREDENTIALS.client_email,
      private_key: CREDENTIALS.private_key,
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[9];

    // Get all the rows
    let rows = await sheet.getRows();

    if (rows?.length === 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(201);
      s6tatusDescription.setStatusMessage("No Data Found");
      return res.status(200).json({ responseWrapper });
    }

    const headerRow = await sheet.headerValues;
    if (rows?.length > 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(200);
      s6tatusDescription.setStatusMessage("Success");
      let data = [];

      for (let index = 0; index < rows.length; index++) {
        const element = rows[index];

        data.push(element["_rawData"]);
      }

      const arrayOfObjects = data.map((row) => {
        const obj = {};
        for (let i = 0; i < headerRow?.length; i++) {
          obj[headerRow[i]] = row[i];
        }
        return obj;
      });

      responseWrapper.setData(arrayOfObjects);
      res.status(200).json({ responseWrapper });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    const responseWrapper = new ResponseWrapper();
    const s6tatusDescription = new StatusDescription();
    responseWrapper.setStatusDescription(s6tatusDescription);
    s6tatusDescription.setStatusCode(500);
    s6tatusDescription.setStatusMessage("Internal Server Error");
    res.status(500).json(responseWrapper);
  }
});
router.get("/experience", async (req, res) => {
  try {
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    // use service account creds
    await doc.useServiceAccountAuth({
      client_email: CREDENTIALS.client_email,
      private_key: CREDENTIALS.private_key,
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[4];

    // Get all the rows
    let rows = await sheet.getRows();

    if (rows?.length === 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(201);
      s6tatusDescription.setStatusMessage("No Data Found");
      return res.status(200).json({ responseWrapper });
    }

    const headerRow = await sheet.headerValues;
    if (rows?.length > 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(200);
      s6tatusDescription.setStatusMessage("Success");
      let data = [];

      for (let index = 0; index < rows.length; index++) {
        const element = rows[index];

        data.push(element["_rawData"]);
      }

      const arrayOfObjects = data.map((row) => {
        const obj = {};
        for (let i = 0; i < headerRow?.length; i++) {
          obj[headerRow[i]] = row[i];
        }
        return obj;
      });

      responseWrapper.setData(arrayOfObjects);
      res.status(200).json({ responseWrapper });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    const responseWrapper = new ResponseWrapper();
    const s6tatusDescription = new StatusDescription();
    responseWrapper.setStatusDescription(s6tatusDescription);
    s6tatusDescription.setStatusCode(500);
    s6tatusDescription.setStatusMessage("Internal Server Error");
    res.status(500).json(responseWrapper);
  }
});
router.get("/testimonial", async (req, res) => {
  try {
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    const timestamp = new Date().toISOString();
    // use service account creds
    await doc.useServiceAccountAuth({
      client_email: CREDENTIALS.client_email,
      private_key: CREDENTIALS.private_key,
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[5];

    // Get all the rows
    let rows = await sheet.getRows();

    if (rows?.length === 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(201);
      s6tatusDescription.setStatusMessage("No Data Found");
      return res.status(200).json({ responseWrapper });
    }

    const headerRow = await sheet.headerValues;
    if (rows?.length > 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(200);
      s6tatusDescription.setStatusMessage("Success");
      let data = [];

      for (let index = 0; index < rows.length; index++) {
        const element = rows[index];

        data.push(element["_rawData"]);
      }

      const arrayOfObjects = data.map((row) => {
        const obj = {};
        for (let i = 0; i < headerRow?.length; i++) {
          obj[headerRow[i]] = row[i];
        }
        return obj;
      });

      responseWrapper.setData(arrayOfObjects);
      res.status(200).json({ responseWrapper });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    const responseWrapper = new ResponseWrapper();
    const s6tatusDescription = new StatusDescription();
    responseWrapper.setStatusDescription(s6tatusDescription);
    s6tatusDescription.setStatusCode(500);
    s6tatusDescription.setStatusMessage("Internal Server Error");
    res.status(500).json(responseWrapper);
  }
});
router.post("/contactus", async (req, res) => {
  try {
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    // use service account creds
    await doc.useServiceAccountAuth({
      client_email: CREDENTIALS.client_email,
      private_key: CREDENTIALS.private_key,
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[3];

    // Get all the rows
    await sheet.addRow(req.body);

    res.status(201).json({ message: "Data added successfully" });
  } catch (error) {
    console.error("Error adding data:", error);
    res.status(500).json({ error: "An error occurred while adding data" });
  }
});
router.post("/getmail", async (req, res) => {
  try {
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    // use service account creds
    await doc.useServiceAccountAuth({
      client_email: CREDENTIALS.client_email,
      private_key: CREDENTIALS.private_key,
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[7];

    // Get all the rows
    await sheet.addRow(req.body);

    res.status(201).json({ message: "Email added successfully" });
  } catch (error) {
    console.error("Error adding data:", error);
    res.status(500).json({ error: "An error occurred while adding data" });
  }
});
router.get("/updates", async (req, res) => {
  try {
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    const timestamp = new Date().toISOString();
    // use service account creds
    await doc.useServiceAccountAuth({
      client_email: CREDENTIALS.client_email,
      private_key: CREDENTIALS.private_key,
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[9];

    // Get all the rows
    let rows = await sheet.getRows();

    if (rows?.length === 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(201);
      s6tatusDescription.setStatusMessage("No Data Found");
      return res.status(200).json({ responseWrapper });
    }

    const headerRow = await sheet.headerValues;
    if (rows?.length > 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(200);
      s6tatusDescription.setStatusMessage("Success");
      let data = [];

      for (let index = 0; index < rows.length; index++) {
        const element = rows[index];

        data.push(element["_rawData"]);
      }

      const arrayOfObjects = data.map((row) => {
        const obj = {};
        for (let i = 0; i < headerRow?.length; i++) {
          obj[headerRow[i]] = row[i];
        }
        return obj;
      });

      responseWrapper.setData(arrayOfObjects);
      res.status(200).json({ responseWrapper });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    const responseWrapper = new ResponseWrapper();
    const s6tatusDescription = new StatusDescription();
    responseWrapper.setStatusDescription(s6tatusDescription);
    s6tatusDescription.setStatusCode(500);
    s6tatusDescription.setStatusMessage("Internal Server Error");
    res.status(500).json(responseWrapper);
  }
});
router.get("/counter", async (req, res) => {
  try {
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    const timestamp = new Date().toISOString();
    // use service account creds
    await doc.useServiceAccountAuth({
      client_email: CREDENTIALS.client_email,
      private_key: CREDENTIALS.private_key,
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[11];

    // Get all the rows
    let rows = await sheet.getRows();

    if (rows?.length === 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(201);
      s6tatusDescription.setStatusMessage("No Data Found");
      return res.status(200).json({ responseWrapper });
    }

    const headerRow = await sheet.headerValues;
    if (rows?.length > 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(200);
      s6tatusDescription.setStatusMessage("Success");
      let data = [];

      for (let index = 0; index < rows.length; index++) {
        const element = rows[index];

        data.push(element["_rawData"]);
      }

      const arrayOfObjects = data.map((row) => {
        const obj = {};
        for (let i = 0; i < headerRow?.length; i++) {
          obj[headerRow[i]] = row[i];
        }
        return obj;
      });

      responseWrapper.setData(arrayOfObjects);
      res.status(200).json({ responseWrapper });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    const responseWrapper = new ResponseWrapper();
    const s6tatusDescription = new StatusDescription();
    responseWrapper.setStatusDescription(s6tatusDescription);
    s6tatusDescription.setStatusCode(500);
    s6tatusDescription.setStatusMessage("Internal Server Error");
    res.status(500).json(responseWrapper);
  }
});
router.get("/navcontent", async (req, res) => {
  try {
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    const timestamp = new Date().toISOString();
    // use service account creds
    await doc.useServiceAccountAuth({
      client_email: CREDENTIALS.client_email,
      private_key: CREDENTIALS.private_key,
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[10];

    // Get all the rows
    let rows = await sheet.getRows();

    if (rows?.length === 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(201);
      s6tatusDescription.setStatusMessage("No Data Found");
      return res.status(200).json({ responseWrapper });
    }

    const headerRow = await sheet.headerValues;
    if (rows?.length > 0) {
      const responseWrapper = new ResponseWrapper();
      const s6tatusDescription = new StatusDescription();
      responseWrapper.setStatusDescription(s6tatusDescription);
      s6tatusDescription.setStatusCode(200);
      s6tatusDescription.setStatusMessage("Success");
      let data = [];

      for (let index = 0; index < rows.length; index++) {
        const element = rows[index];

        data.push(element["_rawData"]);
      }

      const arrayOfObjects = data.map((row) => {
        const obj = {};
        for (let i = 0; i < headerRow?.length; i++) {
          obj[headerRow[i]] = row[i];
        }
        return obj;
      });

      responseWrapper.setData(arrayOfObjects);
      res.status(200).json({ responseWrapper });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    const responseWrapper = new ResponseWrapper();
    const s6tatusDescription = new StatusDescription();
    responseWrapper.setStatusDescription(s6tatusDescription);
    s6tatusDescription.setStatusCode(500);
    s6tatusDescription.setStatusMessage("Internal Server Error");
    res.status(500).json(responseWrapper);
  }
});

module.exports = router;
