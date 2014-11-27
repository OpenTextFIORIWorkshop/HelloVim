jQuery.sap.declare("HelloVim.util.formatter");
jQuery.sap.require("sap.ca.ui.model.format.DateFormat");
jQuery.sap.require("sap.ca.ui.model.format.NumberFormat");

HelloVim.util.formatter = {
  formatDate:function(iDate){
        return iDate || new Date().toDateString();
  }  
};