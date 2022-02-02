const Visitor = require("../models/visitorModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");

exports.createVisitor = catchAsyncError(async (req, res, next) => {
  const visitor = await Visitor.create(req.body);
  res.status(201).json({
    success: true,
    visitor,
  });
});
