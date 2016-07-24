//
// Copyright (C) 2016 Changzhou TwistSnake Co.,Ltd
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

const AV = require('leanengine');
const util = require('util');
// const filter = require('feathers-query-filters');

// Create the service.
class Service {

  constructor(options) {
    if (!options) {
      throw new Error('LeanStorage options have to be provided');
    }

    if (!options.Model) {
      throw new Error('LeanStorage datastore `Model` needs to be provided');
    }

    this.Model = options.Model;
    console.log(this.Model);
    this.id = options.id || '_id';
    this.paginate = options.paginate || {};
  }

  extend(obj) {
    console.log(`extend: obj:${obj}`);
    return Proto.extend(obj, this);
  }

  find(params) {
    console.log(`find: params:${util.inspect(params)}`);
    var query = new AV.Query(this.Model);
    return query.find();
  }

  get(id, params) {
    console.log(`get: id:${id}, params:${util.inspect(params)}`);
    return null;
  }

  create(data) {
    console.log(`create: data:${data}`);
    return null;
  }

  patch(id, data, params) {
    console.log(`patch: id:${id}, data:${data}, params:${params}`);
    return null;
  }

  update(id, data, params) {
    console.log(`update: id:${id}, data:${data}, params:${params}`);
    return null;
  }

  remove(id, params) {
    console.log(`remove: id:${id}, params:${params}`);
    return null;
  }
}

module.exports = function (options) {
  return new Service(options);
};
