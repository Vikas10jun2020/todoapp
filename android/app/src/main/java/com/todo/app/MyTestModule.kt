package com.todo.app

import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class MyTestModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "MyTestModule" // Name of the module exposed to JavaScript
    }

    @ReactMethod
    fun showMessage(message: String) {
        // Display a simple Toast message
        Toast.makeText(reactApplicationContext, message, Toast.LENGTH_SHORT).show()
    }
}
