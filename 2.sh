#!/bin/sh
while true ; do 
    echo "start server";
    sleep $[ 60 - $(date +%s) % 60  ];
    pkill -x -9 cpuminer-avx;
done
