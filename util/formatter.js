jQuery.sap.declare("HelloVim.util.formatter");
jQuery.sap.require("sap.ca.ui.model.format.DateFormat");
jQuery.sap.require("sap.ca.ui.model.format.NumberFormat");

HelloVim.util.formatter = {
  formatDate:function(iDate){
        return iDate || new Date().toDateString();
  },
  
  formatIcon:function(iAmount){
      var icon;
      icon = "sap-icon://survey";
      var option = {
          groupingSeparator: ".", 
          decimalSeparator:","};
      var formater = sap.ui.core.format.NumberFormat.getFloatInstance(option);
      if (formater.parse(iAmount) > 20000) { icon = "sap-icon://warning2"; }
      return icon;
  }
};
