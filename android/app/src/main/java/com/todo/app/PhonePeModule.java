package com.todo.app;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class PhonePeModule extends ReactContextBaseJavaModule {

    public PhonePeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "PhonePeModule"; // Name to use in JavaScript
    }

    /**
     * Method to show a toast message from JavaScript.
     *
     * @param message The message to display in the toast.
     * @param duration The duration of the toast: "short" or "long".
     */
    @ReactMethod
    public void showToast(String message, String duration) {
        int toastDuration = duration.equalsIgnoreCase("long") ? Toast.LENGTH_LONG : Toast.LENGTH_SHORT;
        Toast.makeText(getReactApplicationContext(), message, toastDuration).show();
    }
}
