const { StatusCodes, getReasonPhrase } = require("http-status-codes");

function responseFormatter(req, res, next) {

  const originalJson = res.json;


  res.json = (data) => {

    const statusCode = res.statusCode !== 200 ? res.statusCode : StatusCodes.OK;

    const response = {
      status: statusCode >= 200 && statusCode < 300 ? "success" : "error",
      statusCode: statusCode,
      message: getReasonPhrase(res.statusCode),
      data: statusCode >= 200 && statusCode < 300 ? data : null,
      error: statusCode >= 200 && statusCode < 300 ? null : data,
    };

    originalJson.call(res, response);
  };

  next();
}

module.exports = responseFormatter;