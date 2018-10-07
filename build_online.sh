#!/usr/bin/env bash

rm -rf dist/*
npm run release

cd dist
tar zcvf angela.tar.gz *

shopt -s  extglob
rm -rf !(angela.tar.gz)