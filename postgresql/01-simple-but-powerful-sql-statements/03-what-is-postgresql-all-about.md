client - used to connect to a postgres database. a client can be any piece of software, api server or utility program to investigate some data inside the postgres database

sql - read as sequel. a programming language to interact with a postgres database

add data
```sql
INSERT INTO
	cities(name, lat, lng, country, iso3, population)
VALUES
	('San Francisco', 37.7, 122.4, 'United States', 'USA', 883305);
```

read data
```sql
SELECT name FROM cities;
```

update data
```sql
UPDATE
	cities
SET
	population = 19354921
WHERE
	name = 'New York';
```

delete data
```sql
DELETE FROM
	cities
WHERE
	id = 300;
```