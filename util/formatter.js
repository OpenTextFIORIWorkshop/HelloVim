jQuery.sap.declare("HelloVim.util.formatter");
jQuery.sap.require("sap.ca.ui.model.format.DateFormat");
jQuery.sap.require("sap.ca.ui.model.format.NumberFormat");

HelloVim.util.formatter = {

	formatDate: function(date) {
		//return HelloVim.util.formatter_recentDateFormatter.format(date || new Date().toDateString());
		return date || new Date().toDateString();
	},

	formatIcon: function(iAmount) {
		var icon;
		icon = "sap-icon://survey";
		var option = {
			groupingSeparator: ".",
			decimalSeparator: ","
		};
		var formater = sap.ui.core.format.NumberFormat.getFloatInstance(option);
		if (formater.parse(iAmount) > 20000) {
			icon = "sap-icon://warning2";
		}
		return icon;
	},

	formatStatusText: function(status) {
		return status || "Open";
	},

	formatStatusType: function(status) {
		return status && "Warning" || "Success";
	},

	formatInvoiceDetailTitle: function(requester, key) {
		return HelloVim.util.formatter._getResourceBundle(this).getText("DETAIL_INVOICE_TITLE", [requester, key]);
	},

	//_recentDateFormatter: sap.ui.core.format.DateFormat.getDateInstance({style: "daysAgo"}),

	_getResourceBundle: function(control) {
		return control.getModel("i18n").getResourceBundle();
	},
	
	formatUserActionIcon: function(sAction) {
	    if(sAction === "A") {
	        return "accept";
	    }
	    else if(sAction === "F") {
	        return "action";
	    }
	    else if(sAction === "R") {
	        return "group";
	    }
	    else if(sAction === "P") {
	        return "activity-items";
	    }
	    else {
	        return "activity-individual";
	    }
	},

    formatTimestampDateTime: function(dTimestamp) {
        return Date.now();
    }

};
