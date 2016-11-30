({
    handleSaveContact: function(component, event, helper) {
        var fname = component.find("firstname").get("v.value");
        var lname = component.find("lastname").get("v.value");
        var email = component.find("email").get("v.value");
        var accId = component.get("v.recordId");

        var action = component.get("c.createContact");

        action.setParams({
            "firstname": fname,
            "lastname": lname,
            "email": email,
            "accId": accId
        });

        action.setCallback(this, function(response) {
            var res = response.getReturnValue();
            var resultsToast = $A.get("e.force:showToast");
            if (res) {
                resultsToast.setParams({
                    "title": "Contact Saved",
                    "message": "The new contact was created."
                });
            } else {
                resultsToast.setParams({
                    "title": "Error",
                    "message": "Error - Contact not created."
                });
            }
            resultsToast.fire();
            $A.get("e.force:refreshView").fire();
            var dismissActionPanel = $A.get("e.force:closeQuickAction");
            dismissActionPanel.fire();
        });
        $A.enqueueAction(action);
    }
})