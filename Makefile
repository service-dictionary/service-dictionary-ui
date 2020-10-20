define HELP

Usage:

make create-local-env           - Create skeleton .env file.

endef

export HELP

create-local-env:
	echo "REACT_APP_PRICES_API=http://localhost:5000" >> .env

