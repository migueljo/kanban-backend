#!/bin/bash

# Create certificates directory if it doesn't exist
mkdir -p certs

# Generate private key and certificate for CA
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout certs/ca-key.pem \
  -out certs/ca-certificate.pem \
  -subj "/C=ES/ST=Madrid/L=Madrid/O=Kanban/CN=localhost"

# Generate private key and CSR for server
openssl req -nodes -days 365 -newkey rsa:2048 \
  -keyout certs/server-key.pem \
  -out certs/server.csr \
  -subj "/C=ES/ST=Madrid/L=Madrid/O=Kanban/CN=localhost"

# Sign the CSR with CA
openssl x509 -req -in certs/server.csr \
  -CA certs/ca-certificate.pem \
  -CAkey certs/ca-key.pem \
  -CAcreateserial \
  -out certs/server-certificate.pem

# Clean up temporary files
rm certs/server.csr certs/ca-key.pem certs/ca-certificate.srl

# Set appropriate permissions
chmod 600 certs/*.pem

echo "SSL certificates generated successfully in the certs/ directory" 