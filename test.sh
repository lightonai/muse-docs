#!/bin/bash

u="testuser"
p="testpassword"

ask="/tmp/ask"

echo "echo $p" > $ask
chmod +x $ask

echo $ask
