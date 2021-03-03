-- Creación de base de datos y tablas

CREATE DATABASE api_xacalli;

USE api_xacalli;

CREATE TABLE web_cliente (
    id_cte        VARCHAR (10) NOT NULL,
    nombre        VARCHAR (20) NOT NULL,
    apellido      VARCHAR (20) NOT NULL,
    telefono      VARCHAR (12) NOT NULL,
    mascotas      INT NOT NULL,
    nacionalidad  VARCHAR (20) NOT NULL,
    email         VARCHAR (30),
    facebook      VARCHAR (30),
    epo_id_epo    VARCHAR (10) NOT NULL
);

ALTER TABLE web_cliente ADD CONSTRAINT cte_pk PRIMARY KEY ( id_cte );

CREATE TABLE web_cliente_habitacion (
    fecha_de_reservacion  DATE NOT NULL,
    fecha_de_inicio       DATE NOT NULL,
    fecha_de_fin          DATE NOT NULL,
    check_in              VARCHAR (20) NOT NULL,
    chek_out              VARCHAR (20) NOT NULL,
    pago_adelantado       INT NOT NULL,
    cte_id_cte            VARCHAR (10) NOT NULL,
    hbn_id_hbn            VARCHAR (10) NOT NULL
);

ALTER TABLE WEB_CLIENTE_HABITACION ADD CONSTRAINT CTE_HBN_PK PRIMARY KEY ( cte_id_cte,
                                                                               hbn_id_hbn );

CREATE TABLE WEB_CLIENTE_SERVICIO (
    cte_id_cte       VARCHAR (30) NOT NULL,
    svo_id_svo       VARCHAR (10) NOT NULL,
    fecha_de_inicio  DATE NOT NULL,
    fecha_de_fin     DATE NOT NULL,
    hora_de_inicio   DATE NOT NULL,
    hora_de_fin      DATE NOT NULL
);

ALTER TABLE WEB_CLIENTE_SERVICIO ADD CONSTRAINT CTE_SVO_PK PRIMARY KEY ( cte_id_cte,
                                                                             svo_id_svo );

CREATE TABLE web_empleado (
    id_epo      VARCHAR (10) NOT NULL,
    nombre      VARCHAR (20) NOT NULL,
    apellido    VARCHAR (20) NOT NULL,
    comision   INT NOT NULL,
    telefono    VARCHAR (12) NOT NULL,
    edo_id_edo  VARCHAR (10)
);

ALTER TABLE web_empleado ADD CONSTRAINT epo_pk PRIMARY KEY ( id_epo );

CREATE TABLE web_habitacion (
    id_hbn          VARCHAR (10) NOT NULL,
    costo           INT NOT NULL,
    cupo            VARCHAR (5) NOT NULL,
    disponibilidad  INT NOT NULL
);

ALTER TABLE web_habitacion ADD CONSTRAINT hbn_pk PRIMARY KEY ( id_hbn );

CREATE TABLE web_opinion (
    email       VARCHAR (30) NOT NULL,
    texto       VARCHAR (250) NOT NULL,
    facebook    VARCHAR (20),
    cte_id_cte  VARCHAR (10) NOT NULL
);

CREATE TABLE web_servicios (
    id_svo    VARCHAR (10) NOT NULL,
    nombre    VARCHAR (15) NOT NULL,
    costo     INT NOT NULL,
    duracion  VARCHAR (15) NOT NULL
);

ALTER TABLE web_servicios ADD CONSTRAINT svo_pk PRIMARY KEY ( id_svo );

ALTER TABLE web_cliente
    ADD CONSTRAINT cte_epo_fk FOREIGN KEY ( epo_id_epo )
        REFERENCES web_empleado ( id_epo );

ALTER TABLE WEB_CLIENTE_HABITACION
    ADD CONSTRAINT CTE_HBN_CTE_FK FOREIGN KEY ( cte_id_cte )
        REFERENCES web_cliente ( id_cte );

ALTER TABLE WEB_CLIENTE_HABITACION
    ADD CONSTRAINT CTE_HBN_HBN_FK FOREIGN KEY ( hbn_id_hbn )
        REFERENCES web_habitacion ( id_hbn );

ALTER TABLE WEB_CLIENTE_SERVICIO
    ADD CONSTRAINT CTE_SVO_CTE_FK FOREIGN KEY ( cte_id_cte )
        REFERENCES web_cliente ( id_cte );

ALTER TABLE WEB_CLIENTE_SERVICIO
    ADD CONSTRAINT CTE_SVO_SVO_FK FOREIGN KEY ( svo_id_svo )
        REFERENCES web_servicios ( id_svo );

ALTER TABLE web_empleado
    ADD CONSTRAINT epo_epo_fk FOREIGN KEY ( edo_id_edo )
        REFERENCES web_empleado ( id_epo );

ALTER TABLE web_opinion
    ADD CONSTRAINT opn_cte_fk FOREIGN KEY ( cte_id_cte )
        REFERENCES web_cliente ( id_cte );

-- Descripción de las tablas

describe web_cliente;

describe web_cliente_habitacion;

describe web_cliente_servicio;

describe web_empleado;

describe web_habitacion;

describe web_opinion;

describe web_servicios;