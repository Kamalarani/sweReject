const debug = require("debug")("evolvus-swe:model:sweEvent");
const model = require("./sweEventSchema")
  .schema;
const _ = require("lodash");
const schema = require("../db/sweEventSchema");
const Dao = require("@evolvus/evolvus-mongo-dao").Dao;

const collection = new Dao("sweEvent", schema);

const validate = require("jsonschema")
  .validate;

module.exports.save = (tenantId, object) => {
  let result = _.merge(object, {
    "tenantId": tenantId
  });
  return collection.save(result)
};

module.exports.find = (tenantId, filter, orderby, skipCount, limit) => {
  let query = _.merge(filter, {
    "tenantId": tenantId
  });
  return collection.find(query, orderby, skipCount, limit);
};

module.exports.update = (tenantId, filter, object) => {
  let result = _.merge(filter, {
    "tenantId": tenantId
  });
  return collection.update(result, object)
};