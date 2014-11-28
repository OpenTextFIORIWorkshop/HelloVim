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

	formatInvoiceDetailIntro: function(requester, key) {
	    key && (key = key.replace(/^0+/, ""));
		return HelloVim.util.formatter._getResourceBundle(this).getText(
		    "DETAIL_INVOICE_INTRO", [requester, key]);
	},

	formatInvoiceDetailTitle: function(requester, key) {
	    key && (key = key.replace(/^0+/, ""));
		return HelloVim.util.formatter._getResourceBundle(this).getText(
		    "DETAIL_INVOICE_TITLE", [requester, key]);
	},

	//_recentDateFormatter: sap.ui.core.format.DateFormat.getDateInstance({style: "daysAgo"}),

	_getResourceBundle: function(control) {
		return control.getModel("i18n").getResourceBundle();
	},
	
	formatUserActionText: function(sAction) {
	    if(sAction === "A") {
	        return "Approved";
	    }
	    else if(sAction === "F") {
	        return "Forwarded";
	    }
	    else if(sAction === "R") {
	        return "Rejected";
	    }
	    else if(sAction === "P") {
	        return "Created";
	    }
	    else {
	        return "";
	    }
	},

    formatTimestampDateTime: function(dTimestamp) {
        return Date.now();
    }

};
