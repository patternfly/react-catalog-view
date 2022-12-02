#!/bin/bash
cp .recipes/.tmplr.yml .
export SCOPE="@patternfly"
export DESCRIPTION="This library provides patternfly extensions"
npx tmplr
