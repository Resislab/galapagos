create table "roadmap_project"
(
    "id"                   uuid        NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    "name"                 text        NOT NULL,
    "reference"            text        NOT NULL,
    "description"          text,
    "budget"               float,
    "budget_devise"        text,
    "start_date"           date        NOT NULL,
    "end_date"             date        NOT NULL,
    "resource_usage_limit" float       NOT NULL,
    "created_at"           timestamptz NOT NULL DEFAULT now(),
    "updated_at"           timestamptz NOT NULL DEFAULT now()
);