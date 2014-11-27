jQuery.sap.require("HelloVim.view.LineItemFormatter");

sap.ui.core.mvc.Controller.extend("HelloVim.view.LineItems", {
    
    onInit: function() {
        var view = this.getView();
        
        	sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(function(oEvent) {
			// when detail navigation occurs, update the binding context
			if (oEvent.getParameter("name") === "Detail") {
				var context = new sap.ui.model.Context(view.getModel(), "/" + oEvent.getParameter("arguments").contextPath);
				view.setBindingContext(context);
				console.log("Selected item:", context);
				// Make sure the master is here
			}
		}, this);
        
    }
    
    
});

