const MQTT_HEADER_LEN = 2;
const MQTT_ACK_LEN = 4;

/**
 * Stub bytes, useful for generic replies, represent the first byte
 * in the fixed header
 */

 const CONNACK_BYTE = '0x20';
 const PUBLISH_BYTE = '0x30';
 const PUBACK_BYTE = '0x40';
 const PUBREC_BYTE = '0x50';
 const PUBREL_BYTE = '0x60';
 const PUBCOMP_BYTE = '0x80';
 const SUBACK_BYTE = '0x90';
 const UNSUBACK_BYTE = '0xB0';
 const PINGRESP_BYTE = '0xD0';
