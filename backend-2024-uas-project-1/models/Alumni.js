// import database
class Alumni {
  static async find() {
    return mongoose.model('Alumni', alumniSchema).find();
  }

  static async findById(id) {
    return mongoose.model('Alumni', alumniSchema).findById(id);
  }

  static async findByIdAndUpdate(id, data, options) {
    return mongoose.model('Alumni', alumniSchema).findByIdAndUpdate(id, data, options);
  }

  static async findByIdAndDelete(id) {
    return mongoose.model('Alumni', alumniSchema).findByIdAndDelete(id);
  }

  static async create(data) {
    const Model = mongoose.model('Alumni', alumniSchema);
    const alumni = new Model(data);
    return alumni.save();
  }
}

// Export class Alumni
module.exports = Alumni;
