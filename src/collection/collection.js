
// in model index
// const Collection = require('./collection/collection');

// const authorCollection = new Collection(userModel);
// module.exports ={
//   authorCollection
// }


'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  // read all or one 
  async read(id) {
    console.log(this.model)
    let record = null;
    if (id) {
      record = await this.model.findOne({ where: { id: id } });
    } else {
      record = await this.model.findAll();
    }
    return record;
    
  }

// Create new Record
async create(obj) {
    try {
      let record = await this.model.create(obj);
      return record;
    } catch (e) {
      console.log(`Error while creating a new record: ${this.model.name}`);
      return e;
    }
  }

  // Update
  async update(id, obj) {
    try {
      if (!id) throw new Error(`The id you send is not exists!!!`)
      const record = await this.model.update(obj, { where: { id } });
      const updatedRecord = await this.read(id)
      return updatedRecord;

    } catch (e) {
      console.log(`Error while updating a record: ${this.model.name}`);
      return e;
    }
  }

  // Delete
  async delete(id) {
    try {
      if (!id) throw new Error(`The id you send is not exists!!!`)
      
      const record = await this.read(id)
      console.log(record)
      const deletedRecord = await this.model.destroy({ where: { id } });
      return record;

    } catch (e) {
      console.log(`Error while deleting a record: ${this.model.name}`);
      return e;
    }
  }

}

  module.exports=Collection;











