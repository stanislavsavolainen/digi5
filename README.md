# digi5
user data maintenance system  
Fron-end : ReactJS and material-ui
Backend : NodeJS with hapi-module + MySql database via knex


#how to install

1. Install nodeJS
>>>>>> https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions

2. Install MySQL - database
>>>>>> https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-16-04

#mysql strict mode
---------------------
console : sudo nano /etc/mysql/conf.d/disable_strict_mode.cnf

To make JavaScript data compatible with MySQL datetime field put following content to disable_strict_mode.cnf file :

[mysqld]
sql_mode=ONLY_FULL_GROUP_BY,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION

>>>>> https://github.com/stanislavsavolainen/digi5/blob/master/project_data/Screenshot%20from%202017-10-26%2015-43-45.png

--------------------

#mysql -> mysqldump ( export to sql file )
mysqldump -u root -p --databases dbtest1 > /home/database_backup/data1.sql 

>>>>> https://github.com/stanislavsavolainen/digi5/blob/master/project_data/data3.sql

check backup file to figure out how it works, but content will be probaply depricated (MySQL alter table is used to update current data at database).


4. Project contain client and server folder. Client is front-end and server is back-end application. Check both folder for package.json file to view what kind of Node modules project is using.


3. check conection varible to run application in localhost or private network. Also check MySQL user-parameter and where database is located. 
If MySQL is located in same place as back-end server then host can be at 127.0.0.1. Also check MySQL username and password configuarete it right for knex-module at back-end. 




#required knownledges

- JavaScript
- NodeJS
- ReactJS with webpack and babel
- Ecmascript 5 and 6 with arrow and lambda function
- JSON tree datastructure with functional programming (like map, reduce and filter functions)
- JavaScript ternary operator ( for example select material-ui component by conditional statement)
- Material-ui ( with ReactJS)
- React-Router(ReactJS) to change links when page changed
- JavaScript promise to handle knex 
- knex connection module to connect database to NodeJS ( MySQL, PostgreSQL, etc)
- MySQL (mysqldump, mysql strict mode)
- NodeJS hapi-module for http-request and http-response handling at back-end.

=> Project contain all necessary files, so there only 'nmp install' need to be done at client and server folder. Remember also create database with tables.






.......

.......


#how to use

.....

Read guide clicking "About" button. There is detailed info. 
=> Documentation how to use software removed ( not my idea ). There is no about button anymore.







