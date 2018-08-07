CREATE TABLE item_prop (
  item_id varchar NOT NULL,
  name    varchar NOT NULL,
  json    varchar NOT NULL,

  CONSTRAINT item_prop_pkey PRIMARY KEY (item_id, name)
);

CREATE TABLE label (
  type varchar NOT NULL,
  name varchar NOT NULL,
  text varchar,

  CONSTRAINT label_pkey PRIMARY KEY (type, name)
);
