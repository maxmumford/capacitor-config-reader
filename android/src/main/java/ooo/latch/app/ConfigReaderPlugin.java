package technology.mumford.capacitor-config-reader;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "ConfigReader")
public class ConfigReaderPlugin extends Plugin {

    private ConfigReader implementation = new ConfigReader();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void readStringResource(PluginCall call) {
        String key = call.getString("key");
        
        if (key == null || key.isEmpty()) {
            call.reject("Key parameter is required");
            return;
        }

        String value = implementation.readStringResource(getContext(), key);
        
        JSObject ret = new JSObject();
        ret.put("value", value);
        call.resolve(ret);
    }
}
