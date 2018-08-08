/*
 ** JSON Schema representation of the application model
 */

const _ = require("lodash");

const schema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "sweEventModel",
  "type": "object",
  "properties": {
    "tenantId": {
      "type": "string",
      "minlength": 3,
      "maxLength": 64,
      "filterable": false, //custom attributes
      "sortable": false //custom attribute
    },
    "object": {
      "type": "object"
    },
    "wfInstanceId": {
      "type": "string",
      "minLength": 3,
      "filterable": true,
      "maxLength": 20
    },
    "wfInstanceStatus": {
      "type": "string",
      "filterable": true,
      "minLength": 3,
      "maxLength": 30
    },
    "wfEntity": {
      "type": "string",
      "minlength": 3,
      "maxlength": 20
    },
    "wfEntityAction": {
      "type": "string",
      "minLength": 3,
      "maxLength": 20
    },
    "query": {
      "type": "string",
      "filterable": true,
      "minLength": 1,
      "maxLength": 255
    },
    "comments": {
      "type": "string",
      "minLength": 5,
      "maxLength": 255
    },
    "wfEventDate": {
      "type": Date,
      "filterable": "false",
      "sortable": "true"
    },
    "eventStatus": {
      "type": "string"
    },
    "createdBy": {
      "type": "string"
    },
    "updatedBy": {
      "type": "string"
    },
    "createdDate": {
      "type": Date
    },
    "updatedDate": {
      "type": Date
    },
    "required": ["tenantId", "wfInstanceId", "wfEntity", "wfEntityAction", "query", "eventStatus", "createdBy", "createdDate", "wfInstanceStatus"]
  }
};

module.exports = schema;

filterAttributes = _.keys(_.pickBy(schema.properties, (a) => {
  return (a.filterable);
}));

module.exports.filterAttributes = filterAttributes;

sortableAttributes = _.keys(_.pickBy(schema.properties, (a) => {
  return (a.sortable);
}));

module.exports.sortableAttributes = sortableAttributes;