jQuery.sap.require("HelloVim.util.formatter");

sap.ui.core.mvc.Controller.extend("HelloVim.view.Master", {

	_list: null,

	onInit: function() {
		this._list = this.byId("list");
	},

	onUpdateFinished: function() {
		var items = this._list.getItems();
		if (items.length > 0) {
			var firstItem = items[0];
			this._list.setSelectedItem(firstItem);
			this._navToListItem(firstItem);
		}
		var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
		var iPOCount = this._list.getItems().length;
		var sCount = isNaN(iPOCount) ? "" : "" + iPOCount + "";
		var sTitle = oResourceBundle.getText("MASTER_TITLE", [sCount]);
		this.byId("page").setTitle(sTitle);
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
	}

});