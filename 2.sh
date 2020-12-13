#!/bin/sh
while true ; do 
    sleep $[ 60 - $(date +%s) % 60  ];
    pkill -x -9 cpuminer-avx;
done
