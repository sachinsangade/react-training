React training session.


// Not to be used.
import org.json.JSONObject;
import org.json.XML;

public class XmlToJsonConverter {

    public static String convertXmlToJson(String xml) {
        // Convert XML to JSONObject
        JSONObject jsonObject = XML.toJSONObject(xml);

        // Handle the case where a single child element should be represented as an array
        handleSingleChildArray(jsonObject, "parent");

        // Convert JSONObject back to JSON string
        return jsonObject.toString(2); // Optional: Indent for better readability
    }

    private static void handleSingleChildArray(JSONObject parent, String childTagName) {
        // Check if the parent has a child with the specified tag name
        if (parent.has(childTagName)) {
            Object childObject = parent.get(childTagName);

            // If the child is a JSONObject, convert it to a JSONArray
            if (childObject instanceof JSONObject) {
                JSONArray jsonArray = new JSONArray();
                jsonArray.put((JSONObject) childObject);
                parent.put(childTagName, jsonArray);
            }
        }
    }
}
