import Foundation

@objc public class PusherBeam: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
