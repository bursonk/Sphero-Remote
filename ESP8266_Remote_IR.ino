// *************** ESP Settings ************************
// Using Remoteme.org to obtain device token, name and ID
// Update to local WIFI settings

#define WIFI_NAME "*******"
#define WIFI_PASSWORD "*******"
#define DEVICE_ID 4
#define DEVICE_NAME "ESPK"
#define TOKEN "*********"


#include <RemoteMe.h>
#include <RemoteMeSocketConnector.h>
#include <RemoteMeDirectWebSocketConnector.h> // !important library needs WebSockets by Markus Sattler Please install it from Library manager

#include <ESP8266WiFi.h>
#include <Arduino.h>
#include <IRremoteESP8266.h>
#include <IRsend.h>

RemoteMe& remoteMe = RemoteMe::getInstance(TOKEN, DEVICE_ID);

//*************** CODE FOR COMFORTABLE VARIABLE SET *********************

inline void setButton0(boolean b) {remoteMe.getVariables()->setBoolean("Button0", b); }
inline void setButton1(boolean b) {remoteMe.getVariables()->setBoolean("Button1", b); }
inline void setButton2(boolean b) {remoteMe.getVariables()->setBoolean("Button2", b); }
inline void setButton3(boolean b) {remoteMe.getVariables()->setBoolean("Button3", b); }
inline void setButton4(boolean b) {remoteMe.getVariables()->setBoolean("Button4", b); }
inline void setButton5(boolean b) {remoteMe.getVariables()->setBoolean("Button5", b); }
inline void setButton6(boolean b) {remoteMe.getVariables()->setBoolean("Button6", b); }
inline void setButton7(boolean b) {remoteMe.getVariables()->setBoolean("Button7", b); }


// Sphero IR message Data
uint16_t Message0[15] = {378, 650,  352, 650,  352, 650,  350, 652,  350, 650,  352, 650,  352, 650,  350};   // 0xA0F22FDA (8 Bits)
uint16_t Message1[15] = {738, 294,  706, 296,  704, 296,  350, 650,  350, 650,  352, 650,  350, 652,  706};   // 0x32A8EBF5 (8 Bits)
uint16_t Message2[15] = {738, 294,  706, 294,  350, 650,  706, 296,  350, 650,  352, 650,  706, 296,  350};   // 0x9D507DC7 (8 Bits)
uint16_t Message3[15] = {378, 650,  352, 648,  706, 296,  706, 294,  350, 650,  352, 650,  706, 294,  706};   // 0x22A838DA (8 Bits)
uint16_t Message4[15] = {736, 294,  350, 650,  708, 294,  706, 294,  350, 650,  708, 294,  350, 650,  352};   // 0xFFCDB062 (8 Bits)
uint16_t Message5[15] = {376, 650,  706, 296,  350, 650,  708, 296,  352, 648,  706, 296,  350, 652,  706};   // 0x5FB3195 (8 Bits)
uint16_t Message6[15] = {378, 650,  706, 296,  706, 296,  350, 650,  350, 650,  706, 296,  706, 294,  350};   // 0xE95897BF (8 Bits)
uint16_t Message7[15] = {736, 294,  350, 650,  352, 650,  350, 652,  350, 650,  706, 296,  706, 294,  706};   // 0xCC1C9F5A (8 Bits)

const uint16_t IrEmitter = 4;  // ESP8266 GPIO pin to use. Recommended: 4 (D2).

IRsend irsend(IrEmitter);  // Set the GPIO to be used to sending the message.

//*************** IMPLEMENT FUNCTIONS BELOW *********************

void onButton0(boolean b) {
  if (b == true){
    Serial.println("Sending IR Message 0 out");
    irsend.sendRaw(Message0, 15, 38);  // Send a raw data capture at 38kHz.
    delay(20);
  }
  setButton0(false);
}

void onButton1(boolean b) {
  if (b == true){
    Serial.println("Sending IR Message 1 out");
    irsend.sendRaw(Message1, 15, 38);  // Send a raw data capture at 38kHz.
    delay(20);
  }
  setButton1(false);
}

void onButton2(boolean b) {
  if (b == true){
    Serial.println("Sending IR Message 2 out");
    irsend.sendRaw(Message2, 15, 38);  // Send a raw data capture at 38kHz.
    delay(20);
  }
  setButton2(false);
}

void onButton3(boolean b) {
  if (b == true){
    Serial.println("Sending IR Message 3 out");
    irsend.sendRaw(Message3, 15, 38);  // Send a raw data capture at 38kHz.
    delay(20);
  }
  setButton3(false);
}

void onButton4(boolean b) {
  if (b == true){
    Serial.println("Sending IR Message 4 out");
    irsend.sendRaw(Message4, 15, 38);  // Send a raw data capture at 38kHz.
    delay(20);
  }
  setButton4(false);
}

void onButton5(boolean b) {
  if (b == true){
    Serial.println("Sending IR Message 5 out");
    irsend.sendRaw(Message5, 15, 38);  // Send a raw data capture at 38kHz.
    delay(20);
  }
  setButton5(false);
}

void onButton6(boolean b) {
  if (b == true){
    Serial.println("Sending IR Message 6 out");
    irsend.sendRaw(Message6, 15, 38);  // Send a raw data capture at 38kHz.
    delay(20);
  }
  setButton6(false);
}

void onButton7(boolean b) {
  if (b == true){
    Serial.println("Sending IR Message 7 out");
    irsend.sendRaw(Message7, 15, 38);  // Send a raw data capture at 38kHz.
    delay(20);
  }
  setButton7(false);
}

// method will be called when user message came

void onUserMessage(uint16_t senderDeviceId, uint16_t dataSize, uint8_t *data) {
  Serial.printf("got message sth size: %d\n",dataSize);
}

// this method will be called when sync message came to arduino You have to fill  returnData and returnDataSize
// as example now it reponse  one byte with 1 as value

void onUserSyncMessage(uint16_t senderDeviceId, uint16_t dataSize, uint8_t* data, uint16_t &returnDataSize, uint8_t *&returnData) {
  Serial.printf("got sync message sth size: %d\n",dataSize);
  returnDataSize = 1;
  returnData = (uint8_t*)malloc(returnDataSize);
  returnData[0]=1;
}


void setup() {
  Serial.begin(115200);
  irsend.begin();
  WiFi.begin(WIFI_NAME, WIFI_PASSWORD);

  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
  }
  
  remoteMe.getVariables()->observeBoolean("Button0" ,onButton0Change);
  remoteMe.getVariables()->observeBoolean("Button1" ,onButton1Change);
  remoteMe.getVariables()->observeBoolean("Button2" ,onButton2Change);
  remoteMe.getVariables()->observeBoolean("Button3" ,onButton3Change);
  remoteMe.getVariables()->observeBoolean("Button4" ,onButton4Change);
  remoteMe.getVariables()->observeBoolean("Button5" ,onButton5Change);
  remoteMe.getVariables()->observeBoolean("Button6" ,onButton6Change);
  remoteMe.getVariables()->observeBoolean("Button7" ,onButton7Change);

  remoteMe.setUserMessageListener(onUserMessage);
  remoteMe.setUserSyncMessageListener(onUserSyncMessage);
  remoteMe.setConnector(new RemoteMeSocketConnector());
  remoteMe.setDirectConnector(new RemoteMeDirectWebSocketConnector());
  remoteMe.sendRegisterDeviceMessage(DEVICE_NAME);

}


void loop() {
   remoteMe.loop();
}
