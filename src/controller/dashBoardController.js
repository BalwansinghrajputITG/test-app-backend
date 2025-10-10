const { mongo } = require("mongoose");

const dashboardSchema = require("../model/dashboardModel");

const dashboard = require("../model/dashboardModel");

exports.postDashboardData = async (req, res, next) => {
  try {
    const { title, value, description } = req.body();

    const createDocument = new dashboard({ title, value, description });

    await createDocument.save();

    res.json({ msg: "document added successfully" });
  } catch (error) {
    next(error);
  }
};

exports.fetchDashboardData = async (req, res, next) => {
  try {
    const getData = req.find({});

    res.json({
      message: "Data fetched successfully",
      getData,
    });
  } catch (error) {
    next(error);
  }
};
exports.deleteDashboardData = async (req, res) => {
  try {
    const idforDeletion = req.body({ idfordelete: id });

    dashboardSchema.findByIdAndDelete(idforDeletion.idforDeletion);

    res.json({
      message: "document delete successfully",
      dashboardSchema,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { deleteDashboardData, fetchDashboardData, postDashboardData };
