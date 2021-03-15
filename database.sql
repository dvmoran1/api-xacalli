-- Creación de base de datos y tablas



CREATE DATABASE api_xacalli;

USE api_xacalli;

CREATE TABLE empleado (
    id_epo      VARCHAR (36) NOT NULL,
    nombre      VARCHAR (30) NOT NULL,
    apellido    VARCHAR (30) NOT NULL,
    salario     INT NOT NULL,
    telefono    VARCHAR (15) NOT NULL,
    comision    INT,
    edo_id_edo  VARCHAR (36)
);

ALTER TABLE empleado ADD CONSTRAINT epo_pk PRIMARY KEY ( id_epo );

ALTER TABLE empleado
    ADD CONSTRAINT epo_epo_fk FOREIGN KEY ( edo_id_edo )
        REFERENCES empleado ( id_epo );

CREATE TABLE cliente (
    id_cte        	VARCHAR (36) NOT NULL,
    nombre        	VARCHAR (30) NOT NULL,
    apellido      	VARCHAR (40) NOT NULL,
    telefono      	VARCHAR (15) NOT NULL,
    no_personas     INT NOT NULL,
    no_mascotas   	INT NOT NULL,
    nacionalidad  	VARCHAR (30) NOT NULL,
    email         	VARCHAR (30),
    facebook      	VARCHAR (30),
    epo_id_epo    	VARCHAR (36) NOT NULL
);

ALTER TABLE cliente ADD CONSTRAINT cte_pk PRIMARY KEY ( id_cte );

ALTER TABLE cliente
    ADD CONSTRAINT cte_epo_fk FOREIGN KEY ( epo_id_epo )
        REFERENCES empleado ( id_epo );

CREATE TABLE habitacion (
    id_hbn          VARCHAR (36) NOT NULL,
    costo           INT NOT NULL,
    cupo            INT NOT NULL,
    disponibilidad  VARCHAR (20)
);

ALTER TABLE habitacion ADD CONSTRAINT hbn_pk PRIMARY KEY ( id_hbn );

CREATE TABLE cliente_habitacion (
	id_cte_hbn            VARCHAR (36) NOT NULL,
    fecha_de_reservacion  DATE NOT NULL,
    fecha_de_inicio       DATE NOT NULL,
    fecha_de_fin          DATE NOT NULL,
    no_noches             INT,
    check_in              VARCHAR (30) NOT NULL,
    chek_out              VARCHAR (30) NOT NULL,
    pago_anticipo         INT NOT NULL,
    precio_habitacion     INT NOT NULL,
    cte_id_cte            VARCHAR (36) NOT NULL,
    hbn_id_hbn            VARCHAR (36) NOT NULL
);

ALTER TABLE cliente_habitacion ADD CONSTRAINT CTE_HBN_PK PRIMARY KEY ( id_cte_hbn );

ALTER TABLE cliente_habitacion
    ADD CONSTRAINT CTE_HBN_CTE_FK FOREIGN KEY ( cte_id_cte )
        REFERENCES cliente ( id_cte );

ALTER TABLE cliente_habitacion
    ADD CONSTRAINT CTE_HBN_HBN_FK FOREIGN KEY ( hbn_id_hbn )
        REFERENCES habitacion ( id_hbn );
        
CREATE TABLE servicios (
    id_svo    VARCHAR (36) NOT NULL,
    nombre    VARCHAR (30) NOT NULL,
    costo     INT NOT NULL,
    duracion  VARCHAR (30) NOT NULL
);

ALTER TABLE servicios ADD CONSTRAINT svo_pk PRIMARY KEY ( id_svo );

CREATE TABLE cliente_servicio (
	id_cte_svo       VARCHAR (36) NOT NULL,
    cte_id_cte       VARCHAR(36) NOT NULL,
    svo_id_svo       VARCHAR(36)NOT NULL,
    fecha_de_inicio  DATE NOT NULL,
    fecha_de_fin     DATE NOT NULL,
    hora_de_inicio   VARCHAR(12) NOT NULL,
    hora_de_fin      VARCHAR(12) NOT NULL
);


ALTER TABLE cliente_servicio
    ADD CONSTRAINT CTE_SVO_CTE_FK FOREIGN KEY ( cte_id_cte )
        REFERENCES cliente ( id_cte );

ALTER TABLE cliente_servicio
    ADD CONSTRAINT CTE_SVO_SVO_FK FOREIGN KEY ( svo_id_svo )
        REFERENCES servicios ( id_svo );

ALTER TABLE cliente_servicio ADD CONSTRAINT CTE_SVO_PK PRIMARY KEY ( id_cte_svo );


CREATE TABLE opinion (
    id_OPN      VARCHAR (36) Not NULL,
    cte_id_cte  VARCHAR (36) NOT NULL,
    texto       VARCHAR (600) NOT NULL,
    valoracion   INT NOT NULL
);

ALTER TABLE opinion
    ADD CONSTRAINT opn_cte_fk FOREIGN KEY ( cte_id_cte )
        REFERENCES cliente ( id_cte );
        
ALTER TABLE opinion ADD CONSTRAINT CTE_OPN_PK PRIMARY KEY ( id_OPN );

-- Descripción de las tablas

describe cliente;

describe cliente_habitacion;

describe cliente_servicio;

describe empleado;

describe habitacion;

describe opinion;

describe servicios;

-- Agregar datos

INSERT INTO empleado (id_epo, nombre, apellido, salario,telefono)
VALUES ("e001","Ceci","Suarez",500,"525583673084");

INSERT INTO empleado (id_epo, nombre, apellido, salario,telefono)
VALUES ("e002","Cristian","Garcia",500,"522711354913");

INSERT INTO empleado (id_epo, nombre, apellido, salario,telefono)
VALUES ("e003","David","Velazquez",500,"522321085428");

INSERT INTO empleado (id_epo, nombre, apellido, salario,telefono)
VALUES ("e004","Julian","Hernandez",500,"525521364939");

-- Verificación importacion datos

-- Se importaron los datos de las 6 tablas restantes para agilizar la población de la BD.
-- Pueden encontrar los archivos .csv en la carpeta "Archivos .csv"

SELECT *
FROM empleado;

SELECT *
FROM cliente;

SELECT *
FROM servicios;

SELECT *
FROM habitacion;

SELECT *
FROM cliente_habitacion;

SELECT *
FROM cliente_servicio;

SELECT *
FROM opinion;

-- Consultas EN la BD

SELECT EPO_ID_EPO, AVG(no_mascotas)
FROM cliente
WHERE EPO_ID_EPO != 1
GROUP BY EPO_ID_EPO
HAVING AVG(no_mascotas) > 1;


SELECT nombre, SUM(AVG(salario))
FROM empleado
WHERE ID_EPO > 1
GROUP BY (nombre);

SELECT e.nombre, c.nombre
FROM empleado e LEFT OUTER JOIN cliente c on (e.id_epo = c.epo_id_epo);

SELECT (e.SALARIO + COUNT(EPO_ID_EPO)) as "Pago total"
FROM empleado e right OUTER JOIN cliente
on (e.id_epo = id_epo);

SELECT c.nombre, ch.fecha_de_inicio, ch.check_in
FROM cliente c LEFT OUTER JOIN cliente_habitacion ch ON (c.id_CTE = ch.CTE_id_CTE)
WHERE ch.fecha_de_inicio >= '2020-07-15'
