class ResponseWrapper {
  statusDescription;
  data;
  setStatusDescription(statusDescription) {
    this.statusDescription = statusDescription;
  }
  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
  getStatusDescription() {
    return this.statusDescription;
  }
}

module.exports = {
  ResponseWrapper,
};
