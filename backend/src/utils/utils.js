const JWT = require("jsonwebtoken");
const ExcelJS = require("exceljs");

const generateResetToken = (id, email, expiresIn = "10m") => {
  return JWT.sign({ id, email }, process.env.JWT_SECRET, { expiresIn });
};

const downloadExcel = async (data, res) => {

  console.log("data is --->",data);
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("MyData");

  // Define base columns
  let fileName = "Response";
  const cols = [
    { header: "S_no", key: "serial_no", width: 8 },
    { header: "Panna Pramukh", key: "panna_pramukh", width: 20 },
    { header: "Status", key: "status", width: 15 },
    { header: "Remark", key: "remark", width: 30 },
    { header: "Response Date", key: "response_date", width: 30 },
    { header: "User", key: "user", width: 20 },
  ];

  // Add dynamic response columns based on the first document
  if (data.length > 0) {
    console.log(data[0].survey_id.name)
    fileName = data[0].survey_id.name.split(' ').join('_');
    data[0].responses.forEach((response) => {
      cols.push({
        header: response.question, // Column header from the question
        key: response.question,    // Use the question as the key
        width: 30,
      });
    });
  }

  // Assign columns to the worksheet
  worksheet.columns = cols;

  worksheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true }; // Apply bold style to each header cell
  });

  // Add rows dynamically
  data.forEach((item,index) => {
    const row = {
      serial_no: index+1,
      panna_pramukh: item.panna_pramukh_assigned ?  item.panna_pramukh_assigned.name : "N/A",
      status: item.contacted ? "Contacted" : "Not Contacted",
      remark: item.remark || "No Remark",
      response_date: item.updatedAt || item.createdAt || "N/A",
      user: item.user_id?.name || "Unknown",
    };

    // Populate response answers in the corresponding columns
    item.responses.forEach((response) => {
      row[response.question] = response.response || "No Response";
    });

    worksheet.addRow(row);
  });

  // Set response headers for file download
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=${fileName}.xlsx`
  );

  // Stream the workbook to the response
  await workbook.xlsx.write(res);
  res.end();
};

module.exports = {
  generateResetToken,
  downloadExcel,
};
