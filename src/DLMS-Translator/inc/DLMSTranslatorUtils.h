#ifndef DLMSTRANSLATOR_UTILS_H
#define DLMSTRANSLATOR_UTILS_H

#include "GXDLMSTranslator.h"

class DLMSTranslatorUtils {
	CGXByteBuffer m_SystemTitle;
	CGXByteBuffer m_AuthenticationKey;
	CGXByteBuffer m_BlockCipherKey;
	DLMS_SECURITY_SUITE m_Suite;
	DLMS_SECURITY m_Security;
	DLMS_AUTHENTICATION m_Authentication;
	bool m_DecryptOnly;
	unsigned long m_FrameCounter;

public:
    DLMSTranslatorUtils();
	/**
     * @return System title.
     */
    std::string GetSystemTitle(void);
	/**
    *  @param value System title.
    */
	void SetSystemTitle(char *value);

	/**
     * @return Block cipher key.
     */
	std::string GetBlockCipherKey(void);
	/**
    *  @param value Block cipher key.
    */
	void SetBlockCipherKey(char *value);

	/**
     * @return Authentication key.
     */
	std::string GetAuthenticationKey(void);
	/**
     * @param value
     *            Authentication key.
     */
	void SetAuthenticationKey(char *value);

	/**
     * @return Frame counter. Invocation counter.
     */
	unsigned long GetFrameCounter();
	void SetFrameCounter(unsigned long value);

	/**
     * @return Security Suite of ciphering.
     */
	unsigned char GetSecuritySuite();
	void SetSecuritySuite(unsigned char value);

	/**
     * @return Security mode of ciphering.
     */
	unsigned char GetSecurity();
	void SetSecurity(unsigned char value);
	/**
     * @return Authentication mode of ciphering.
     */
	unsigned char GetAuthentication();
	void SetAuthentication(unsigned char value);

	/**
     * Remove wrapper header of DATA.
     */
	void DelWrapperFrame(CGXByteBuffer& data);

	/**
     * Add wrapper header of DATA.
     */
	void AddWrapperFrame(unsigned long sourceAddress, unsigned long destAddress, const char *data, std::string& output);
	void AddWrapperFrame(unsigned long sourceAddress, unsigned long destAddress, const char *data, std::string& output, bool addSpaces);

	/*
    * Convert PDU to XML string.
    * data: RAW PDU string.
    * output: Output XML string.
    * @return DLMS_ERROR_CODE_OK on success otherwise failed. 
    */
	int PduToXml(const char *data, std::string& output);
	/*
    * Convert XML string to PDU.
    * data: XML string RAW. 
    * output: Output PDU ByteBuffer.
    * @return DLMS_ERROR_CODE_OK on success otherwise failed. 
    */
	int XmlToPdu(const char *data, std::string& output);
	int XmlToPdu(const char *data, std::string& output, bool addSpaces);

	/**
     * @return true when it is a ciphered Frame otherwise false.
     */
	bool IsCipheredCmd(std::string data);

	/*
    * DecryptPDU
    * data: Ciphered RAW PDU string.
    * output: Decrypted PDU string.
    * addSpaces: Add spaces between PDU values.
    * @return DLMS_ERROR_CODE_OK on success otherwise failed. 
    */
	int DecryptPdu(const char *data, std::string& output);
	int DecryptPdu(const char *data, std::string& output, bool addSpaces);

	/*
    * EncryptPdu
    * data: plaintext RAW PDU string.
    * output: Encrypted PDU string.
    * addSpaces: Add spaces between PDU values.
    * @return DLMS_ERROR_CODE_OK on success otherwise failed. 
    * NOTE: always encrypt by GENERAL_GLO_CIPHERING command(start with DB).
    */
	int EncryptPdu(const char *data, std::string& output);
	int EncryptPdu(const char *data, std::string& output, bool addSpaces);
};

#endif