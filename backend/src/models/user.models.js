const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.hashPassword = async function () {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
};

userSchema.pre("save", async function(next){
  if(this.isModified()){
    await this.hashPassword();
  }
  next();
})


userSchema.methods.validatePassword = async function (candidatepw) {
  return await bcrypt.compare(candidatepw, this.password);
};
const User = mongoose.model("User", userSchema);
module.exports = User;
