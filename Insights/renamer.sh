#!/bin/bash

for file in *"Insights﹖SearchTag="*  
do
  mv "$file" "${file#*SearchTag=}"
done
