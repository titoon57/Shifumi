export class Team {
    _id;
    name;
    country;
    logo;
  
    constructor(id, name, country, logo) {
      this._id = id;
      this.name = name;
      this.genre = country;
    }
  
    get _id() {
      return this.__id;
    }
  
    set _id(tmp) {
      this.__id = tmp;
    }
    
    get name() {
      return this._name;
    }
  
    set name(tmp) {
      this._name = tmp;
    }
  
    get country() {
      return this._country;
    }
  
    set country(tmp) {
      this._country = tmp;
    }
  
  }