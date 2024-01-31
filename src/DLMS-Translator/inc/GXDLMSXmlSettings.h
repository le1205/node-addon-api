#ifndef GXDLMSXMLSETTINGS_H
#define GXDLMSXMLSETTINGS_H

#include <map>
#include "GXDLMSSettings.h"
#include "GXCipher.h"
#include "GXBytebuffer.h"

class GXDLMSXmlSettings {
public:
	CGXCipher m_cipher;
    CGXDLMSSettings m_settings;
    DLMS_TRANSLATOR_OUTPUT_TYPE m_outputType;
    bool m_showNumericsAsHex;
    bool m_showStringAsHex;
    std::map<std::string, unsigned long> m_Tags;
    DLMS_ASSOCIATION_RESULT m_result;
    DLMS_SOURCE_DIAGNOSTIC m_diagnostic;
    int m_reason;
    int m_command;
    int m_gwCommand;
    int m_networkId;
    CGXByteBuffer m_physicalDeviceAddress;
    int m_count;
    unsigned char m_requestType;
    CGXByteBuffer m_attributeDescriptor;
    CGXByteBuffer m_data;
    CGXDateTime m_time;
	DLMS_DATA_TYPE m_time_type;
    bool m_template;

    GXDLMSXmlSettings(
        DLMS_TRANSLATOR_OUTPUT_TYPE type,
        bool numericsAsHex,
        bool isHex,
        std::map<std::string, unsigned long>& list)
    ;

    long parseInt(const std::string value);

    short parseShort(const std::string value);

    long long parseLong(const std::string value);

	unsigned long long parseULong(const std::string value);

    DLMS_TRANSLATOR_OUTPUT_TYPE getOutputType();

    int getNetworkId();

    void setNetworkId(int value);

    CGXByteBuffer& getPhysicalDeviceAddress();

    void setPhysicalDeviceAddress(CGXByteBuffer& value);
};

#endif //GXDLMSXMLSETTINGS