import Foundation

@objc public class ConfigReader: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
    
    @objc public func readInfoPlistValue(_ key: String) -> String {
        guard let infoDictionary = Bundle.main.infoDictionary else {
            print("ConfigReader: Could not access Info.plist")
            return ""
        }
        
        if let value = infoDictionary[key] {
            let stringValue = String(describing: value)
            print("ConfigReader: Found Info.plist value for key '\(key)': \(stringValue)")
            return stringValue
        } else {
            print("ConfigReader: Info.plist key '\(key)' not found")
            return ""
        }
    }
}
