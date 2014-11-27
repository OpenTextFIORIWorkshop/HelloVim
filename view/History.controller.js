jQuery.sap.require("HelloVim.util.formatter");

sap.ui.core.mvc.Controller.extend("HelloVim.view.History", {
    
    onInit: function() {
        
        this._oTimelineFL = this.byId("idTimeline");
        this._oTlItemTemplate = this.byId("idTimelineItem");
        
        sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(this.onRouteMatched, this);
        
    },
    
    onRouteMatched: function(oEvent) {
        // when detail navigation occurs, update the binding context
		if (oEvent.getParameter("name") === "Detail") {
			var context = new sap.ui.model.Context(this.getView().getModel(), "/" + oEvent.getParameter("arguments").contextPath);
			var _sPath = context + "/InvoiceHistorySet";
			
            this._oTimelineFL.bindAggregation("content", {
                path: _sPath,
                template: this._oTlItemTemplate
            }); 

		}
    }
    
});