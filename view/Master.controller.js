jQuery.sap.require("HelloVim.util.formatter");

sap.ui.core.mvc.Controller.extend("HelloVim.view.Master", {

	_list: null,
	_sPreselectedContextPath: null,

	onInit: function() {
		this._list = this.byId("list");
		// Register for routes
		sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(this.onRoutePatternMatched, this);
	},

	onUpdateFinished: function() {
		var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
		var iPOCount = this._list.getItems().length;
		var sCount = isNaN(iPOCount) ? "" : "" + iPOCount + "";
		var sTitle = oResourceBundle.getText("MASTER_TITLE", [sCount]);
		this.byId("page").setTitle(sTitle);
		
		if (!sap.ui.Device.system.phone) {
			this._setItem();
		}
	},
	
	_setItem: function() {
	    var items = this._list.getItems();
		if (items.length > 0) {
			var firstItem = items[0];
			// But if another PO is required: Try to select this one
			if (this._sPreselectedContextPath) {
				for (var i = 0; i < items.length; i++) {
					var oItem = items[i];
					if (oItem.getBindingContext().getPath() === this._sPreselectedContextPath) {
						firstItem = oItem;
						break;
					}
				}
			}
			// Now we know which item to select
			this._list.setSelectedItem(firstItem); // Mark it as selected in the master list
			this._navToListItem(firstItem); // and display it on the detail page			
		}
	},	
	
	handleSearch: function() {
		// add filter for search
		var filters = [];
		var searchString = this.getView().byId("searchField").getValue();
		if (searchString && searchString.length > 0) {
			filters = [new sap.ui.model.Filter("", sap.ui.model.FilterOperator.Contains, searchString)];
		}

		// update list binding
		var list = this.getView().byId("list");
		var binding = list.getBinding("items");
		binding.filter(filters);
	},

	handleSelect: function(oEvent) {
		var oListItem = oEvent.getParameter("listItem") || oEvent.getSource();
		this._navToListItem(oListItem);
	},

	_navToListItem: function(listItem) {
		sap.ui.core.UIComponent.getRouterFor(this).navTo("Detail", {
			from: "master",
			contextPath: listItem.getBindingContext().getPath().substr(1)
		});
	},
	
	onRoutePatternMatched: function(oEvent) {
		if (oEvent.getParameter("name") !== "Detail") {
			return; // no need to take action on "master" route
		}
		// Route "Detail" contains the specification (context path) of the PO to be selected
		this._sPreselectedContextPath = "/" + oEvent.getParameter("arguments").contextPath;
	}

});