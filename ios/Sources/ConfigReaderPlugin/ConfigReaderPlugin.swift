import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(ConfigReaderPlugin)
public class ConfigReaderPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "ConfigReaderPlugin"
    public let jsName = "ConfigReader"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "readInfoPlistValue", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = ConfigReader()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
    
    @objc func readInfoPlistValue(_ call: CAPPluginCall) {
        guard let key = call.getString("key") else {
            call.reject("Key parameter is required")
            return
        }
        
        let value = implementation.readInfoPlistValue(key)
        call.resolve([
            "value": value
        ])
    }
}
