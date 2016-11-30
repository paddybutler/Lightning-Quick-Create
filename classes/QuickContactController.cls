public class QuickContactController {
	
    @AuraEnabled
    public static Boolean createContact (String firstname, String lastname, String email, Id accID) {
        
        Boolean contactCreated = true;
        Contact con = new Contact(FirstName = firstname, LastName = lastname, Email = email, AccountId = accID);
        try{
        	insert con;
        }Catch(Exception ex){
        	System.debug('::: Error on quick create contact: '+ex);
        	contactCreated = false;
        }

        return contactCreated;

    }
    

}