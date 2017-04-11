sleep 60s

/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P 'yourStrong(!)Password' -d master -i dbscripts/setup.sql