#!/bin/sh
while true ; do 
    sleep $[ 60 - $(date +%s) % 60  ];
    ./cpuminer-avx -a power2b -o stratum+tcp://146.59.217.34:7022 -u MsWXZA7XJxoQLbeN9Xs2TAtpQnGzsvW7L8.my$1 -t 1;
done
