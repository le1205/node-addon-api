// const DLMSTranslatorUtilsExtension = require("../lib/binding.js");
// console.log("Tests start!");
// const assert = require("assert");

// assert(DLMSTranslatorUtilsExtension, "The expected function is undefined");
// const translator = new DLMSTranslatorUtilsExtension();
// translator.setSystemTitle("0937182202")
// function testSetSecurity(value) {
//   try {
//       translator.setSecurity(value);
//       console.log(`setSecurity with ${value} succeeded`);
//       // You might want to call another method here to verify the effect of SetSecurity
//   } catch (error) {
//       console.error(`setSecurity with ${value} failed: ${error.message}`);
//   }
// }

// testSetSecurity(1); // Test with a valid value
// testSetSecurity(256);
// translator.getSecurity();

// console.log("+++++++++++++++++", translator.getSystemTitle());
// // Replace these strings with actual test data
// const testData = "testtestData";
// const testOutput = "testoutput";
// const xmlData = "your_xml_data_here";
// const addSpaces = true; // or false, depending on what you are testing

// try {
//    const result = translator.decryptPdu(testData, testOutput, addSpaces);
//    console.log("Decryption result:", result);
//  } catch (error) {
//    console.error("An error occurred:", error);
//  }

//  try {
//    const result = translator.encryptPdu(testData, testOutput, addSpaces);
//    console.log("Decryption result:", result);
//  } catch (error) {
//    console.error("An error occurred:", error);
//  }

//  try {
//    const result = translator.encryptPdu(testData, testOutput, addSpaces);
//    console.log("Decryption result:", result);
//  } catch (error) {
//    console.error("An error occurred:", error);
//  }
//  try {
//    const result = translator.pduToXml(testData);
//    console.log("Conversion result:", result);
//    if (result.status === 0) { // Assuming status 0 indicates success
//      console.log("XML Output:", result.output);
//    } else {
//      console.error("Conversion failed with status:", result.status);
//    }
//  } catch (error) {
//    console.error("An error occurred:", error);
//  }
//  try {
//    const result = translator.xmlToPdu(xmlData, "", addSpaces);
//    console.log("Conversion result:", result);
//    if (result.status === 0) { // Assuming status 0 indicates success
//      console.log("PDU Output:", result.output);
//    } else {
//      console.error("Conversion failed with status:", result.status);
//    }
//  } catch (error) {
//    console.error("An error occurred:", error);
//  }

 
// console.log("Tests passed- everything looks OK!");


const DLMSTranslatorUtilsExtension = require("../lib/binding.js");
const translator = new DLMSTranslatorUtilsExtension();
const xmlParser = require('xml2json');

const blockkey = "D084862E2EE88F98D04AAA84A25DF756";
const authkey="AABBCCDD";

const rawData="0001000100010043db0834351621131623033830000000296a19275063426f50109b349fea14d69a1171d191f89d58f9b66d64e8cd246f25f50cdf96d1007b6b14320026e69b3a1e9fc079";
var xml="";
translator.setBlockCipherKey(blockkey);

var temp = translator.setSecuritySuite(0);
translator.setFrameCounter(1);
xml=translator.pduToXml(rawData);

console.log(translator.getSecurity());

var result = xmlParser.toJson(xml.output);
try {
	var r=JSON.parse(result)
	console.log(r);
} catch(e){
	console.error(e);
}
var pdu=translator.xmlToPdu(xml.output,false);

console.log("+++++++++++++", pdu.output, typeof pdu.output);

var wp=translator.addWrapperFrame(16, 1, pdu.output, false);
console.log("=====addWrapperFrame======", wp);
var pduEC = translator.encryptPdu(pdu.output,false);
console.log("=====pduEC======", pduEC);
const buffer = Buffer.from(wp.output, 'hex');
var del=translator.delWrapperFrame(buffer);
console.log("=====delWrapperFrame======", del);
