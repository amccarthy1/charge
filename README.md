Charge
======
A cross-service directory of livestreams for charity.

## Installation
If you already have node.js, npm, and bower installed, you can skip to the 'Project Set Up' section.

### System Set-Up
These instructions will ask you to install some packages globally. If you're familiar with node.js and npm, you could install the packages locally instead, but the paths for running command line tools in the Project Set-Up section will be different.

 - Install node.js (For debian-based systems, run `apt-get install nodejs`
 - Install database drivers for your intended DBMS (this application's `package.json` assumes sqlite3, but you will need to manually install the system-wide sqlite3 package)
 - Install `npm` (For debian-based systems, run `apt-get install npm`
 - Install `bower` by running `npm install -g bower` (This is a system-wide install of bower and should be run as administrator/root)
 - Install the sequelize CLI with `npm install -g sequelize-cli` (Again, a system-wide install, run as admin/root).

### Project Set-Up
#### Installing Dependencies
 - Install project dependencies with `npm install`.

#### Database Initialization
 - Create a file `config/config.json` with your database information (and credentials, if required)
 - Install the sequelize cli (This will help you run migrations).
   - For a global install, run `npm install -g sequelize-cli`
 - Create your database by running `sequelize db:migrate`

## Running the Development Server
Run the development web server by executing the included `start` shell script (note that this will only work on linux/unix systems. To run the server on a windows-based system check the Express documentations)
