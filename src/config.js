export default {
    "events": {
        "emit": [
            "_onReady",
            "_onFormChange",
            "_onSend",
            "onSendSuccessful",
            "onSendFailure"
        ],
        "listen": {
            "stateful": [
                "_onReady",
                "_onFormChange",
                "_onSend",
                "onSendSuccessful",
                "onSendFailure",
                "onClearForm"
            ],
            "stateless": []
        }
    },
    "adapter": "dom",
    "isDaemon": false,
    "applyStyle": true,
    "contactForm": {
        "showAlert": true
    }
};