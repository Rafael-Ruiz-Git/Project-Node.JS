const { StatusCodes, getReasonPhrase } = require("http-status-codes");

function responseFormatter(req, res, next) {

  const originalJson = res.json;


  res.json = (data) => {

    const statusCode = res.statusCode !== 200 ? res.statusCode : StatusCodes.OK;

    const response = {
      status: statusCode >= 200 && statusCode < 300 ? "success" : "error",
      statusCode: res.statusCode,
      message: getReasonPhrase(res.statusCode),
      // data: res.statusCode >= 200 && res.statusCode < 300 ? data : null,
      // error: res.statusCode >= 200 && res.statusCode < 300 ? null : data,
    };

    if(res.statusCode >= 200 && res.statusCode < 300) {
      response.data = data.pagination ? data.data : data;
    }

    if(res.statusCode > 300 ){
      response.error = data;
    }

    if(data.pagination){
      response.pagination = data.pagination;
    }

    originalJson.call(res, response);
  };

  next();
}

module.exports = responseFormatter;