class StatusDescription {
  constructor() {}
  getStatusCode() {
    return this.statusCode;
  }
  getStatusMessage() {
    return this.statusMessage;
  }
  setStatusCode(statusCode) {
    this.statusCode = statusCode;
  }
  setStatusMessage(statusMessage) {
    this.statusMessage = statusMessage;
  }
  statusCode;
  statusMessage;
}

module.exports = { StatusDescription };
