// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "ConfigReader",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "ConfigReader",
            targets: ["ConfigReaderPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "ConfigReaderPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/ConfigReaderPlugin"),
        .testTarget(
            name: "ConfigReaderPluginTests",
            dependencies: ["ConfigReaderPlugin"],
            path: "ios/Tests/ConfigReaderPluginTests")
    ]
)