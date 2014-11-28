jQuery.sap.declare("HelloVim.model.mockRequests");

HelloVim.model.mockRequests = {};

HelloVim.model.mockRequests.mockApprovePo = function() {
	return {
		// This mock request simulates the function import "ApprovePurchaseOrder",
		// which is triggered when the user chooses the "Approve" button.
		// It removes the approved purchase order from the mock data.
		method: "POST",
		path: new RegExp("ApprovePurchaseOrder\\?POId=(.*)"),
		response: HelloVim.model.mockRequests._deletePo
	};
};

HelloVim.model.mockRequests.mockRejectPo = function() {
	return {
		// This mock request simulates the function import "RejectPurchaseOrder",
		// which is triggered when the user chooses the "Reject" button.
		// It removes the rejected purchase order from the mock data.
		method: "POST",
		path: new RegExp("RejectPurchaseOrder\\?POId=(.*)"),
		response: HelloVim.model.mockRequests._deletePo
	};
};

HelloVim.model.mockRequests.getRequests = function() {
	return [HelloVim.model.mockRequests.mockApprovePo(),
	        HelloVim.model.mockRequests.mockRejectPo()
            ];
};

HelloVim.model.mockRequests._deletePo = function(oXhr, sUrlParams) {
	var sErrorTxt = "";
	var bError = false;
	// Extract purchase order ID from the URL parameters
	var sParams = decodeURIComponent(sUrlParams);
	var sPoId = sParams.substring(1, sParams.indexOf("&") - 1);

	// deletePo items - this also deletes the PO...
	var oResponseDeletePoItems = jQuery.sap.sjax({
		url: "/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders('" + sPoId + "')/PurchaseOrderItems",
		type: "DELETE"
	});
	if (!oResponseDeletePoItems.success) {
		sErrorTxt = "Removing purchase order items from mock data failed";
		bError = true;
	}

	if (bError) {
		oXhr.respond(400, null, sErrorTxt);
	} else {
		oXhr.respondJSON(200, {}, JSON.stringify({
			d: {
				results: []
			}
		}));
	}
};