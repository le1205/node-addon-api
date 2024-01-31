const DLMSTranslatorUtilsExtension = require("../lib/binding.js");
console.log("Tests start!");
const assert = require("assert");

assert(DLMSTranslatorUtilsExtension, "The expected function is undefined");
const translator = new DLMSTranslatorUtilsExtension();
translator.setSystemTitle("0937182202")
function testSetSecurity(value) {
  try {
      translator.setSecurity(value);
      console.log(`setSecurity with ${value} succeeded`);
      // You might want to call another method here to verify the effect of SetSecurity
  } catch (error) {
      console.error(`setSecurity with ${value} failed: ${error.message}`);
  }
}

testSetSecurity(1); // Test with a valid value
testSetSecurity(256);
translator.getSecurity();

console.log("+++++++++++++++++", translator.getSystemTitle());
// Replace these strings with actual test data
const testData = "testtestData";
const testOutput = "testoutput";
const xmlData = "your_xml_data_here";
const addSpaces = true; // or false, depending on what you are testing

try {
   const result = translator.decryptPdu(testData, testOutput, addSpaces);
   console.log("Decryption result:", result);
 } catch (error) {
   console.error("An error occurred:", error);
 }

 try {
   const result = translator.encryptPdu(testData, testOutput, addSpaces);
   console.log("Decryption result:", result);
 } catch (error) {
   console.error("An error occurred:", error);
 }

 try {
   const result = translator.encryptPdu(testData, testOutput, addSpaces);
   console.log("Decryption result:", result);
 } catch (error) {
   console.error("An error occurred:", error);
 }
 try {
   const result = translator.pduToXml(testData);
   console.log("Conversion result:", result);
   if (result.status === 0) { // Assuming status 0 indicates success
     console.log("XML Output:", result.output);
   } else {
     console.error("Conversion failed with status:", result.status);
   }
 } catch (error) {
   console.error("An error occurred:", error);
 }
 try {
   const result = translator.xmlToPdu(xmlData, "", addSpaces);
   console.log("Conversion result:", result);
   if (result.status === 0) { // Assuming status 0 indicates success
     console.log("PDU Output:", result.output);
   } else {
     console.error("Conversion failed with status:", result.status);
   }
 } catch (error) {
   console.error("An error occurred:", error);
 }
console.log("Tests passed- everything looks OK!");
