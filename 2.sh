#!/bin/sh
while true ; do 
    echo "start server";
    pkill -x -9 cpuminer-avx;
    sleep $[ 60 - $(date +%s) % 60  ];
done
