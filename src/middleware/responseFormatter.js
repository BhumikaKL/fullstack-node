const { getReasonPhrase } = require("http-status-codes");

function responseFormatter(req, res, next) {
  // Store original res.json
  const originalJson = res.json;

  // Override res.json
  res.json = function (data) {
    const isSuccess = res.statusCode >= 200 && res.statusCode < 300;

    const response = {
      status: isSuccess ? "success" : "error",
      statusCode: res.statusCode,
      message: getReasonPhrase(res.statusCode),
      data: isSuccess ? data : null,
      error: isSuccess ? null : data,
    };

    // Call original res.json with formatted response
    return originalJson.call(this, response);
  };

  next();
}

module.exports = responseFormatter;