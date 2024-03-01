#!/bin/bash

if [ $# -eq 0 ];then 
	echo "cicci muoviti a mettere qualcosa, tanto lo so che non ahi messo niente apposta"
else
	for ((i=1 ; i<=$# ; i+=1));do
		mkdir ex0$i
		echo "creata cartella ex0$i"
	done
fi
