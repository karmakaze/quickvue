#!/usr/bin/env bash

cd "`dirname $0`"

if [ "`hostname`" == "vps106089" ]; then
  ./git-pull.sh
  echo "Need to run (with more free memory): node build/build.js"
else
  ssh -t keith@vps106089.vps.ovh.ca './hn-redux/git-pull.sh'
  node build/build.js
  rsync -avz docs keith@vps106089.vps.ovh.ca:hn-redux/
fi
