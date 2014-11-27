jQuery.sap.require("HelloVim.view.LineItemFormatter");

sap.ui.core.mvc.Controller.extend("HelloVim.view.LineItems", {
    
    _oItemTemplate: null,
    
    onInit: function() {
        
        this._oItemTemplate = this.byId("lineItemRowTemplate").clone();
        
        var view = this.getView();
        
        	sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(this.onRouteMatched, this);
        
    },
    
    onRouteMatched: function(oEvent) {
        // when detail navigation occurs, update the binding context
			if (oEvent.getParameter("name") === "Detail") {
				var context = new sap.ui.model.Context(this.getView().getModel(), "/" + oEvent.getParameter("arguments").contextPath);
				var _sPath = context + "/InvoiceItems";
				var oTable = this.byId("lineItemsTable");
        		oTable.bindItems({
        			path: _sPath,
        			template: this._oItemTemplate
        		});
			}
    },
    
    onUpdateFinished: function() {
        var oTable = this.byId("lineItemsTable");
        var oLabel = this.byId("lineItemsToolbarLabel");
        var iCount = 0;
        if (oTable.getItems!==null) {
            iCount  = oTable.getItems().length;
        }
        var oBundle = oTable.getModel("i18n").getResourceBundle();
		oLabel.setText(oBundle.getText("LINE_ITEMS_TOOLBAR_TITLE", [iCount]));
    }
    
    
});

