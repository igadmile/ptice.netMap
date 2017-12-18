#!/bin/bash
cat exp_zps_new.js exp_spas.js exp_rez.js exp_pscis_latest.js exp_piljIlas.js exp_iwc.js | uglifyjs > data.js
