#! /bin/bash
mongoexport -d venmo -c venmo --type csv --fields _id,app.name,app.site_url,app.description -o app.csv
