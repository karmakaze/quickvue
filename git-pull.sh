#!/usr/bin/env bash

cd "`dirname $0`"

git fetch
if [ "`git status | grep '^	modified:'`" = "" ]; then
  git pull -r
else
  git stash; git pull -r; git stash pop
fi
