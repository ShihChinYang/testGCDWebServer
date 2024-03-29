//
//  ViewController.swift
//  myWebView
//
//  Created by MacBook Pro - SYang on 12/22/23.
//

import UIKit
import WebKit
class ViewController: UIViewController, WKNavigationDelegate, WKUIDelegate, WKScriptMessageHandler {
    
    var webView: WKWebView!
    var timer: Timer!
    var appLoaded: Bool = false
    
    @objc func fireTimer() {
        print("Timer fired!")
        if appLoaded == false {
            webView?.reload();
        } else {
            timer.invalidate();
        }
    }
    
    override func loadView() {
        let webViewConfiguration = WKWebViewConfiguration();
        webViewConfiguration.limitsNavigationsToAppBoundDomains = true;
        webView = WKWebView(frame: .zero, configuration: webViewConfiguration)
        webView.navigationDelegate = self
        webView.uiDelegate = self
        webView.isInspectable = true
        let contentController = webView.configuration.userContentController
        contentController.add(self, name: "toggleMessageHandler")
        view = webView
        timer = Timer.scheduledTimer(timeInterval: 3.0, target: self, selector: #selector(fireTimer), userInfo: nil, repeats: true)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        let url = URL(string: "http://localhost:8080")!
        webView.load(URLRequest(url: url))
        webView.allowsBackForwardNavigationGestures = true
        
        //webView.reload();
        
    }
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard let dict = message.body as? [String : AnyObject] else {
            return
        }
        appLoaded = true
        print(dict)
        let localhostAccessKeyId = AccessKeyInfo.localhostAccessKeyId
        let localhostAccessKey = AccessKeyInfo.localhostAccessKey
        
        let script = "window.bsafesNative.bsafesNativeToWebCall({localhostAccessKeyId:\"\(localhostAccessKeyId)\", localhostAccessKey:\"\(localhostAccessKey)\"});"

        webView.evaluateJavaScript(script) { (result, error) in
            if let result = result {
                print("Label is updated with message: \(result)")
            } else if let error = error {
                print("An error occurred: \(error)")
            }
        }
    }
    
    func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Void) {
        let ac = UIAlertController(title: nil,
                                   message: message,
                                   preferredStyle: .alert)
        ac.addAction(UIAlertAction(title: "Ok",
                                   style: .default) { _ in
            completionHandler()
        })
        present(ac, animated: true)
    }
    
    func webView(_ webView: WKWebView,
        runJavaScriptConfirmPanelWithMessage message: String,
        initiatedByFrame frame: WKFrameInfo,
        completionHandler: @escaping (Bool) -> Void) {
        let alertController = UIAlertController(title: nil, message: message, preferredStyle: .actionSheet)
        alertController.addAction(UIAlertAction(title: "Ok", style: .default, handler: { (action) in
                completionHandler(true)
            }))
        alertController.addAction(UIAlertAction(title: "Cancel", style: .default, handler: { (action) in
                completionHandler(false)
            }))
        self.present(alertController, animated: true, completion: nil)
    }
}

