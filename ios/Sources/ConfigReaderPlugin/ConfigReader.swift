import Foundation

@objc public class ConfigReader: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
