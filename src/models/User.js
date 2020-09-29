const mongoose = require('mongoose');
//const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const UserSchema = new mongoose.Schema({
  cpf: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false
  },
});

UserSchema.pre("save", async function hashPassword(next) {

  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash;

  next();
});

/*UserSchema.methods = {
  compareHash(hash) {
    return bcrypt.compare(hash, this.password);
  },

  generateToken() {
    return jwt.sign({ id: this.id }, "secret", {
      expiresIn: 86400
    });
  }
};*/

module.exports = mongoose.model('User', UserSchema);
