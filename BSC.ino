#include "FirebaseESP32.h"
#include <WiFi.h>
#include "WifiConfig.h"
#include <HX711_ADC.h>
#include <SoftwareSerial.h>
// SoftwareSerial BTSerial(4,5); // add pins for bluetooth sheild here

#define FIREBASE_AUTH "98aog96OQzouUyu5XFgh0w4n9lBjklcpiMGHwJWF"; //database secret
#define FIREBASE_HOST "https://bsc-incinerator.firebaseio.com/"; //link to database
const int HX711_dout = 4;    //pin to which HX711 dout is connected
const int HX711_sck = 5;     //pin to which HX711 sck is connected  
float AshTrayWeight=0;       // stores Ash tray weight
FirebaseData firebaseData1;
FirebaseData firebaseData2;
const int ledPin = 13;  //pin for led
const int swPin = 3;   // pin for switch
bool switchCurrent = false
String path = "/Nodes";
String AshTrayWeight = "AshTrayWeight";
String SwitchRemote = "SwitchRemote";
String Incinerations = "Incinerations";

HX711_ADC LoadCell(HX711_dout, HX711_sck);
// following code is to set LED ON or OFF according to switch,so if SwitchRemote says true LED is ON else OFF
void streamCallback(StreamData data)
{

  if (data.dataType() == "boolean") {
    if (data.boolData())
      Serial.println("Set " + SwitchRemote + " to High");
    else
      Serial.println("Set " + SwitchRemote + " to Low");
    digitalWrite(ledPin, data.boolData());
  }

void ConnectToWifi()
{
  Wifi.mode(WIFI_STA);
  Wifi.begin(SSID, WifiPassword);
  Serial.print("Connecting to ");
  Serial.println(SSID);
  uint8_t i =0;
  while (Wifi.status() != WL_CONNECTED)
  {
      Serial.print('.');
      delay(500);

      if ((++i % 16) == 0)
      {
        Serial.println(F(" still trying to connect"));
      }
  }

  Serial.print(F("Connected. IP address is: "));
  Serial.println(Wifi.localIP());
}

void streamTimeoutCallback(bool timeout)
{
  if (timeout)
  {
    Serial.println();
    Serial.println("Stream timeout, resume streaming...");
    Serial.println();
  }
}

//to calibrate the loadcell
void calibrate()
{
  // LoadCell.tare();
       //place known mass
      // LoadCell.refreshDataSet();
      // float newCalibrationValue = LoadCell.getNewCalibration(known_mass);
      //tare means setting zero value
}

void setup() 
{
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  pinMode(switch, INPUT);
  ConnectToWifi(); //for connection to Wifi
  LoadCell.begin(); //start connection to HX711
  LoadCell.start(2000); //load cell gets 2000ms time for stabalizing
  LoadCell.setCallFactor(999.0); //dependent on individual loadcell so for ours it'll probably be different
  while (!LoadCell.update());
  calibrate();// start calibration procedure when loadcell isnt updating
  Firebase.begin("FIREBASE_HOST", "FIREBASE_AUTH");
  // Above code is to connect to firebase database
  Firebase.getBool(firebaseData1,path + "/" + SwitchRemote);
  switchCurrent = firebaseData1;
  
}

void loop() 
{
  char str[]; 
  if(Serial.available())  
    {  
     str = Serial.read();  
    
    }}
  
  
  // put your main code here, to run repeatedly:
  Firebase.getBool(firebaseData1,path + "/" + SwitchRemote);
  if(switchChange!=firebaseData1) //check if there is a change in remote staus
  {
    digitalWrite(ledPin,firebaseData1);
    switchChange = firebaseData1;
  } 
  switchChange = firebaseData1;
  static boolean newDataReady = 0;
  if (LoadCell.update()) newDataReady = true; //check if new wegiht is being added
  if (newDataReady)
  {
  LoadCell.update(); //get data from loadcell
  AshTrayWeight = LoadCell.getData();
  Firebase.setFloat(firebaseData2, path + "/" + AshTrayWeight, AshTrayWeight);
  }
  
  

}
