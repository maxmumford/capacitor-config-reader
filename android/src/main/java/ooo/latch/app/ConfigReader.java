package technology.mumford.capacitorconfigreader;

import android.content.Context;
import android.content.res.Resources;
import com.getcapacitor.Logger;

public class ConfigReader {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }

    public String readStringResource(Context context, String key) {
        try {
            Resources resources = context.getResources();
            int resourceId = resources.getIdentifier(key, "string", context.getPackageName());
            
            if (resourceId != 0) {
                String value = resources.getString(resourceId);
                Logger.info("ConfigReader", "Found string resource: " + key + " = " + value);
                return value;
            } else {
                Logger.warn("ConfigReader", "String resource not found: " + key);
                return "";
            }
        } catch (Exception e) {
            Logger.error("ConfigReader", "Error reading string resource: " + key, e);
            return "";
        }
    }
}
