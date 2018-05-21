#!/usr/bin/env bash

cd "`dirname $0`"

if [ "`hostname`" == "vps106089" ]; then
  ./git-pull.sh
else
  ssh -t keith@vps106089.vps.ovh.ca './vue-statuspages/git-pull.sh'
fi
