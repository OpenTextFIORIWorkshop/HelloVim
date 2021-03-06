jQuery.sap.require("sap.m.MessageToast");

sap.ui.core.mvc.Controller.extend("HelloVim.view.Detail", {

	onInit: function() {
		this._view = this.getView();
		this._resources = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this._view))
			.getModel("i18n").getResourceBundle();
		this._router = sap.ui.core.UIComponent.getRouterFor(this);

		this._router.attachRouteMatched(this.onRouteMatched, this);
	},

	onRouteMatched: function(oEvent) {
		if (oEvent.getParameter("name") === "Detail") {
			var context = new sap.ui.model.Context(this._view.getModel(),
				"/" + oEvent.getParameter("arguments").contextPath);
			this._view.setBindingContext(context);
		}
	},

	onApproveWithComment: function(event) {
		var comment = prompt(this._resources.getText("DETAIL_APPROVE_COMMENTLABEL"));
		if (typeof comment === "string") {
			this._approveInvoice(comment);
		}
	},

	onApprove: function(event) {
		if (confirm(this._resources.getText("DETAIL_APPROVE_CONFIRMTEXT"))) {
			this._approveInvoice();
		}
	},

	onReject: function(event) {
		if (confirm(this._resources.getText("DETAIL_APPROVE_REJECTTEXT"))) {
			this._rejectInvoice();
		}
	},

	openActionSheet: function() {

		if (!this._oActionSheet) {
			this._oActionSheet = new sap.m.ActionSheet({
				buttons: new sap.ushell.ui.footerbar.AddBookmarkButton()
			});
			this._oActionSheet.setShowCancelButton(true);
			this._oActionSheet.setPlacement(sap.m.PlacementType.Top);
		}

		this._oActionSheet.openBy(this.getView().byId("actionButton"));
	},

	onExit: function() {
		if (this._oActionSheet) {
			this._oActionSheet.destroy();
			this._oActionSheet = null;
		}
	},

	handleNavButtonPress: function() {
		var history = sap.ui.core.routing.History.getInstance();
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		var url = router.getURL("master", {});
		var direction = history.getDirection(url);
		if (direction === "Backwards") {
			/* eslint-disable */
			window.history.go(-1);
			/* eslint-enable */
		} else {
			router.navTo("master", {}, true); // otherwise we go backwards with a forward history
		}
	},

	_approveInvoice: function(comment) {
		sap.m.MessageToast.show(this._resources.getText("DETAIL_APPROVE_SUCCESSTEXT"), {
			duration: 2000
		});
    	this._router.navTo("master", true);
	},

	_rejectInvoice: function(comment) {
		sap.m.MessageToast.show(this._resources.getText("DETAIL_REJECT_SUCCESSTEXT"), {
			duration: 2000
		});
    	this._router.navTo("master", true);
	}
	
});