const User = require("../model/authModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtToken = process.env.JWT_S;

exports.registerUser = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, userClass, password } = req.body;

    const userEamilAllreadyExixt = await User.findOne({ email });
    const userPhoneNumberAllreadyExixt = await User.findOne({ phoneNumber });

    if (userEamilAllreadyExixt || userPhoneNumberAllreadyExixt) {
      return res.status(400).json({
        msg: "user allready esixt",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      phoneNumber,
      userClass,
      password: hashPassword,
    });

    const token = jwt.sign({
      id: newUser._id,
    },
      jwtToken
    );

    res.cookie("token", token);

    res.status(201).json({
      msg: "user register successfully",
      userData: {
        _id: newUser._id,
        email: newUser.email,
        fullName: newUser.fullName,
        userClass: newUser.userClass,
        token,
      },
    });
  }
  catch(error){
    next(error);
  }
}

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const myUser = await User.findOne({
      email,
    });

    if (!myUser) {
      return res.status(400).json({
        msg: "invalid email or password",
      });
    }

    const invalidPassword = await bcrypt.compare(password, myUser.password);

    if (!invalidPassword) {
      return res.status(400).json({
        msg: "invalid email or password",
      });
    }

    const token = jwt.sign({
      id: myUser._id,
    },
      jwtToken
    );

    res.cookie("token", token);

    res.status(201).json({
      msg: "user login successfully",
      userData: {
        _id: myUser._id,
        email: myUser.email,
        fullName: myUser.fullName,
        userClass: myUser.userClass,
        scoreHistory: myUser.scoreHistory,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.logOutUsre = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      msg: "user logout successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.dashboard = async (req, res) => {
  try {
    const { email } = req.body;

    const myUser = await User.findOne({
      email,
    });

    if (!myUser) {
      return res.status(400).json({
        msg: "user not valid",
      });
    }

    res.status(201).json({
      msg: "user data",
      userData: {
        _id: myUser._id,
        email: myUser.email,
        fullName: myUser.fullName,
        userClass: myUser.userClass,
        scoreHistory: myUser.scoreHistory,
        phoneNumber: myUser.phoneNumber,
        role: myUser.role,
      },
    });
  } catch (error) {
    next(error);
  }
};
exports.UsersFetchingData = async (req, res, next) => {
  try {
    const { role } = req.body;
    const Users = await User.find({ role: role });
    res.json({
      message: "Fetched",
      Users,
    });
  } catch (error) {
    next(error);
  }
};

exports.dashboard = async (req, res) => {
  const { email } = req.body;

  const myUser = await User.findOne({
    email,
  });

  if (!myUser) {
    return res.status(400).json({
      msg: "user not valid",
    });
  }

  res.status(201).json({
    msg: "user data",
    userData: {
      _id: myUser._id,
      email: myUser.email,
      fullName: myUser.fullName,
      userClass: myUser.userClass,
      scoreHistory: myUser.scoreHistory,
      phoneNumber: myUser.phoneNumber,
      role: myUser.role,
    },
  });
};
exports.Deleteuser = async (req, res, next) => {
  try {
    const deleteuser = await User.findByIdAndDelete(req.body._id);
    if (!deleteuser) {
      return res.status(404).json({ msg: "User Not Found" });
    } else {
      res.status(200).json({ msg: "User Delete Successfully" });
    }
  } catch (error) {
    next(error)
  }
}
exports.UsersFetchingData = async (req, res, next) => {
  try {
    const { role } = req.body;
    const Users = await User.find({ role: role });
    res.json({
      message: 'Fetched',
      Users
    });
  } catch (error) {
    next(error);
  }
}


exports.updateUser = async (req, res) => {
    const {_id ,...updatedata} = req.body ;
    if (!_id) {
        return res.status(400).json('Fiead Id is require for process') 
    }   

    try {
        const updateUser = await User.findByIdAndUpdate(_id , updatedata,{new :true})

        if (!updateUser) {
            return res.status(400).json({message : "User Not Found"})
        }
        res.json(updateUser)
    } catch (error) {
        console.log(error);
        
    }
}