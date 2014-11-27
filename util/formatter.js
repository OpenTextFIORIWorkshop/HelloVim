jQuery.sap.declare("HelloVim.util.formatter");
jQuery.sap.require("sap.ca.ui.model.format.DateFormat");
jQuery.sap.require("sap.ca.ui.model.format.NumberFormat");

HelloVim.util.formatter = {
  formatDate:function(iDate){
      //var sIntermediate = iDate || new Date();
        return iDate || "27.11.2014";
  }  
};