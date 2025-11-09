import mongoose from 'mongoose';

const UserData = new mongoose.Schema({
  userData: {
    _id: String,
    username: String,
    email: String,
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        number: String
    },
    phone: String,
    wishlist: {
        products: Array,
    },
  }
});

const user = mongoose.model('User', UserData, "users");

export default user;