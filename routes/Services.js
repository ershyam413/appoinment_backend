const { GoogleSpreadsheet } = require("google-spreadsheet");
const express = require("express");
const fs = require("fs");
const { StatusDescription } = require("../classes/StatusDescription");
const { ResponseWrapper } = require("../classes/responseWrapper");
const router = express.Router();
const RESPONSES_SHEET_ID = "113orQ6Yp7vKmtBl_b-eiD5ZCzIKSCX2ZMejnZkfM9dI";
const CREDENTIALS = JSON.parse(
  fs.readFileSync("./config/western-well-396305-ceff8b5e06f8.json")
);

router.get("/all", async (req, res) => {
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
