# Secterm Protocol Documentation

## Protocol Version: 1

**File:** `secterm.proto`

**Generated Go Package:** `sectran_chard/secterm/v1;sectermv1`

**Dependencies:**
- [chard_h5_nego.proto](proto/secterm/v1/chard_h5_nego.proto)

## Message Types

### SectermMessageType (Enum)

- `SectermConnectRequestMessage` (Value: 0)
- `SectermConnectResponseMessage` (Value: 1)

## Message: SectermMessage

The main message structure used in the Secterm protocol.

### Fields

- `mes_type` (Field Number: 2, Type: `SectermMessageType`)

  Represents the type of Secterm message.

- `data` (Field Number: 3, Type: OneOf)

  Represents the payload of the message. It can contain one of the following types:

  - `SectermRequest`

### Message: SectermRequest

Represents a request in the Secterm protocol.

### OneOf: data

The `data` field in `SectermMessage` is a oneof field, which means it can contain one and only one of the following types:

- `SectermRequest`

## Notes

- The protocol requires sending the length (uint32 little endian) before the actual proto message.

  ```plaintext
  // Note: Before sending a Secterm message, prepend the message with its length (uint32 little endian).
