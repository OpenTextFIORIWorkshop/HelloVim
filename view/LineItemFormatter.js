jQuery.sap.declare("HelloVim.view.LineItemFormatter");
   
HelloVim.view.LineItemFormatter = { 
    
    	getCostAssignmentText: function(sAufnrTxt, sKostlTxt, sWbsElement) {
		
		var oBundle = this.getModel("i18n").getResourceBundle();
		var sText = "";
		
		if (sAufnrTxt) {
		    sText = oBundle.getText("LINE_ITEM_FORMATTER_INTERNAL_ORDER", [sAufnrTxt]);
		}
	    if (sKostlTxt) {
		    sText = oBundle.getText("LINE_ITEM_FORMATTER_COST_CENTER", [sKostlTxt]);
		}
		if (sWbsElement) {
		    sText = oBundle.getText("LINE_ITEM_FORMATTER_PROJECT", [sWbsElement]);
		}
		
		return sText;
	}
    
};