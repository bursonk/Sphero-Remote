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

const short int LED_PIN = 16;//GPIO16


inline void setActivity(boolean b) {remoteMe.getVariables()->setBoolean("Activity", b); }
inline void setLED(boolean b) {remoteMe.getVariables()->setBoolean("LED", b); }
inline void setAngry(boolean b) {remoteMe.getVariables()->setBoolean("Angry", b); }
inline void setAnnoyed(boolean b) {remoteMe.getVariables()->setBoolean("Annoyed", b); }
inline void setLaughing(boolean b) {remoteMe.getVariables()->setBoolean("Laughing", b); }
inline void setSad(boolean b) {remoteMe.getVariables()->setBoolean("Sad", b); }
inline void setSmile(boolean b) {remoteMe.getVariables()->setBoolean("Smile", b); }


uint16_t Message0[15] = {378, 650,  352, 650,  352, 650,  350, 652,  350, 650,  352, 650,  352, 650,  350};   // 0xA0F22FDA (8 Bits)
uint16_t Message1[15] = {738, 294,  706, 296,  704, 296,  350, 650,  350, 650,  352, 650,  350, 652,  706};   // 0x32A8EBF5 (8 Bits)
uint16_t Message2[15] = {738, 294,  706, 294,  350, 650,  706, 296,  350, 650,  352, 650,  706, 296,  350};   // 0x9D507DC7 (8 Bits)
uint16_t Message3[15] = {378, 650,  352, 648,  706, 296,  706, 294,  350, 650,  352, 650,  706, 294,  706};   // 0x22A838DA (8 Bits)
uint16_t Message4[15] = {736, 294,  350, 650,  708, 294,  706, 294,  350, 650,  708, 294,  350, 650,  352};   // 0xFFCDB062 (8 Bits)
uint16_t Message5[15] = {376, 650,  706, 296,  350, 650,  708, 296,  352, 648,  706, 296,  350, 652,  706};   // 0x5FB3195 (8 Bits)
uint16_t Message6[15] = {378, 650,  706, 296,  706, 296,  350, 650,  350, 650,  706, 296,  706, 294,  350};   // 0xE95897BF (8 Bits)
uint16_t Message7[15] = {736, 294,  350, 650,  352, 650,  350, 652,  350, 650,  706, 296,  706, 294,  706};   // 0xCC1C9F5A (8 Bits)

const uint16_t IrLed = 4;  // ESP8266 GPIO pin to use. Recommended: 4 (D2).

IRsend irsend(IrLed);  // Set the GPIO to be used to sending the message.

//*************** IMPLEMENT FUNCTIONS BELOW *********************

void onStartLED(boolean b) {
  digitalWrite(LED_PIN, b?LOW:HIGH);
  Serial.printf("onStartLED: b: %d\n",b);
  
}

// method will be called when user message came

void onUserMessage(uint16_t senderDeviceId, uint16_t dataSize, uint8_t *data) {
  Serial.printf("got message sth size: %d\n",dataSize);
}

void onActivityChange(boolean b) {
  if (b == true){
    Serial.println("Message 0 for Activity Sent");
    irsend.sendRaw(Message0, 15, 38);  // Send a raw data capture at 38kHz.
    delay(200);
  }
  setActivity(false);
}

void onAngryChange(boolean b) {
  Serial.printf("onAngryChange: b: %d\n",b);
   if (b == true){
    irsend.sendRaw(Message7, 15, 38);  // Send a raw data capture at 38kHz.
    delay(200);
  }
  setAngry(false);
}
void onAnnoyedChange(boolean b) {
  Serial.printf("onAnnoyedChange: b: %d\n",b);
  if (b == true){
    irsend.sendRaw(Message6, 15, 38);  // Send a raw data capture at 38kHz.
    delay(200);
  }
  setAngry(false);
}

void onLaughingChange(boolean b) {
  Serial.printf("onLaughingChange: b: %d\n",b);
   if (b == true){
    irsend.sendRaw(Message5, 15, 38);  // Send a raw data capture at 38kHz.
    delay(200);
  }
  setLaughing(false);
}
void onSadChange(boolean b) {
  Serial.printf("onSadChange: b: %d\n",b);
   if (b == true){
    irsend.sendRaw(Message4, 15, 38);  // Send a raw data capture at 38kHz.
    delay(200);
  }
  setSad(false);
}
void onSmileChange(boolean b) {
  Serial.printf("onSmileChange: b: %d\n",b);
   if (b == true){
    irsend.sendRaw(Message3, 15, 38);  // Send a raw data capture at 38kHz.
    delay(200);
  }
  setSmile(false);
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
  
  remoteMe.getVariables()->observeBoolean("Activity" ,onActivityChange);
  remoteMe.getVariables()->observeBoolean("LED" ,onLEDChange);
  remoteMe.getVariables()->observeBoolean("Angry" ,onAngryChange);
  remoteMe.getVariables()->observeBoolean("Annoyed" ,onAnnoyedChange);
  remoteMe.getVariables()->observeBoolean("Laughing" ,onLaughingChange);
  remoteMe.getVariables()->observeBoolean("Sad" ,onSadChange);
  remoteMe.getVariables()->observeBoolean("Smile" ,onSmileChange);

  remoteMe.setUserMessageListener(onUserMessage);
  remoteMe.setUserSyncMessageListener(onUserSyncMessage);
  remoteMe.setConnector(new RemoteMeSocketConnector());
  remoteMe.setDirectConnector(new RemoteMeDirectWebSocketConnector());
  remoteMe.sendRegisterDeviceMessage(DEVICE_NAME);


  pinMode(LED_PIN, OUTPUT); //GPIO16 is an OUTPUT pin;
  digitalWrite(LED_PIN, LOW); //Initial state is ON
}


void loop() {
   remoteMe.loop();
}
