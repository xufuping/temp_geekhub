#!/usr/bin/env bash

rm -rf dist/*
npm run build

cd dist
tar zcvf angela.tar.gz *

shopt -s  extglob
rm -rf !(geekhub.tar.gz)