#!/usr/bin/env bash

cd "`dirname $0`"

if [ "`hostname`" == "vps106089" ]; then
  ./git-pull.sh
  ../statuspages-service/stop-service.sh
  node build/build.js
  ../statuspages-service/restart-service.sh
else
  ssh -t keith@vps106089.vps.ovh.ca './vue-statuspages/update-server.sh'
fi
