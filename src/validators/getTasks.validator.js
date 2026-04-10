const{ query}= require("express-validator");
const getTaskvalidator=[
    query("limit","limit must be a valid int").optional().isInt(),
    query("pagr","page must be a valid int").optional().isInt().toInt(),
    query("order","order must be a valid of['asc','dsc']").optional().isInt(["asc","dsc"]),

];

module.exports=getTaskvalidator;